"use client";

import Image from "next/image";
import { useState } from "react";
import { scenes } from "@/content/scenes";
import { QuotePresetLink } from "./QuotePresetLink";

/** Scene switcher for “What could yours become?”; each scene presets a matching enquiry. */
export function SceneExplorer() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <>
      <div className="scene-controls" role="group" aria-label="Explore container uses">
        {scenes.map(({ label }, i) => (
          <button
            key={label}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            {label}
            <span>↗</span>
          </button>
        ))}
      </div>
      <div className="scene-display">
        <Image src={scene.image} alt={scene.alt} />
        <div className="scene-overlay" aria-live="polite">
          <p className="eyebrow">{scene.eyebrow}</p>
          <h3>{scene.headline}</h3>
          <QuotePresetLink enquiry={scene.enquiry}>Discuss this idea ↗</QuotePresetLink>
        </div>
        <span className="concept-tag">
          AI-generated concept · Not an actual project or inventory listing
        </span>
      </div>
    </>
  );
}
