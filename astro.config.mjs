import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import dotenv from "dotenv";
import react from "@astrojs/react";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: "https://joshb.io",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react()],
  build: {
    format: "directory",
  },
});

