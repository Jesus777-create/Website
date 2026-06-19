// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Emits a host-agnostic `dist/` that any static host
// (Netlify, Vercel, GitHub Pages, …) can serve.
export default defineConfig({
  output: 'static',
});
