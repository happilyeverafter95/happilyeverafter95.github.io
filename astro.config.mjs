// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// User site: https://happilyeverafter95.github.io — override with PUBLIC_SITE_URL if needed.
const site = process.env.PUBLIC_SITE_URL || 'https://happilyeverafter95.github.io';

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});