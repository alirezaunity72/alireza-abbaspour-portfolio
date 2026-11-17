import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Public production URL — GitHub Pages user site (accessible from Iran);
// canonical/OG base, also wired to src/data/profile.ts `url`.
export default defineConfig({
  site: 'https://alirezaunity72.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
