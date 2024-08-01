/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {
      exclude: ["e2e/**", "node_modules/**"],
    },
  },
  {
    site: "https://joshb.io/",
    trailingSlash: "always",
  },
);
