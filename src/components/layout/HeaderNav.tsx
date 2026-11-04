"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SectionLink } from "@/components/ui/SectionLink";
import { site } from "@/config/site";

/** Matches the stylesheet breakpoint where the nav collapses behind the Menu button. */
const MOBILE_QUERY = "(max-width: 800px)";

/** Menu toggle + primary navigation. On mobile the nav opens as a panel below the header. */
export function HeaderNav() {
  const pathname = usePathname();
  // Remember which page the menu was opened on, so it is closed after any route change.
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const open = openOnPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenOnPath(null);
      toggleRef.current?.focus();
    };
    const mobile = window.matchMedia(MOBILE_QUERY);
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpenOnPath(null);
    };
    document.addEventListener("keydown", onKeyDown);
    mobile.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mobile.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="menu"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpenOnPath(open ? null : pathname)}
      >
        Menu {open ? "−" : "+"}
      </button>
      <nav id="site-nav" className={open ? "open" : undefined}>
        {site.nav.map(({ label, hash }) => (
          <SectionLink key={hash} hash={hash} onClick={() => setOpenOnPath(null)}>
            {label}
          </SectionLink>
        ))}
      </nav>
    </>
  );
}
