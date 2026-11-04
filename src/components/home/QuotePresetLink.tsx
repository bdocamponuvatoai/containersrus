"use client";

import type { ComponentPropsWithoutRef } from "react";
import type { EnquiryOption } from "@/content/services";
import { useQuote } from "./QuoteProvider";

type QuotePresetLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick"> & {
  enquiry: EnquiryOption;
};

/** Jumps to the quote form with “I’m interested in” preset to `enquiry`. */
export function QuotePresetLink({ enquiry, ...props }: QuotePresetLinkProps) {
  const { setNeed } = useQuote();
  return <a href="#quote" {...props} onClick={() => setNeed(enquiry)} />;
}
