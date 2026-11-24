// Site-wide settings. Change values here, not in the pages.

export const SITE = {
  brand: 'VirtusPromPT',
  legalName: 'Virtuous Prompts, Lda',
  url: 'https://www.virtusprompt.com',
  calendly: 'https://calendly.com/rodrigo-fernandes-virtusprompt/30min',
  email: 'contact@virtusprompt.com',
  simvou: 'https://simvou.pt/?utm_source=virtusprompt&utm_medium=referral',
};

export type Lang = 'pt' | 'en';

// Where each page lives in each language (used by the PT/EN switch and hreflang tags).
export const ROUTES = {
  home: { pt: '/', en: '/en/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
  thanks: { pt: '/obrigado/', en: '/en/thank-you/' },
} as const;

export type RouteKey = keyof typeof ROUTES;
