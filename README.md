# Containers R Us

Marketing site for Containers R Us (shipping container sales, rentals, custom builds and moving, Hamilton, Ontario). It is built with Next.js 16 (App Router), React 19 and TypeScript, and is exported as a fully static site.

The site is a pixel-identical rebuild of an earlier single-page prototype. The parity evidence is in [docs/verification.md](docs/verification.md).

> **Status: preview.** Search engines are blocked (`noindex, nofollow` and a disallow-all `robots.txt`) until the business owner approves launch. See [Before launch](#before-launch).

## Getting started

Requires Node.js 20.9 or later. CI uses the version in [.nvmrc](.nvmrc) (Node 26 LTS).

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run preview    # serve out/ locally (downloads `serve` on demand)
```

## Scripts

| Script                 | What it does                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| `npm run dev`          | Development server with hot reload.                                                                     |
| `npm run build`        | Production build plus static export to `out/`. `postbuild` then runs `scripts/fix-export-segments.mjs`. |
| `npm run preview`      | Serves `out/` with `npx serve@14`. `serve` is deliberately not a dependency.                            |
| `npm run lint`         | ESLint (Next.js core-web-vitals + TypeScript rules).                                                    |
| `npm run typecheck`    | `next typegen` then `tsc --noEmit`.                                                                     |
| `npm run format`       | Prettier, writing changes.                                                                              |
| `npm run format:check` | Prettier, check only.                                                                                   |
| `npm run check`        | `typecheck`, `lint` and `format:check`: everything CI runs before building.                             |

`scripts/fix-export-segments.mjs` works around a Next.js static-export bug on Windows. There, prefetch files are written into nested folders (`__next.x/__PAGE__.txt`) instead of `__next.x.__PAGE__.txt`, and client-side prefetches 404. On Linux and macOS it has nothing to do.

## Project structure

```
src/
  app/                 Routes and file conventions
    layout.tsx         <html>, fonts, shared chrome, site metadata, JSON-LD
    page.tsx           Home page (/)
    not-found.tsx      Styled 404 (exported as 404.html)
    robots.ts          robots.txt (follows SITE_INDEXABLE)
    sitemap.ts         sitemap.xml (built from content/pages.ts)
    icon.svg           Favicon
  components/
    layout/            Topline, SiteHeader + HeaderNav (mobile menu), SiteFooter
    home/              Home page sections and their client islands
    ui/                Brand (logo), SmartLink, SectionLink
    seo/               JsonLd
  config/
    site.ts            Business details and navigation (safe for client code)
    deployment.ts      SITE_URL / SITE_INDEXABLE (server only)
  content/             Typed copy: services, sizes, scenes, FAQ, page list
  lib/                 Framework-free helpers: metadata, enquiry/mailto builder, structured data
  styles/              globals.css and ordered partials (base/, components/, sections/), fonts.ts
  assets/              images/ and fonts/ (static imports, hashed at build)
scripts/               fix-export-segments.mjs
docs/                  verification.md (parity report)
```

## Conventions

- **Server Components by default.** Only interactive parts are client components: `HeaderNav`, `SolutionExplorer`, `SizeGuide`, `SceneExplorer`, `QuoteForm`, `QuotePresetLink` and `SectionLink`. They share quote state (the selected enquiry and container size) through `QuoteProvider`.
- **No invented facts.** Every business detail lives in `src/config/site.ts` or `src/content/`, and comes from the original site. Don't add hours, prices, reviews, certifications or similar until the business confirms them.
- **CSS order matters.** `src/styles/globals.css` imports the partials in the order their rules appeared in the original single stylesheet. Later rules intentionally override earlier ones, including `@media` rules. Add a rule to the partial that owns the selector, and check the result visually before reordering imports.
- **Fonts:** DM Sans and Manrope are self-hosted with `next/font/local` (the Google Fonts latin subsets the original used). Use the `--font-sans` / `--font-display` tokens, never literal family names.
- **Images:** `next/image` with static imports. The hero image is the LCP element, so it uses `loading="eager"` and `fetchPriority="high"`.
- **Links:** `SmartLink` uses `next/link` for internal routes (`/…`) and plain anchors for `#hash`, `tel:`, `mailto:` and external URLs. Header and footer links use `SectionLink`, which becomes `/#section` on pages other than the home page.
- **Text nodes:** where copy mixes literal text and values, keep the JSX shape (one string vs several nodes) as it is. Changing it can shift text rendering by sub-pixel amounts.

## Routes

| Path           | Notes                                                                                  |
| -------------- | -------------------------------------------------------------------------------------- |
| `/`            | Single-page site. Sections: `#solutions`, `#guide`, `#approach`, `#quote`, `#contact`. |
| any other path | Styled 404 page (HTTP 404).                                                            |
| `/robots.txt`  | Disallows everything unless `SITE_INDEXABLE=true`.                                     |
| `/sitemap.xml` | Every page in `src/content/pages.ts`, with absolute URLs from `SITE_URL`.              |

### The quote form

The form validates in the browser. It then shows the enquiry for review and offers an **Open email draft** link (`mailto:sales@containersrus.ca`). **Nothing is sent or stored by the site.** The visitor sends the email from their own mail app. Real form delivery (email service or CRM) is a possible follow-up.

## Configuration

Copy `.env.example` to `.env.local` for local builds. On Vercel, set the variables in Project Settings → Environment Variables.

| Variable                        | Default                                                                | Purpose                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `SITE_URL`                      | `https://$VERCEL_PROJECT_PRODUCTION_URL`, then `http://localhost:3000` | Origin for canonical URLs, Open Graph, JSON-LD, `robots.txt` and `sitemap.xml`. No trailing slash. |
| `SITE_INDEXABLE`                | `false`                                                                | `true` allows indexing. The build fails if it is `true` while the URL is localhost.                |
| `VERCEL_PROJECT_PRODUCTION_URL` | set by Vercel                                                          | Fallback for `SITE_URL`.                                                                           |

## Content and image sources

- Copy, logo and company photographs come from the business's current website, https://containersrus.ca (reviewed November 5, 2026).
- “30 years” is the company's own statement of combined industry insight.
- **Company photos:** `container.jpg`, `custom.jpg`, `home.jpeg`, `refrigeration.jpg`, `logo.png`. `home.jpeg` carries an embedded credit (“Photo by Christian Bender”), so confirm usage rights with the owner.
- **AI-generated illustrations:** `container-yard.webp` (hero and gallery), `container-delivery.webp` (moving and gallery), `container-office.webp` (story and gallery). These are not actual inventory, staff, fleet or completed projects. The on-page labels (“Illustrative concept”, “AI-generated concept …”) say so; keep them until real photos replace these images.

## Before launch

1. The owner confirms all business details on the page: phone, email, both addresses and appointment notes, services, and the “30 years” claim.
2. The owner approves or replaces the AI-generated illustrations and confirms rights to the company photos (especially `home.jpeg`).
3. Decide whether the quote form stays email-draft only or gets real delivery.
4. Add the production domain in Vercel. Set `SITE_URL=https://<domain>` and, once approved, `SITE_INDEXABLE=true` for **Production only**.
5. Redeploy. Then check that `robots.txt` allows crawling, `sitemap.xml` and the canonical URLs use the domain, and the page has no `noindex`.
6. Run Lighthouse on the live URL. Submit `https://<domain>/sitemap.xml` in Google Search Console.

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pushes to `main` and on pull requests: `npm ci`, then `npm run check`, then `npm run build`. It uploads `out/` as the `site-out` artifact. Dependabot opens weekly npm updates (Next/React and `@types` grouped) and monthly GitHub Actions updates.

## Hosting (Vercel)

1. On vercel.com, choose **Add New → Project**, then import `bdocamponuvatoai/containersrus`.
2. Framework preset: **Next.js** (auto-detected). Leave the build command (`npm run build`) and output settings at their defaults. Vercel detects `output: "export"` and serves `out/`.
3. Environment variables: add `SITE_INDEXABLE=false` for **Preview** and **Production**. Leave `SITE_URL` unset until there is a real domain; it falls back to the `*.vercel.app` production URL.
4. Deploy. After launch approval, follow [Before launch](#before-launch) steps 4–6.

`vercel.json` adds security headers to every response: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: DENY`, a `Permissions-Policy` that disables camera, microphone and geolocation, and `Strict-Transport-Security`. It sets no Content Security Policy, because Next.js static exports rely on inline scripts. A CSP would need hashes for every build, and it hasn't been tested yet.

**Preview URL:** _added after the first deployment._

Any static host also works: upload `out/` and serve `404.html` for unknown paths with a 404 status.
