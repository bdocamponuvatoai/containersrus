import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to `out/`.
  output: "export",
  // `/about/` -> `about/index.html`, which every static host serves without rewrites.
  trailingSlash: true,
  // The default image loader needs a server; static imports still get hashed URLs and dimensions.
  images: { unoptimized: true },
};

export default nextConfig;
