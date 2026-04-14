# WIN RIDGE Group Website

## Overview

Full-stack website for WIN RIDGE Group — a prestigious conglomerate in Hyderabad, India with 25+ years of excellence. The site covers all business divisions: Real Estate, Education (University/Business School/Boarding School), Architecture & Interior Design, Trust, and features an AI voice chatbot assistant.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifacts/win-ridge)
- **API framework**: Express 5 (artifacts/api-server)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **AI**: OpenAI via Replit AI Integrations (gpt-5.2)
- **Build**: esbuild (CJS bundle)
- **Styling**: Tailwind CSS v4, Playfair Display + Inter fonts
- **Animations**: Framer Motion

## Artifacts

### win-ridge (Frontend)
- Preview path: `/`
- Port: 19280
- Multi-page React app with 8 pages: Home, About, Education, Real Estate, Architecture, Team, Trust, Contact
- AI Voice Chatbot (floating widget, bottom-right)
- Navy + Gold color theme, prestigious conglomerate branding

### api-server (Backend)
- Preview path: `/api`
- Port: 8080
- POST `/api/chat` — AI chatbot endpoint powered by OpenAI gpt-5.2
- GET `/api/healthz` — Health check

## Business Divisions
1. **WIN RIDGE Real Estate** — Property, IBO program, financial wealth education
2. **WIN RIDGE University** — Degree to PhD, Hyderabad
3. **WIN RIDGE Business School** — Marketing, sales, entrepreneurship
4. **WIN RIDGE Boarding School** — LKG to Class 2 residential school
5. **WIN RIDGE Trust** — Social services and community development
6. **WIN RIDGE Architecture & Interior Design** — 5 years excellence

## Core Team
- CMD (Chairman & Managing Director)
- ED (Executive Director)
- Director
- President
- General Manager

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/win-ridge run dev` — run frontend locally
