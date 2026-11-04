"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/content/services";
import { useQuote } from "./QuoteProvider";

/** Toggle buttons (one pressed at a time) that switch the featured solution and preset the form. */
export function SolutionExplorer() {
  const { setNeed } = useQuote();
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <>
      <div className="solution-tabs" role="group" aria-label="Container solutions">
        {services.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={active === i}
            onClick={() => {
              setActive(i);
              setNeed(item.name);
            }}
          >
            <span>0{i + 1}</span>
            {item.name}
            <b>↗</b>
          </button>
        ))}
      </div>
      <div className="feature" aria-live="polite">
        <Image src={service.image} alt={`${service.name} example from Containers R Us`} />
        <div>
          <p className="eyebrow">{service.name}</p>
          <h3>{service.tag}</h3>
          <p>{service.text}</p>
          <a href="#quote" className="text-link">
            Let’s explore your options ↗
          </a>
          <small>Availability, specifications and delivery are confirmed with your quote.</small>
        </div>
      </div>
    </>
  );
}
