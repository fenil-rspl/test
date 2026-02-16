# File Upload App

This is a frontend application for uploading files.

## Directory Structure

frontend/
├── docs/
│   ├── FRONTEND.md
│   └── README.md
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── FileList.tsx
│   │   ├── FileUpload.tsx
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
├── .gitignore
├── Dockerfile
├── index.html
└── package.json

## Quick Start

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file from `.env.example` and set your API URL.
4. Run `npm start` to start the development server.