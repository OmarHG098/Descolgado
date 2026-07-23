# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Descolgado" — a personal blog / digital magazine for a single author (Santiago), conceived as an art piece rather than a conventional editorial site (visual references: 3AM, JotDown, Interview, Vulture). The initial technical foundation has been scaffolded (see "Implementation status" below); the page designs/features in "Page structure" are not yet built. Treat this file as the spec until further implementation decisions are made and documented here.

## Core constraint: $0 monthly cost

This is the non-negotiable design principle for every technical decision. Never introduce a paid tier, paid API, always-on server, or managed database.

- **Hosting:** Vercel Hobby (free) plan only.
- **Rendering:** Static site generation (Jamstack) — no server that needs to run 24/7, no traditional CMS+DB stack (explicitly rejecting WordPress-style architectures for this reason).
- **CMS:** Sanity.io free plan is the recommended headless CMS (native image optimization, real-time preview, simple auth). Contentful was considered as an alternative but Sanity is preferred.
- **Frontend framework:** Next.js (App Router, TypeScript) — confirmed and scaffolded.
- Any suggested library, service, or plan change must stay within free tiers.

## Auth model

Santiago is the sole author/admin — no multi-user system. Access to the editing interface is via a secure link/magic token, not a full username+password user management system.

## Content editor requirements

- Write directly in-browser with auto-save and live preview before publishing.
- Max 1–2 images per post (hard limit, protects free-tier storage).
- Images must be automatically converted to `.webp` on upload/processing.
- Lazy-load images.

## Design system

**Typography:**
- Body/general text: pure black `#000000`.
- UI/navigation (navbar, sidebar, interface elements): Grotesque-style typeface.
- General content body: Helvetica (or clean sans-serif alternative).
- Article detail page: Serif typeface (editorial/essay feel).

**Color palette:**
- Navigation / header / sidebar: Yellow `#D4A017` and quarry brown `#C4A882`.
- Reading area / article: Base gray background `#E8E4DC`, red `#9B2A2A` for sparing accents.

## Page structure

- **Navbar:** Home, About, Contact links + keyword search. Grotesque typography, yellow/brown accents.
- **Home:** Feed of "Pieces" (articles), each showing its technical data sheet ("ficha"), visible or expandable.
- **Piece/article view:** Sidebar shown only here, with filtering and newest-to-oldest chronological order. WhatsApp share button. Comments handled via redirect/integration to Instagram (not a native comment system).
- **Footer:** Copyright and design credits.

Terminology to keep consistent in code/content: an article is a "Piece" ("Pieza"), its metadata block is the "ficha" (data sheet).

## Implementation status

- **Stack:** Next.js 16 (App Router, TypeScript, `src/` dir), Tailwind CSS v4, package manager npm.
- **CMS:** Sanity Studio embedded in this same repo at the `/studio` route (`sanity.config.ts` at repo root, schema in `src/sanity/schemaTypes/`). Not a separate hosted Studio.
- **Sanity env vars** (in `.env.local`, git-ignored; `.env.local.example` documents the keys): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` (default `production`), `NEXT_PUBLIC_SANITY_API_VERSION`. These same three must also be added in Vercel → Project Settings → Environment Variables before the first deploy.
- **`Piece` schema** (`src/sanity/schemaTypes/piece.ts`) currently has: `title`, `slug`, `mainImage` (single image), `body` (Portable Text), `ficha` (nested object with `summary`/`date`, kept minimal on purpose so it can grow without reshaping the document).
- **Fonts (`next/font/google`, wired in `src/app/layout.tsx` + `@theme` tokens in `src/app/globals.css`):**
  - Grotesque/UI role → `Space Grotesk` (`font-grotesque` utility)
  - Serif/article role → `Source Serif 4` (`font-serif` utility)
  - Helvetica/body role → system stack `Helvetica Neue, Helvetica, Arial, sans-serif`, no Google Font (`font-body` utility)
- **Color tokens** (Tailwind `@theme` in `globals.css`): `descolgado-yellow` `#D4A017`, `descolgado-brown` `#C4A882`, `descolgado-gray` `#E8E4DC`, `descolgado-red` `#9B2A2A`, `descolgado-ink` `#000000`.
- **Home page** (`src/app/page.tsx`) is a placeholder proving the pipeline: fetches one `piece` via GROQ and renders it, with an empty-state message pointing to `/studio`. The real navbar/feed/sidebar/footer described in "Page structure" are not built yet.
- **Not yet done by the user:** creating the actual Sanity.io project (needed to fill in `.env.local` with a real project ID) and creating/linking the Vercel project for deployment — both require manual account setup outside this repo.
