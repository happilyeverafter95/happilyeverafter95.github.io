// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Set PUBLIC_SITE_URL in production (e.g. https://yoursite.com) for correct canonical URLs and RSS.
const site = process.env.PUBLIC_SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});