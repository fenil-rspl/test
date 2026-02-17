# Frontend

This repository contains the frontend application built with Vue.js. It interacts with the backend API to provide a complete user interface.

## Directory Structure
frontend/
├── docs/
│   ├── FRONTEND.md
│   └── README.md
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── NotFound.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── styles/
│   │   ├── components.css
│   │   └── globals.css
│   ├── utils/
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── main.css
├── .env.example
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── README.md
└── vite.config.js

## Quick Start

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`