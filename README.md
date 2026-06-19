# AccessWave Technologies — Website

Marketing site for AccessWave, built with [Astro](https://astro.build). Static output,
host-agnostic.

## Develop

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # serve the built dist/ locally
```

## Project structure

```
public/logo.png                Logo asset (served at /logo.png)
src/layouts/BaseLayout.astro   <head>, fonts, skip link
src/styles/global.css          Design tokens + all styles (from the founder's mockup)
src/pages/index.astro          Composes the page
src/components/*.astro         One component per section
src/data/team.ts               Team member data
src/scripts/canvas.ts          Hero/origin "sound wave" canvas animations
accesswave.html                Founder's original mockup, kept as reference
```

## Waitlist form

The waitlist posts to [Formspree](https://formspree.io) (works on any host).

1. Create a free form at formspree.io and copy its ID.
2. `cp .env.example .env` and set `PUBLIC_FORMSPREE_ID=<your-id>`.

Until set, the form shows the confirmation message but doesn't deliver email (a warning
is logged to the console).

## TODO (placeholders from the mockup to confirm with the founder)

- Real Formspree form ID (`PUBLIC_FORMSPREE_ID`).
- Contact email (`hello@accesswave.tech`) in `src/components/Waitlist.astro`.
- "Investor deck" link (currently `#`) in `src/components/Waitlist.astro`.

## Deploy

`npm run build` emits a static `dist/`. Deploy to any static host (Netlify, Vercel,
GitHub Pages, …). No server required.
