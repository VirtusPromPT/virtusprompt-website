// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { ROUTES, LAST_UPDATED } from './src/config.ts';
import { isDraft } from './src/i18n/pages.ts';

const SITE_URL = 'https://www.virtusprompt.com';
const abs = (/** @type {string} */ path) => new URL(path, SITE_URL).href;

// Every page exists in Portuguese and English, often under different slugs (/privacidade/ vs /en/privacy/),
// so the hreflang pairs in the sitemap come from ROUTES rather than from matching paths.
/** @type {Map<string, { lang: string; url: string }[]>} */
const alternates = new Map();
/** @type {Set<string>} */
const excluded = new Set();
// The last real change to each page, for <lastmod>.
/** @type {Map<string, string>} */
const lastmod = new Map();
for (const [key, route] of Object.entries(ROUTES)) {
  // Thank-you pages are not useful in search results; draft pages (still with TODOs) are noindex.
  if (key === 'thanks' || isDraft(key)) {
    excluded.add(abs(route.pt));
    excluded.add(abs(route.en));
    continue;
  }
  const links = [
    { lang: 'pt-PT', url: abs(route.pt) },
    { lang: 'en', url: abs(route.en) },
    { lang: 'x-default', url: abs(route.pt) },
  ];
  alternates.set(abs(route.pt), links);
  alternates.set(abs(route.en), links);
  const updated = LAST_UPDATED[/** @type {keyof typeof LAST_UPDATED} */ (key)];
  lastmod.set(abs(route.pt), updated);
  lastmod.set(abs(route.en), updated);
}

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !excluded.has(page),
      serialize(item) {
        const links = alternates.get(item.url);
        if (links) item.links = links;
        const updated = lastmod.get(item.url);
        if (updated) item.lastmod = updated;
        return item;
      },
    }),
  ],
});
