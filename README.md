# VirtusPromPT website

Static site built with [Astro](https://astro.build), hosted on Netlify, served at **www.virtusprompt.com**.

| Page | PT | EN |
|---|---|---|
| Home | `/` | `/en/` |
| Service: technical interviews | `/entrevistas-tecnicas/` | `/en/technical-interviews/` |
| Service: mobile apps | `/desenvolvimento-apps-mobile/` | `/en/mobile-app-development/` |
| Service: custom software | `/software-a-medida/` | `/en/custom-software-development/` |
| Service: technology consulting | `/consultoria-tecnologica/` | `/en/technology-consulting/` |
| About | `/sobre/` | `/en/about/` |
| Clients and projects | `/clientes/` | `/en/clients/` |
| Guide: how much an app costs | `/quanto-custa-desenvolver-uma-app/` | `/en/how-much-does-an-app-cost/` |
| Guide: custom or off-the-shelf | `/software-a-medida-ou-pronto-a-usar/` | `/en/custom-vs-off-the-shelf-software/` |
| Privacy policy | `/privacidade/` | `/en/privacy/` |
| After sending the form | `/obrigado/` | `/en/thank-you/` |
| Not found | `404.html` (bilingual) | |

The build also writes `/sitemap-index.xml` and `/llms.txt` from the same data.

## Where to change things

| What | File |
|---|---|
| Home page text, menus and buttons, in PT and EN | `src/i18n/strings.ts` |
| Inner pages (services, about, clients, guides): text, addresses and dates | `src/i18n/pages.ts` |
| Calendly link, contact email, company details, public profiles | `src/config.ts` |
| Privacy policy text | `src/pages/privacidade.astro`, `src/pages/en/privacy.astro` |
| Colours, fonts, layout | `src/styles/global.css` (colour tokens at the top) |
| Page structure | `src/components/Home.astro`, `ContentPage.astro`, `Header.astro`, `Footer.astro` |
| Page titles, link previews, structured data | `src/layouts/Base.astro` |
| Portrait | `src/assets/rodrigo.jpg` (square; Astro resizes and converts it) |
| Client logos | `public/images/*.webp` (dark logo on transparent background) |
| Link preview images | `public/og-pt.png`, `public/og-en.png` (1200×630) |
| Browser tab icons | `public/favicon.ico`, `favicon-32.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` |
| Security headers and caching | `netlify.toml` |
| Redirects from old Squarespace URLs | `public/_redirects` |

### Inner pages

Each inner page is one entry in `src/i18n/pages.ts`, with its text in both languages.

- **Dates:** `published` is the day the page first went live and never changes. Set `updated` to today whenever you change the text; it is shown on guides and sent to search engines in the sitemap. The home page and privacy policy keep theirs in `LAST_UPDATED` in `src/config.ts`.
- **Drafts:** a page that still contains `[TODO: ...]` is built so you can preview it, but it is hidden from search engines, the sitemap, the menus and every link. Remove its last TODO and it goes live.
- **Links between pages:** add `more: '<page id>'` (or `more: 'contact'`) to a section to end it with a link to that page.

## Run it on your Mac

```bash
npm install        # first time only
npm run dev        # live preview at http://localhost:4321, reloads on save
npm run check      # look for mistakes in the code without building
npm run build      # check, then production build into dist/
npm run preview    # serve the production build locally
```

Keep the repository in an ordinary local folder, not in Google Drive or iCloud: synced folders make the build extremely slow.

Netlify builds with Node 24 (set in `netlify.toml` and `.nvmrc`). Node is installed through Homebrew. If `npm` is "not found" in a terminal, run `export PATH=/opt/homebrew/bin:$PATH` first.

## Still to confirm

The site is live. These are checks only you can do:

- [ ] **Contact email**: the site shows `contact@virtusprompt.com` (set in `src/config.ts`). Make sure the address exists in Google Workspace.
- [ ] **Privacy policy**: read both versions and adjust anything that doesn't match how you work. It's a reasonable draft, not legal advice.
- [ ] **Read the English copy** in `src/i18n/strings.ts` and `src/i18n/pages.ts`.
- [ ] **Search engines**: verify the site in Google Search Console and Bing Webmaster Tools, and submit `https://www.virtusprompt.com/sitemap-index.xml`.
- [ ] **Email spoofing**: the domain's DMARC record is `p=none`, which only monitors. Once you've confirmed your own mail passes SPF and DKIM, change it to `p=quarantine` in the domain's DNS.
- [ ] **Content-Security-Policy**: it is in report-only mode in `netlify.toml`. When you're satisfied nothing is being flagged, rename the header to `Content-Security-Policy` to enforce it.

## Deploy (one-time setup)

### 1. Code on GitHub
The code lives in the public repository **VirtusPromPT/virtusprompt-website**. Push changes with:

```bash
git push
```

### 2. Connect Netlify
1. Sign up at netlify.com with your GitHub account.
2. **Add new site → Import an existing project → GitHub →** pick `VirtusPromPT/virtusprompt-website` (allow Netlify access to that repository).
3. Netlify reads `netlify.toml`, so leave the build settings as they are and click **Deploy**.
4. Check the temporary address (`something.netlify.app`): both languages, the theme toggle, the FAQ, and **send a test message through the form**.

### 3. Get form messages by email
Netlify detects the `contact` form on the first deploy.
**Site configuration → Forms → Form notifications → Add notification → Email notification** → your address.
Submissions are also listed under **Forms** in the dashboard. Spam is filtered with a hidden honeypot field. The free plan includes 100 submissions a month.

### 4. Point the domain at Netlify (keeps email working)
1. In Netlify: **Domain management → Add a domain →** `www.virtusprompt.com` (also add `virtusprompt.com` when asked). Set **www** as the primary domain.
2. In **Squarespace → Domains → virtusprompt.com → DNS**:
   - **Delete** the Squarespace website records: the four `A` records on `@` (198.185.159.144 / .145, 198.49.23.144 / .145) and the `www` CNAME to `ext-sq.squarespace.com`. If they are listed as a "Squarespace Defaults" preset, remove that preset.
   - **Add** `A` record: host `@` → `75.2.60.5`
   - **Add** `CNAME` record: host `www` → `<your-site>.netlify.app`
   - **Do not touch** the `MX` record (`smtp.google.com`) or the `TXT` SPF record (`v=spf1 include:_spf.google.com ~all`). They keep your Google Workspace email working.
3. Wait for DNS to update (usually minutes, sometimes a few hours). Netlify issues the HTTPS certificate automatically; check **Domain management → HTTPS**.
4. Test: `https://www.virtusprompt.com`, `https://virtusprompt.com` (should redirect to www), `/about` (should go to the About page, `/sobre/`), and send yourself an email to confirm mail still arrives.

### 5. After it's live
- Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://www.virtusprompt.com/sitemap-index.xml`.
- **Cancel the Squarespace *website* plan. Keep the *domain*.** The domain renews on **20 Jan 2027**, so check that auto-renew is on.

## Day-to-day updates
Edit the files, then `git commit` and `git push`. Netlify rebuilds and publishes in about a minute. Every pull request also gets its own preview link.

## Copyright

© Virtuous Prompts, Lda. All rights reserved.
This repository is public so it can be deployed and reviewed. That doesn't grant permission to reuse its code, text or images. The VirtusPromPT name and logo, the portrait photo and the client logos belong to their respective owners and may not be reused.
