# NERV - Full Stack Application

A modern full-stack application built with **FastAPI** (backend) and **React** (frontend).

## 🚀 Quick Start (Fastest Way)

### Prerequisites
- **Python 3.8+** (with pip)
- **Node.js 18+** (with npm)
- **Git**

### 1. Clone and Setup
```bash
git clone https://github.com/saimaheswar/NERV.git
cd NERV
```

### 2. Backend Setup (30 seconds)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
PORT=8000 python server.py
```

### 3. Frontend Setup (30 seconds)
```bash
# In a new terminal
cd frontend
npm install --legacy-peer-deps
npm start
```

### 4. Access Your App
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Health Check**: http://localhost:8000/

## 🎯 One-Command Setup (Alternative)

If you want to run everything with minimal setup:

```bash
# Terminal 1 - Backend
cd backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt && PORT=8000 python server.py

# Terminal 2 - Frontend  
cd frontend && npm install --legacy-peer-deps && npm start
```

## 📁 Project Structure

```
NERV/
├── backend/                 # FastAPI Backend
│   ├── server.py           # Main server file
│   ├── requirements.txt    # Python dependencies
│   └── venv/              # Virtual environment
├── frontend/               # React Frontend
│   ├── src/               # Source code
│   ├── package.json       # Node dependencies
│   └── public/            # Static files
└── README.md              # This file
```

## 🔧 Configuration

### Backend Configuration
- **Port**: 8000 (configurable via `PORT` environment variable)
- **Database**: MongoDB (optional, app works without it)
- **CORS**: Configured for frontend communication

### Frontend Configuration
- **Port**: 3000
- **Proxy**: Automatically forwards API calls to backend
- **Build Tool**: CRACO (Create React App Configuration Override)

## 🛠️ Available Scripts

### Backend
```bash
cd backend
source venv/bin/activate
python server.py              # Start server
python -m pytest             # Run tests
```

### Frontend
```bash
cd frontend
npm start                    # Start development server
npm run build               # Build for production
npm test                    # Run tests
```

## 🌐 API Endpoints

- `GET /` - Health check
- `GET /api/` - API root
- `POST /api/status` - Create status check
- `GET /api/status` - Get status checks

## 🐛 Troubleshooting

### Port 5000 Already in Use
The app automatically uses port 8000 for the backend to avoid conflicts with macOS ControlCenter.

### Dependency Issues
If you encounter peer dependency warnings, the app is configured to use `--legacy-peer-deps` for compatibility.

### Database Connection
The app works without MongoDB. Database features will be disabled if MongoDB is not available.

## 🚀 Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
```

### Run Production Server
```bash
cd backend
source venv/bin/activate
python server.py
```

The production server will serve both the API and the built frontend.

## 📝 Development Notes

- Backend uses FastAPI with async/await
- Frontend uses React 19 with modern hooks
- UI components built with Radix UI and Tailwind CSS
- Hot reload enabled for both frontend and backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Need help?** Check the troubleshooting section or open an issue on GitHub.