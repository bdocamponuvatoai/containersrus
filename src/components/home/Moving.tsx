import Image from "next/image";
import deliveryImage from "@/assets/images/container-delivery.webp";
import { QuotePresetLink } from "./QuotePresetLink";

export function Moving() {
  return (
    <section className="moving">
      <div>
        <p className="eyebrow">LONG-DISTANCE MOVING</p>
        <h2>
          Pack once.
          <br />
          Move forward.
        </h2>
        <p>
          Moving across Canada? Explore portable container moving and discuss loading,
          transportation, and destination arrangements with our team.
        </p>
        <QuotePresetLink className="button light" enquiry="Long-distance moving">
          Plan your move ↗
        </QuotePresetLink>
      </div>
      <figure className="delivery-photo">
        <Image
          src={deliveryImage}
          alt="Illustrative scene of a container truck and delivery professional"
        />
        <figcaption>
          DELIVERY, CONSIDERED FROM THE START <span>Illustrative concept</span>
        </figcaption>
      </figure>
    </section>
  );
}
