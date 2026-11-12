// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.virtusprompt.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-PT', en: 'en' } },
      // Thank-you pages are not useful in search results
      filter: (page) => !/\/(obrigado|thank-you)\/?$/.test(page),
    }),
  ],
});
