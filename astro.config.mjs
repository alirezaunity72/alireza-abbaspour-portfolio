import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Public production URL — set after the hosting platform is chosen; enables
// canonical/OG URLs (they are wired to src/data/profile.ts `url`).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
