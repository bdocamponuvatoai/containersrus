import type { Metadata } from "next";
import heroImage from "@/assets/images/container-yard.webp";
import { site } from "@/config/site";
import type { PageEntry } from "@/content/pages";

const OG_IMAGE_ALT = "Illustrative concept of a red storage container in an Ontario setting";

/**
 * Per-page metadata: absolute title, description, canonical URL and social cards.
 * Relative URLs resolve against `metadataBase` (the deployment's site URL) set in the root layout.
 */
export function pageMetadata({ title, path, description }: PageEntry): Metadata {
  const image = { url: heroImage.src, width: heroImage.width, height: heroImage.height };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [{ ...image, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
