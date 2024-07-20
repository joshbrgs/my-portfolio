import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  site: "https://joshb.io",
  integrations: [tailwind(), mdx(), sitemap(), icon(), lottie()],
});
