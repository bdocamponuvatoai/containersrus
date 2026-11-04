import { site } from "@/config/site";

/** schema.org LocalBusiness built only from details published on the site. */
export function localBusinessSchema({ siteUrl, logoPath }: { siteUrl: string; logoPath: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: `${siteUrl}/`,
    logo: new URL(logoPath, siteUrl).href,
    image: new URL(logoPath, siteUrl).href,
    telephone: site.phone.international,
    email: site.email,
    areaServed: { "@type": "Country", name: "Canada" },
    address: site.locations.map((location) => ({
      "@type": "PostalAddress",
      name: location.name,
      streetAddress: location.street,
      addressLocality: location.city,
      addressRegion: location.province,
      postalCode: location.postalCode,
      addressCountry: "CA",
    })),
  };
}

/** Serialises JSON-LD for an inline script, escaping `<` so content can never close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
