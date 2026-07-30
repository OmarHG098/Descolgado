# Descolgado — Project Roadmap & Scope

Repo: github.com/OmarHG098/Descolgado

## Vision
Personal artistic blog/digital magazine for Santiago, sole author. Not a
conventional editorial site — erratic, unhangable-painting energy.
References: 3AM, JotDown, Interview, Vulture.

## Design System
- **Typography:** Grotesque (nav/sidebar/UI) · Helvetica (article body,
  black text) · Serif (article "ficha"/details)
- **Palette 1 (nav/header/sidebar):** yellow `#D4A017`, quarry brown `#C4A882`
- **Palette 2 (reading area/article):** base gray `#E8E4DC`, red accent `#9B2A2A`

## Content Model
Sanity document type `piece`:
- `title` (string, required)
- `slug` (slug, from title, required)
- `mainImage` (image, hotspot)
- `body` (Portable Text)
- `ficha` (object: `summary` text, `date`) — expandable later

Constraint: max 1–2 images per piece, auto-converted to `.webp`, lazy-loaded.

## Feature Scope
- Navbar: Home / About / Contact + keyword search
- Home: feed of Pieces, ficha visible on each card
- Piece detail view: sidebar (filter, newest→oldest) shown *only* here
- WhatsApp share button on each piece
- No native comments — link out to an Instagram post instead
- Footer: copyright + design credit
- Sole-author editing: Sanity Studio's own login covers "simplified auth" —
  no custom auth needed unless the public site itself should be gated
- Autosave + live preview while writing (Sanity Studio feature)

## Infrastructure
$0/month target — Vercel Hobby (Jamstack/static generation) + Sanity.io free plan.

## Stack (as of repo check)
Next.js 16.2.11, React 19.2.4, Tailwind v4, TypeScript, `next-sanity`,
`@sanity/client`, `@sanity/image-url`, Sanity v6.

## Development Plan (≤3h per chunk)

| # | Chunk | Status |
|---|-------|--------|
| 0 | Wire branch/PR skill + subagents to this plan | done |
| 1 | Finish `piece` schema review | done |
| 2 | Sanity → Next.js data layer (env, client, first GROQ query) | done |
| 3 | Design system foundation (Tailwind config, `next/font` for the 3 typefaces) | done |
| 4 | Home page feed (Piece cards, ficha visible) | not started |
| 5 | Piece detail page (Portable Text render, Serif styling, sidebar) | not started |
| 6 | Navbar + footer + keyword search | not started |
| 7 | Social features (WhatsApp share, Instagram comment link) | not started |
| 8 | Image pipeline (confirm Sanity's built-in webp/lazy-load) | not started |
| 9 | Deploy to Vercel + deploy checklist | not started |

## Claude Code Workflow
- Terminal-based (not desktop app) — branch/PR skills rely on git + hooks
- `.claude/skills/branch/` — creates `feat/0N-slug` branches per chunk above
- `.claude/skills/pr/` — generates PR description from diff, includes a
  design-compliance check against this doc
- Subagents: `code-reviewer` (read-only), `security-reviewer` (env vars,
  Portable Text XSS, auth exposure), `design-system-guardian` (checks new UI
  against the palette/typography rules above)
- `AGENTS.md`/`CLAUDE.md` should summarize this doc, not the placeholder
  text that was in AGENTS.md originally
