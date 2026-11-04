import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/deployment";
import { pages } from "@/content/pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map(({ path }) => ({ url: `${siteUrl}${path}` }));
}
