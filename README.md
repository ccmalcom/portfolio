# Chase Malcom — Portfolio

My personal portfolio site. A single-page site showcasing my work as a Salesforce
Developer and web developer, built with Next.js and deployed on Vercel.

**Live:** [chasemalcom.com](https://chasemalcom.com)

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — configured entirely in `src/app/globals.css` via `@theme` (no `tailwind.config.ts`)
- **Framer Motion** for animations
- **next-themes** for light/dark mode (defaults to dark, with a no-flash inline script)
- **Formspree** for the contact form
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Project structure

```
src/
  app/
    page.tsx        # thin shell: Navigation → Hero → About → Projects → Skills → Contact → Footer
    layout.tsx      # root layout + theme boot script
    globals.css     # Tailwind v4 @theme config and CSS custom properties (light/dark)
  components/        # one file per section, barrel-exported from index.ts
  data/
    portfolio.ts    # single source of truth: projects, skills, nav, social links, about copy
```

## Editing content

All site content lives in **`src/data/portfolio.ts`** — there is no CMS or API. To add
or change a project, skill, social link, or the About copy, edit that file only.

Project cards support three display modes based on the fields you set in `portfolio.ts`:

1. `bg` + `image` — a GIF floated over a background image
2. `image` + `backImage` — a stacked card with a 3D tilt on hover and click-to-swap
3. `image` only — a simple image with hover-overlay links

## Theming

Light and dark modes are driven by CSS custom properties in `:root` (warm paper tones)
and `.dark` (near-black), defined in `globals.css`. Decorative spot colors are used
consistently per section: blue → About, pink → Projects, green → Skills, yellow → Contact.

## Contact form

`Contact.tsx` submits to Formspree via `fetch`. The endpoint is hardcoded — no
environment variables are required.

## Deployment

Deployed on Vercel with default build settings (no special config beyond
`next.config.ts`). Pushes to the main branch deploy automatically.
