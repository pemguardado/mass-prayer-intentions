# Technical Information

## Project Overview
- Name: mass-prayer-intentions
- Description: Catholic Church Prayer Intentions Web App
- Type: Single Page Application (SPA)
- Build Tool: Vite 6
- UI Library: React 19
- Styling: Tailwind CSS 4 (via @tailwindcss/vite)

## Runtime and Tooling
- Node.js package manager: npm (package-lock.json present)
- Module system: ES Modules (`"type": "module"`)
- Entry HTML: `index.html`
- App mount point: `#root`

## Available Scripts
- `npm run dev`: Start Vite development server
- `npm run build`: Create production build in `dist/`
- `npm run preview`: Preview production build locally

## Source Structure
- `src/main.jsx`: React bootstrap and render pipeline
- `src/App.jsx`: Root layout (Header, main content, Footer)
- `src/components/Header.jsx`: Church name and page heading
- `src/components/PrayerIntentionForm.jsx`: Main form, validation, success state
- `src/components/Footer.jsx`: Footer text and scripture quote
- `src/index.css`: Tailwind import and global stylesheet entry

## Functional Behavior
- Displays a form to submit prayer intentions with fields:
  - Submitter name
  - Name of the prayer
  - Intention description
  - Mass time selection
- Client-side validation ensures all fields are completed.
- On successful submit:
  - Form data is inserted into Supabase.
  - UI switches to a submission confirmation card only after the insert succeeds.
- Prayer intentions are persisted through Supabase in `public.prayer_intentions`.
- Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in a local `.env` file.

## Git and Version Control
- Git repository status: initialized in project root (`.git/`)
- `.gitignore` is configured for:
  - `node_modules/`
  - `dist/`
  - env files (`.env*`)
  - editor/OS artifacts
  - log files

## Current Technical Notes
- The expected Supabase table and anonymous insert policy are documented in `supabase/schema.sql`.
- Project currently includes generated build output (`dist/`) and dependencies (`node_modules/`) in workspace, but these are ignored by Git.

## Date
- Document generated on: 2026-06-21
