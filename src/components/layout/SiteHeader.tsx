import { Brand } from "@/components/ui/Brand";
import { SectionLink } from "@/components/ui/SectionLink";
import { site } from "@/config/site";
import { HeaderNav } from "./HeaderNav";

export function SiteHeader() {
  return (
    <header>
      <SectionLink hash="#" aria-label={`${site.name} home`}>
        <Brand className="logo" loading="eager" />
      </SectionLink>
      <HeaderNav />
      <SectionLink className="button small" hash="#quote">
        Get a quote ↗
      </SectionLink>
    </header>
  );
}
