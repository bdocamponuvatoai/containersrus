import { site } from "@/config/site";

export function Topline() {
  return (
    <div className="topline">
      ONTARIO ROOTS. CANADA-WIDE POSSIBILITIES.
      <a href={site.phone.href}>{`Let’s talk · ${site.phone.display} ↗`}</a>
    </div>
  );
}
