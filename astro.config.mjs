// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.bymaryportfolio.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', fa: 'fa' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
