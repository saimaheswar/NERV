from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Global variables for database connection
client: Optional[AsyncIOMotorClient] = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    global client, db
    try:
        mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017/defaultdb')
        client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=5000)
        db = client[os.environ.get('DB_NAME', 'app_database')]
        # Test connection with a timeout
        await asyncio.wait_for(client.admin.command('ping'), timeout=3.0)
        logger.info("Connected to MongoDB")
    except Exception as e:
        logger.warning(f"Failed to connect to MongoDB: {e}")
        logger.info("Server will start without database connectivity")
        client = None
        db = None
    
    yield
    
    # Shutdown
    if client:
        client.close()
        logger.info("Closed MongoDB connection")

# Create the main app with lifespan handler
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add health check at root path
@app.get("/")
async def health_check():
    """Health check endpoint"""
    status = {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}
    
    # Check database connectivity if available
    if client is not None and db is not None:
        try:
            await client.admin.command('ping')
            status["database"] = "connected"
        except Exception as e:
            status["database"] = f"error: {str(e)}"
    else:
        status["database"] = "not_configured"
    
    return status

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    if db is None:
        raise HTTPException(status_code=503, detail="Database not available")
    
    try:
        status_dict = input.dict()
        status_obj = StatusCheck(**status_dict)
        _ = await db.status_checks.insert_one(status_obj.dict())
        return status_obj
    except Exception as e:
        logger.error(f"Error creating status check: {e}")
        raise HTTPException(status_code=500, detail="Failed to create status check")

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if db is None:
        raise HTTPException(status_code=503, detail="Database not available")
    
    try:
        status_checks = await db.status_checks.find().to_list(1000)
        return [StatusCheck(**status_check) for status_check in status_checks]
    except Exception as e:
        logger.error(f"Error retrieving status checks: {e}")
        raise HTTPException(status_code=500, detail="Failed to retrieve status checks")

# Include the router in the main app
app.include_router(api_router)

# Setup static file serving for production build
build_path = Path(__file__).parent.parent / "frontend" / "build"
if build_path.exists():
    # Mount the built frontend static files
    app.mount("/static", StaticFiles(directory=str(build_path / "static")), name="static")
    
    # Catch-all route for React Router (SPA)
    @app.get("/{path:path}")
    async def serve_frontend(path: str):
        """Serve the frontend app for all non-API routes"""
        # Don't serve frontend for API routes
        if path.startswith("api/"):
            raise HTTPException(status_code=404, detail="API route not found")
        
        # For all other routes, serve the index.html to support client-side routing
        index_file = build_path / "index.html"
        if index_file.exists():
            return FileResponse(str(index_file))
        else:
            raise HTTPException(status_code=404, detail="Frontend not built")
else:
    # Configure logging first
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    logger = logging.getLogger(__name__)
    logger.warning("Frontend build directory not found. Frontend will not be served.")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Database lifecycle is now handled by the lifespan context manager

if __name__ == "__main__":
    import uvicorn
    # Use PORT environment variable for deployment (defaults to 5000 for single-service)
    port = int(os.environ.get("PORT", 5000))
    uvicorn.run(app, host="0.0.0.0", port=port)
