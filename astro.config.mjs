// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  adapter: vercel()
});