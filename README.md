# AccessWave Technologies — Website

Marketing site for AccessWave, built with [Astro](https://astro.build).

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

## Accessibility

Targets **WCAG 2.2 AA**. Implemented: skip link, visible `:focus-visible` rings,
labeled form field with status association, semantic landmarks, `prefers-reduced-motion`
handling, AA-contrast text/UI tokens (`--w-muted` for text, `--w40` borders), and a
clean heading outline (h1 → h2 → h3).

**Known limitation — 2.2.2 (Pause/Stop/Hide):** the background sound-wave canvases
auto-animate. We honor the OS `prefers-reduced-motion` setting (animation halts to a
static frame) but provide no visible pause control, so the animation continues for users
who haven't set that preference. Add a pause toggle if strict 2.2.2 conformance is
required.

## TODO

- Real Formspree form ID (`PUBLIC_FORMSPREE_ID`).
- Contact email (`hello@accesswave.tech`) in `src/components/Waitlist.astro`.
- "Investor deck" link (currently `#`) in `src/components/Waitlist.astro`.

## Deploy

`npm run build` emits a static `dist/`. Deploy to any static host (Netlify, Vercel,
GitHub Pages, …). No server required.
