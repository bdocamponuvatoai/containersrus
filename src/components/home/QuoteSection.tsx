import { site } from "@/config/site";
import { QuoteForm } from "./QuoteForm";

export function QuoteSection() {
  return (
    <section id="quote" className="quote section">
      <div>
        <p className="eyebrow">TELL US WHAT YOU NEED</p>
        <h2>
          Put your plans
          <br />
          in motion.
        </h2>
        <p>Tell us where it’s going and what it needs to do. We’ll take it from there.</p>
        <a className="text-link" href={site.phone.href}>
          {`${site.phone.display} ↗`}
        </a>
        <p className="note">
          This form prepares an email draft. Nothing is submitted automatically. Pricing and
          availability are confirmed by the team.
        </p>
      </div>
      <QuoteForm />
    </section>
  );
}
