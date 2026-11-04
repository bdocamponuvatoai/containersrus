import Image from "next/image";
import heroImage from "@/assets/images/container-yard.webp";
import { QuotePresetLink } from "./QuotePresetLink";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">STORAGE. MOVING. CUSTOM SPACES.</p>
        <h1>
          A container.
          <br />A thousand
          <br />
          <span>possibilities.</span>
        </h1>
        <p className="hero-description">
          Buy it. Rent it. Make it your own.
          <br />
          Container solutions from Hamilton, across Canada.
        </p>
        <a className="button" href="#solutions">
          Explore containers <b>↗</b>
        </a>
        <div className="hero-footnote">
          <span className="status-dot" /> Built around your space, your timeline, your plans.
        </div>
      </div>
      <div className="hero-image">
        <Image
          src={heroImage}
          alt="Illustrative concept of a red storage container in an Ontario setting"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-image-top">
          <span>CONTAINERS R US</span>
          <span>ILLUSTRATIVE CONCEPT</span>
        </div>
        <div className="image-caption">
          <div>
            <span>STORAGE THAT FITS YOUR PLANS</span>
            <strong>Open to more.</strong>
          </div>
          <QuotePresetLink enquiry="Buy a container" aria-label="Enquire about storage containers">
            ↗
          </QuotePresetLink>
        </div>
      </div>
    </section>
  );
}
