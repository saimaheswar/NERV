# Overview

This is a full-stack web application built with a React frontend and FastAPI backend. The application appears to be in early development stages with a basic project structure set up. The frontend uses modern React with a comprehensive UI component library (shadcn/ui) and Tailwind CSS for styling, while the backend is built with FastAPI and MongoDB for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 19 with Create React App as the build tool
- **Routing**: React Router DOM for client-side navigation
- **Styling**: Tailwind CSS with custom CSS variables for theming support
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Form Handling**: React Hook Form with resolver support for form validation
- **Build Configuration**: CRACO for webpack customization with hot reload control and path aliasing
- **Icon System**: Lucide React for consistent iconography

## Backend Architecture
- **Framework**: FastAPI with async/await support for high-performance API endpoints
- **Database**: MongoDB with Motor async driver for non-blocking database operations
- **Configuration**: Environment-based configuration using python-dotenv
- **CORS**: Configured for cross-origin requests between frontend and backend
- **Static Files**: FastAPI static file serving capability for frontend assets
- **Connection Management**: Graceful database connection handling with lifespan events

## Data Storage
- **Primary Database**: MongoDB with async connection pooling
- **Connection Strategy**: Fault-tolerant connection with fallback to non-database mode
- **Database Client**: Motor (async MongoDB driver) for optimal performance

## Development Tools
- **Backend Testing**: pytest framework with code quality tools (black, isort, flake8, mypy)
- **Frontend Build**: Hot reload configuration with development optimization
- **Path Resolution**: Absolute imports using @ alias for cleaner code organization

# External Dependencies

## Backend Services
- **Database**: MongoDB (configurable via MONGO_URL environment variable)
- **Authentication Libraries**: JWT support with python-jose and passlib for security
- **HTTP Client**: requests and requests-oauthlib for external API integration
- **Cloud Services**: boto3 for AWS service integration
- **Data Processing**: pandas and numpy for data manipulation capabilities

## Frontend Libraries
- **UI Framework**: Extensive Radix UI component ecosystem for accessible components
- **Utilities**: date-fns for date manipulation, axios for HTTP requests
- **Development**: CRACO for build customization and webpack configuration

## Development Environment
- **Package Management**: npm for frontend dependencies, pip for backend packages
- **Build Tools**: Tailwind CSS for styling, PostCSS for CSS processing
- **Code Quality**: Comprehensive linting and formatting tools for consistent code style

The application follows a modern microservices-style architecture with clear separation between frontend and backend concerns, allowing for independent development and deployment of each layer.