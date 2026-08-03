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

## Deploy to GitHub Pages

This repository is already connected to a GitHub Pages-style remote, so you can publish with either of the methods below.

### Option 1: Deploy from `main` branch (recommended for `<username>.github.io`)

If your repository name is exactly `<username>.github.io` (user site), GitHub serves from the repository root. In that case:

1. Build and push your source to `main`
2. In GitHub repository settings, open Pages
3. Set source to `Deploy from a branch`
4. Choose branch `main` and folder `/ (root)`

Your site will publish to:

- `https://<username>.github.io/`

### Option 2: Deploy prebuilt `dist/` via GitHub Actions

Use this if you prefer CI-based static deployment.

1. Create a workflow file at `.github/workflows/deploy.yml`
2. Add this workflow:

```yaml
name: Deploy Vite site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. In GitHub Pages settings, set source to `GitHub Actions`

### Environment Variables in Production

If contact form submission should work on the live site, add these repository variables/secrets for the build environment used by deployment:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Without them, the frontend still loads, but contact form inserts will be disabled.

### Vite Base Path Note

- For user sites (`<username>.github.io`): keep default Vite base (`/`)
- For project sites (`<repo-name>`): set `base: '/<repo-name>/'` in `vite.config.ts`
## License

MIT
