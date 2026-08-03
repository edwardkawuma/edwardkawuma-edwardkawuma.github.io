# Auxano Tech Portfolio

A professional React + TypeScript portfolio site for Eng. Kawuma Edward, showcasing a multi-domain technology ecosystem across GIS, AI engineering, aviation simulation, enterprise architecture, and digital operations.

## Highlights

- Modern single-page portfolio experience with smooth section navigation
- Premium visual system using Tailwind CSS (glassmorphism, gradients, motion, reveal effects)
- Structured project showcase with status filters (`Live`, `Beta`, `R&D`)
- Skills and specialization modules with reusable data-driven components
- Resume section with education, achievements, and certifications
- Contact form integrated with Supabase for message capture
- Mobile-first responsive layout across all sections

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Lucide React icons
- Supabase (database insert for contact form)

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- components/        # UI sections (Hero, About, Projects, Skills, Resume, Contact, Footer)
|   |-- data/              # Content sources for projects and skills
|   |-- hooks/             # Reusable hooks (e.g. reveal animations)
|   |-- lib/               # External service clients (Supabase)
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|-- supabase/
|   `-- migrations/        # SQL migration(s) for contact form backend
|-- tailwind.config.js
|-- vite.config.ts
`-- package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and set:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

If these are missing, the app still loads but the contact form backend will be unavailable.

### 3. Run development server

```bash
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Supabase Setup

Run the SQL migration in your Supabase project to create the `contact_messages` table and policy:

- Migration file: `supabase/migrations/20260803165406_create_contact_messages.sql`

This migration:

- Creates `contact_messages`
- Enables row-level security (RLS)
- Adds an `INSERT` policy for `anon` and `authenticated` roles

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production assets
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run typecheck` - Run TypeScript type checks

## Production Build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`.

## License

MIT
