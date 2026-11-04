import { Faq } from "@/components/home/Faq";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { Moving } from "@/components/home/Moving";
import { ProofBar } from "@/components/home/ProofBar";
import { QuoteProvider } from "@/components/home/QuoteProvider";
import { QuoteSection } from "@/components/home/QuoteSection";
import { SizeGuide } from "@/components/home/SizeGuide";
import { Solutions } from "@/components/home/Solutions";
import { Story } from "@/components/home/Story";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(pages.home);

export default function HomePage() {
  return (
    <main>
      <QuoteProvider>
        <Hero />
        <ProofBar />
        <Solutions />
        <Moving />
        <SizeGuide />
        <Story />
        <Gallery />
        <Faq />
        <QuoteSection />
      </QuoteProvider>
    </main>
  );
}
