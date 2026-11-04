import Image, { type ImageProps } from "next/image";
import logo from "@/assets/images/logo.png";
import { site } from "@/config/site";

type BrandProps = Omit<ImageProps, "src" | "alt">;

/** The Containers R Us logo. Rendered size comes from CSS (`.logo`, `.footer-logo img`). */
export function Brand(props: BrandProps) {
  return <Image src={logo} alt={site.name} {...props} />;
}

export const logoSrc = logo.src;
