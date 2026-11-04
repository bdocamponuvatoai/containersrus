import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type SmartLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

/**
 * Internal routes (`/…`) use next/link for client-side navigation and prefetching.
 * In-page hashes, `tel:`, `mailto:` and external URLs stay plain anchors, keeping any
 * `target`/`rel` exactly as passed.
 */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} {...props} />;
}
