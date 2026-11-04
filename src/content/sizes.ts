/** Size guide options, shared by the size toggle and the quote form's “Container length” select. */
export const containerSizes = [
  {
    value: "20-foot",
    headline: "Compact footprint. Real potential.",
    text: "A useful starting point for tools, furniture, and on-site storage.",
    caption: "20-FOOT · NOMINAL LENGTH",
  },
  {
    value: "40-foot",
    headline: "More length. More possibility.",
    text: "Explore longer containers for larger inventory and commercial storage.",
    caption: "40-FOOT · NOMINAL LENGTH",
  },
  {
    value: "Not sure",
    headline: "Let’s work it out together.",
    text: "Tell us what you want to store and where the container will go.",
    caption: "YOUR PROJECT, YOUR FIT",
  },
] as const;

export type ContainerSize = (typeof containerSizes)[number]["value"];
