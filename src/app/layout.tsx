import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Topline } from "@/components/layout/Topline";
import { JsonLd } from "@/components/seo/JsonLd";
import { logoSrc } from "@/components/ui/Brand";
import { isIndexable, siteUrl } from "@/config/deployment";
import { site } from "@/config/site";
import { localBusinessSchema } from "@/lib/structured-data";
import { dmSans, manrope } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f5f4f0",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${manrope.variable}`}
    >
      <body>
        <Topline />
        <SiteHeader />
        {children}
        <SiteFooter />
        <JsonLd data={localBusinessSchema({ siteUrl, logoPath: logoSrc })} />
      </body>
    </html>
  );
}
