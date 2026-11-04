import type { StaticImageData } from "next/image";
import buyImage from "@/assets/images/container.jpg";
import customizeImage from "@/assets/images/home.jpeg";
import refrigeratedImage from "@/assets/images/refrigeration.jpg";
import rentImage from "@/assets/images/custom.jpg";

/** Options in the quote form's “I’m interested in” select, in display order. */
export const enquiryOptions = [
  "Buy a container",
  "Rent a container",
  "Customize your space",
  "Refrigerated storage",
  "Long-distance moving",
  "Trailer rental",
] as const;

export type EnquiryOption = (typeof enquiryOptions)[number];

type Service = {
  name: EnquiryOption;
  tag: string;
  text: string;
  image: StaticImageData;
};

/** The four solutions in “Find your container”. Photos are the company’s own. */
export const services: readonly Service[] = [
  {
    name: "Buy a container",
    tag: "A space to call your own",
    text: "New and used shipping containers for lasting storage at home, on site, or at your business.",
    image: buyImage,
  },
  {
    name: "Rent a container",
    tag: "More room. Less commitment.",
    text: "Flexible container storage for renovations, seasonal stock, and projects that need extra space.",
    image: rentImage,
  },
  {
    name: "Customize your space",
    tag: "Think beyond the box",
    text: "Explore modifications for offices, workshops, commercial spaces, and container homes.",
    image: customizeImage,
  },
  {
    name: "Refrigerated storage",
    tag: "Keep your cool",
    text: "Explore refrigerator and freezer containers for temperature-sensitive storage. Confirm operating requirements with the team.",
    image: refrigeratedImage,
  },
];

export const timelineOptions = [
  "Just exploring",
  "Within a month",
  "1–3 months",
  "Later this year",
] as const;
