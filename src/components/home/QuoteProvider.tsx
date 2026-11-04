"use client";

import { createContext, use, useMemo, useState, type ReactNode } from "react";
import type { EnquiryOption } from "@/content/services";
import type { ContainerSize } from "@/content/sizes";

type QuoteState = {
  /** The quote form's “I’m interested in” value; preset by the solution, scene and CTA links. */
  need: EnquiryOption;
  setNeed: (need: EnquiryOption) => void;
  /** Shared by the size guide toggle and the form's “Container length” select. */
  size: ContainerSize;
  setSize: (size: ContainerSize) => void;
};

const QuoteContext = createContext<QuoteState | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [need, setNeed] = useState<EnquiryOption>("Buy a container");
  const [size, setSize] = useState<ContainerSize>("20-foot");
  const value = useMemo(() => ({ need, setNeed, size, setSize }), [need, size]);
  return <QuoteContext value={value}>{children}</QuoteContext>;
}

export function useQuote(): QuoteState {
  const state = use(QuoteContext);
  if (!state) throw new Error("useQuote must be used inside <QuoteProvider>");
  return state;
}
