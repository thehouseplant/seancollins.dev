import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://example.com", // Replace with your actual domain
  output: "static",
  adapter: cloudflare(),
  build: {
    // Generate assets in a format optimized for Cloudflare Pages
    assets: "_astro",
  },
  vite: {
    build: {
      // Ensure CSS is properly handled
      cssCodeSplit: true,
    },
  },
});
