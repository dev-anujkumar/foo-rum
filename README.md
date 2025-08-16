# Social Feeds App

A modern social media feed application built with React, TypeScript, and TailwindCSS.

## Live Application

**Live URL**: [https://dev-anujkumar.github.io/foo-rum/)]

## Features

- **Authentication**: Sign in/Sign up with session persistence
- **Post Creation**: Rich text editor with emoji picker
- **Social Feed**: Interactive posts with like, comment, share

## Tech Stack

- React 19 + TypeScript
- TailwindCSS
- React Router (HashRouter for GitHub Pages)
- React Context API

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm start
```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Usage

- **Demo Credentials**: `demo@example.com` / `password123`
- **Sign Up**: Create new account with any email/password
- **Create Posts**: Use the editor to publish new content

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable components
│   ├── posts/          # Post-related components
│   ├── editor/         # Editor components
│   ├── Header.tsx
│   ├── PostCard.tsx
│   └── PostEditor.tsx
├── context/
│   └── AuthContext.tsx
├── pages/
│   ├── Feed.tsx
│   ├── SignIn.tsx
│   └── SignUp.tsx
└── types/
    └── index.ts
```

## Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests

## Deployment

Ready for GitHub Pages deployment with HashRouter configuration.
