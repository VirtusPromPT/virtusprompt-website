// Site-wide settings. Change values here, not in the pages.
import { PAGES, PAGE_IDS, type PageId } from './i18n/pages';

export const SITE = {
  brand: 'VirtusPromPT',
  legalName: 'Virtuous Prompts, Lda',
  url: 'https://www.virtusprompt.com',
  calendly: 'https://calendly.com/rodrigo-fernandes-virtusprompt/30min',
  email: 'contact@virtusprompt.com',
  simvou: 'https://simvou.pt/?utm_source=virtusprompt&utm_medium=referral',
  // Managing partner, shown in the structured data as an `employee` of the company.
  // If Rodrigo also founded the company, change `employee` to `founder` in src/layouts/Base.astro.
  person: 'Rodrigo Fernandes',
  // Company identification shown in the footer and in the structured data.
  // Leave a value empty ('') and it is simply not shown.
  nipc: '', // e.g. '512345678'
  registeredOffice: '', // e.g. 'Rua Exemplo 1, 1000-001 Lisboa'
  // Public profiles of the company (LinkedIn, GitHub, ...). Only list profiles you control and keep up to date.
  profiles: [] as { label: string; url: string }[],
};

export type Lang = 'pt' | 'en';

// Where each page lives in each language (used by the PT/EN switch and hreflang tags).
// Inner pages (services, about, case studies, guides) take their addresses from src/i18n/pages.ts.
const pageRoutes = Object.fromEntries(
  PAGE_IDS.map((id) => [id, { pt: `/${PAGES[id].slug.pt}/`, en: `/en/${PAGES[id].slug.en}/` }]),
) as Record<PageId, { pt: string; en: string }>;

export const ROUTES = {
  home: { pt: '/', en: '/en/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
  thanks: { pt: '/obrigado/', en: '/en/thank-you/' },
  ...pageRoutes,
};

export type RouteKey = 'home' | 'privacy' | 'thanks' | PageId;
