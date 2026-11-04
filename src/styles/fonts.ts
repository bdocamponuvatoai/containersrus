import localFont from "next/font/local";

// The exact Google Fonts "latin" subset files the original site loaded (DM Sans v17, Manrope v23),
// self-hosted so there is no third-party request. Both are variable fonts, so one file covers every
// weight. The unicode-range mirrors Google's latin subset, so characters outside it (e.g. ↗) fall
// back to the system fonts exactly as before. next/font options must be literals (no constants).
// adjustFontFallback is off because the CSS tokens already fall back to Arial, as the original did.

export const dmSans = localFont({
  src: "../assets/fonts/dm-sans-latin.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-dm-sans",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const manrope = localFont({
  src: "../assets/fonts/manrope-latin.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-manrope",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});
