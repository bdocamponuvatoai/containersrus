"use client";

import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import type { SectionHash } from "@/config/site";
import { SmartLink } from "./SmartLink";

type SectionLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { hash: SectionHash };

/**
 * Link to a section of the home page, used by the shared header and footer.
 * On the home page it is a plain in-page hash (`#quote`); on any other page (e.g. the 404 page)
 * it becomes a route link back to that section (`/#quote`).
 */
export function SectionLink({ hash, ...props }: SectionLinkProps) {
  const onHome = usePathname() === "/";
  const href = onHome ? hash : hash === "#" ? "/" : `/${hash}`;
  return <SmartLink href={href} {...props} />;
}
