/**
 * Business details and navigation. Safe to import from client components: no environment access.
 * Every value here comes from the original site; do not add facts the business has not confirmed.
 */
export const site = {
  name: "Containers R Us",
  title: "Containers R Us | Space for what’s next",
  description:
    "Shipping container sales, rentals, customized spaces and moving solutions. Hamilton, Ontario.",
  phone: {
    display: "855 224 2221",
    href: "tel:18552242221",
    /** E.164 form for structured data. */
    international: "+1-855-224-2221",
  },
  email: "sales@containersrus.ca",
  /** The business's existing website, linked from the footer. */
  currentWebsite: "https://containersrus.ca",
  locations: [
    {
      name: "Hamilton depot",
      street: "1133 Industrial Drive",
      city: "Hamilton",
      province: "ON",
      postalCode: "L8H 5L3",
      note: "Call to book an appointment.",
    },
    {
      name: "Ancaster office",
      street: "1377 Cormorant Rd, Unit 105",
      city: "Ancaster",
      province: "ON",
      postalCode: "L9G 4V5",
      note: "Visits by appointment.",
    },
  ],
  nav: [
    { label: "Solutions", hash: "#solutions" },
    { label: "Container guide", hash: "#guide" },
    { label: "Our approach", hash: "#approach" },
    { label: "Visit us", hash: "#contact" },
  ],
} as const;

export type SectionHash = "#" | `#${string}`;
