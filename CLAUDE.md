# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

### Data layer

All content — projects, skills, nav links, social links, about text — lives in `src/data/portfolio.ts`. This is the single source of truth; no CMS or API. To add/edit a project, skill, or bio text, edit that file only.

### Component structure

`src/app/page.tsx` is a thin shell that renders sections in order: `Navigation → Hero → About → Projects → Skills → Contact → Footer`. Each section is its own component in `src/components/`, barrel-exported from `src/components/index.ts`.

### Theming

- **Tailwind v4** config lives entirely in `src/app/globals.css` under `@theme {}` — there is no `tailwind.config.ts` for color tokens.
- Light/dark mode uses CSS custom properties defined in `:root` (warm paper tones) and `.dark` (near-black). The `ThemeProvider` wraps the app with `next-themes`, defaulting to dark.
- A blocking inline script in `layout.tsx` applies `.dark` on `<html>` before first paint to prevent flash.
- Spot colors (`--color-spot-pink`, `--color-spot-blue`, etc.) are decorative accent colors used consistently per section: blue→About, pink→Projects, green→Skills, yellow→Contact.

### ProjectCard image variants

`Projects.tsx` supports three display modes based on fields in `portfolio.ts`:
1. **`bg` + `image`** — GIF floated over a background image (used for Meeting Light).
2. **`image` + `backImage`** — stacked card with 3D tilt on hover and click-to-swap (used for Canine Castaways).
3. **`image` only** — simple image with hover overlay links.

### Contact form

Submits to Formspree (`https://formspree.io/f/xwkalrjq`) via fetch in `Contact.tsx`. No environment variable needed — the endpoint is hardcoded.

### Deployment

Deployed on Vercel. No special build config beyond `next.config.ts` defaults.
