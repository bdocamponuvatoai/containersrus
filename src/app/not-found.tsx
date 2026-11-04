import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

/** Styled 404, built from the size guide's existing classes. */
export default function NotFound() {
  return (
    <main>
      <section className="section guide">
        <div>
          <p className="eyebrow">PAGE NOT FOUND</p>
          <h2>
            Nothing stored
            <br />
            at this address.
          </h2>
          <p>The page you’re looking for doesn’t exist or has moved.</p>
          <div className="toggle">
            <Link className="button" href="/">
              Back to the homepage ↗
            </Link>
          </div>
          <a className="text-link" href={site.phone.href}>
            {`Or call ${site.phone.display} ↗`}
          </a>
        </div>
        <div className="size-visual">
          <div className="container-model">
            <span>404</span>
          </div>
          <p>NOTHING STORED HERE</p>
        </div>
      </section>
    </main>
  );
}
