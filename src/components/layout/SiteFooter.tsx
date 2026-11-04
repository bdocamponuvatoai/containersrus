import { Brand } from "@/components/ui/Brand";
import { SectionLink } from "@/components/ui/SectionLink";
import { site } from "@/config/site";

// Static export: the year is fixed when the site is built.
const BUILD_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-brand">
        <SectionLink className="footer-logo" hash="#" aria-label={`${site.name} home`}>
          <Brand width={210} height={80} />
        </SectionLink>
        <span>MORE SPACE. MORE POSSIBILITIES.</span>
      </div>
      <div>
        <h3>Let’s talk</h3>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.phone.href}>{site.phone.display}</a>
      </div>
      {site.locations.map((location) => (
        <div key={location.name}>
          <h3>{location.name}</h3>
          <p>
            {location.street}
            <br />
            {`${location.city}, ${location.province} ${location.postalCode}`}
          </p>
          <small>{location.note}</small>
        </div>
      ))}
      <div className="footer-bottom">
        {"© "}
        {BUILD_YEAR}
        {" Containers R Us"}
        <span>
          {"Company photography & AI-generated concepts · "}
          <a href={site.currentWebsite}>Current website ↗</a>
        </span>
      </div>
    </footer>
  );
}
