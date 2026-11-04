import "server-only";

/**
 * Deployment settings, read from the environment at build time (server only).
 *
 * SITE_URL        Canonical origin, e.g. https://www.example.com. Falls back to the Vercel
 *                 production domain, then to localhost for local builds.
 * SITE_INDEXABLE  "true" lets search engines index the site. Anything else keeps the preview
 *                 noindex/nofollow and disallows crawling in robots.txt.
 */
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const rawSiteUrl =
  process.env.SITE_URL ||
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : "http://localhost:3000");

export const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export const isIndexable = process.env.SITE_INDEXABLE === "true";

if (isIndexable && /^https?:\/\/(localhost|127\.0\.0\.1)(:|$)/.test(siteUrl)) {
  throw new Error(
    "SITE_INDEXABLE is true but the site URL is still localhost. Set SITE_URL to the public domain.",
  );
}
