import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Public production URL — Cloudflare Pages (canonical/OG base; also used by
// src/data/profile.ts `url` wiring).
export default defineConfig({
  site: 'https://ali-abbaspour.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
