import { site } from "@/config/site";

export type PageEntry = {
  path: `/${string}`;
  title: string;
  description: string;
};

/** Every indexable page. The sitemap and page metadata are both built from this list. */
export const pages = {
  home: { path: "/", title: site.title, description: site.description },
} as const satisfies Record<string, PageEntry>;
