"use client";

import { containerSizes } from "@/content/sizes";
import { useQuote } from "./QuoteProvider";

/** Size toggle with a CSS container model. The selection is shared with the quote form. */
export function SizeGuide() {
  const { size, setSize } = useQuote();
  const current = containerSizes.find((option) => option.value === size) ?? containerSizes[0];

  return (
    <section id="guide" className="section guide">
      <div>
        <p className="eyebrow">THE SIZE GUIDE</p>
        <h2>
          Start with
          <br />
          the right footprint.
        </h2>
        <p>
          Start with a familiar container length. We’ll help confirm the right configuration, usable
          space, and delivery access for your project.
        </p>
        <div className="toggle">
          {containerSizes.map(({ value }) => (
            <button
              key={value}
              type="button"
              className={size === value ? "selected" : undefined}
              aria-pressed={size === value}
              onClick={() => setSize(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <h3>{current.headline}</h3>
        <p>{current.text}</p>
        <a className="text-link" href="#quote">
          Discuss this option ↗
        </a>
      </div>
      <div className="size-visual">
        <div className={size === "40-foot" ? "container-model long" : "container-model"}>
          <span>CRU</span>
        </div>
        <p>{current.caption}</p>
        <small>
          Illustrative size guide. Dimensions vary by container type; confirm specifications before
          ordering.
        </small>
      </div>
    </section>
  );
}
