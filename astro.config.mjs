// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://enmamosley.github.io',
  base: '/pabellon-m/',
  vite: {
    plugins: [tailwindcss()]
  }
});