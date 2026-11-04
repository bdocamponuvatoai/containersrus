import type { StaticImageData } from "next/image";
import deliveryImage from "@/assets/images/container-delivery.webp";
import officeImage from "@/assets/images/container-office.webp";
import yardImage from "@/assets/images/container-yard.webp";
import type { EnquiryOption } from "./services";

type Scene = {
  label: string;
  image: StaticImageData;
  alt: string;
  eyebrow: string;
  headline: string;
  /** Preselected in the quote form by “Discuss this idea”. */
  enquiry: EnquiryOption;
};

/** “What could yours become?” scenes. All three photos are AI-generated concepts. */
export const scenes: readonly Scene[] = [
  {
    label: "Space to store",
    image: yardImage,
    alt: "Illustrative red storage container",
    eyebrow: "STORAGE / HOME & BUSINESS",
    headline: "Room for the things that matter.",
    enquiry: "Buy a container",
  },
  {
    label: "A place to work",
    image: officeImage,
    alt: "Illustrative custom container office",
    eyebrow: "CUSTOMIZATION / WORKSPACE",
    headline: "A workspace with a different outlook.",
    enquiry: "Customize your space",
  },
  {
    label: "Ready to move",
    image: deliveryImage,
    alt: "Illustrative container delivery",
    eyebrow: "TRANSPORT / YOUR NEXT ADDRESS",
    headline: "Your plans, on the move.",
    enquiry: "Long-distance moving",
  },
];
