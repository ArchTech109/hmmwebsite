# JulianGUI Hub

## Overview

JulianGUI Hub is a modern full-stack web application that serves as a script hub landing page. The application displays featured scripts with syntax highlighting and provides a sleek, hacker-themed UI with neon accents. It follows a client-server architecture with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals and transitions
- **Syntax Highlighting**: prism-react-renderer for code display
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Pattern**: RESTful endpoints defined in shared/routes.ts
- **Schema Validation**: Zod with drizzle-zod integration

### Project Structure
```
├── client/          # React frontend application
│   └── src/
│       ├── components/   # UI components (shadcn/ui + custom)
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and query client
│       └── pages/        # Route components
├── server/          # Express backend
│   ├── db.ts        # Database connection
│   ├── routes.ts    # API route handlers
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Vite dev server integration
├── shared/          # Shared types and schemas
│   ├── schema.ts    # Drizzle database schemas
│   └── routes.ts    # API route definitions with Zod
└── migrations/      # Drizzle database migrations
```

### Database Schema
- **scripts** table: Stores script content with fields for id, title, content, description, isLatest flag, and createdAt timestamp

### API Structure
- `GET /api/script/latest` - Retrieves the most recent script from the database

### Development vs Production
- Development: Vite dev server with HMR, served through Express middleware
- Production: Static files built to dist/public, served by Express

## External Dependencies

### Database
- **PostgreSQL**: Primary database via DATABASE_URL environment variable
- **Drizzle ORM**: Schema management and queries
- Database migrations managed with `drizzle-kit push`

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, tooltip, etc.)
- **Framer Motion**: Animation library
- **prism-react-renderer**: Code syntax highlighting
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- @replit/vite-plugin-runtime-error-modal for error display
- @replit/vite-plugin-cartographer and @replit/vite-plugin-dev-banner for development