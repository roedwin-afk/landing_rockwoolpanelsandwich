import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_rockwoolpanelsandwich/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
});