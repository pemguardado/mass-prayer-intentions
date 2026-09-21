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
- Database schema is managed via Supabase CLI migrations in `supabase/migrations/` (see "Database Migrations" below), not a hand-maintained schema file.
- Project currently includes generated build output (`dist/`) and dependencies (`node_modules/`) in workspace, but these are ignored by Git.

## Database Migrations (Supabase CLI)
- Project ref: `dbqzuialdajtuzzndjmu`. Linked project metadata lives in `supabase/.temp/` (gitignored).
- The `supabase` CLI is installed as a local devDependency; invoke it with `npx supabase <command>`.
- One-time setup (already done): `npx supabase link --project-ref dbqzuialdajtuzzndjmu` using a personal access token from https://supabase.com/dashboard/account/tokens, exported as `SUPABASE_ACCESS_TOKEN`.
- Workflow for future DB changes:
  1. `SUPABASE_ACCESS_TOKEN=... npx supabase migration new <short_description>` to scaffold a new file in `supabase/migrations/`.
  2. Write the SQL changes in that file.
  3. `SUPABASE_ACCESS_TOKEN=... npx supabase db push` to apply it to the live database.
  4. Commit the new migration file to the repo (same PR as any related frontend changes).
- `npx supabase migration list` shows which migrations are applied locally vs. remotely.

## CI/CD (GitHub Actions + Vercel)
- Repository: `https://github.com/pemguardado/mass-prayer-intentions`
- `.github/workflows/ci.yml`: runs `npm ci` + `npm run build` on every push/PR to `master`.
- `.github/workflows/deploy.yml`: deploys to Vercel production on every push to `master` using the Vercel CLI.
- Required repository secrets (Settings → Secrets and variables → Actions):
  - `VERCEL_TOKEN`: personal token from https://vercel.com/account/tokens
  - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`: found in `.vercel/project.json` after running `vercel link` locally, or in the Vercel project settings.
- Production URL (stable, always reflects the latest `master` deploy): `https://mass-prayer-intentions.vercel.app`. Each individual deploy also gets a unique one-off URL, which is only a snapshot and does not update.

## Date
- Document generated on: 2026-06-21
