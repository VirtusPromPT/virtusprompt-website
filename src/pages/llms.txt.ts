// /llms.txt: a plain summary of the company and its published pages, for AI assistants.
// Built from the same data as the site, so it never lists draft pages.
import type { APIRoute } from 'astro';
import { SITE, ROUTES } from '../config';
import { strings } from '../i18n/strings';
import { PAGES, PAGE_IDS, isPublished } from '../i18n/pages';

export const GET: APIRoute = () => {
  const en = strings.en;
  const abs = (path: string) => new URL(path, SITE.url).href;
  const published = PAGE_IDS.filter(isPublished);

  const lines = [
    `# ${SITE.brand}`,
    '',
    `> ${en.meta.description}`,
    '',
    `${SITE.brand} is the brand of ${SITE.legalName}, a software development and technology consulting company in Portugal. ${SITE.person} is the founder and CEO. The site is in Portuguese (default) and English.`,
    '',
    `- Contact: ${SITE.email}`,
    `- Book a call: ${SITE.calendly}`,
    `- Works remotely, or in person in Portugal. Usual reply time: 1–2 business days.`,
    ...(SITE.nipc ? [`- Company number (NIPC): ${SITE.nipc}`] : []),
    ...SITE.profiles.map((p) => `- ${p.label}: ${p.url}`),
    '',
    '## Services',
    '',
    ...en.services.items.map((s) => `- ${s.title}: ${s.text}`),
    '',
    '## Pages',
    '',
    `- [Home (English)](${abs(ROUTES.home.en)}): services, process, FAQ and contact`,
    `- [Início (Português)](${abs(ROUTES.home.pt)}): serviços, processo, perguntas frequentes e contacto`,
    ...published.flatMap((id) => [
      `- [${PAGES[id].en.title}](${abs(ROUTES[id].en)}): ${PAGES[id].en.description}`,
      `- [${PAGES[id].pt.title}](${abs(ROUTES[id].pt)}): ${PAGES[id].pt.description}`,
    ]),
    '',
    '## Products',
    '',
    `- [Sim, vou](https://simvou.pt/): ${en.products.simvou}`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
