import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from 'astro-sanity';
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sanity-minimal-starter.netlify.app/",
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [
    sitemap(),
    sanity({
      projectId: "qkyc4uum",
      dataset: "production",
      apiVersion: "v2021-03-25",
      useCdn: true,
    }),
    image(),
    react(),
  ],
});