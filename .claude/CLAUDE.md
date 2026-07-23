# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Descolgado" — a personal blog / digital magazine for a single author (Santiago), conceived as an art piece rather than a conventional editorial site (visual references: 3AM, JotDown, Interview, Vulture). No code has been written yet; only the specs in `scope documents/` exist. Treat this file as the spec until implementation decisions are made and documented here.

## Core constraint: $0 monthly cost

This is the non-negotiable design principle for every technical decision. Never introduce a paid tier, paid API, always-on server, or managed database.

- **Hosting:** Vercel Hobby (free) plan only.
- **Rendering:** Static site generation (Jamstack) — no server that needs to run 24/7, no traditional CMS+DB stack (explicitly rejecting WordPress-style architectures for this reason).
- **CMS:** Sanity.io free plan is the recommended headless CMS (native image optimization, real-time preview, simple auth). Contentful was considered as an alternative but Sanity is preferred.
- **Frontend framework:** not yet decided — choice is between Next.js and Astro (see scope doc "Next Steps"). Don't assume one; confirm before scaffolding.
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
