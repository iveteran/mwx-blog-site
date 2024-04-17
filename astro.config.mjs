import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://matrix.works/",
  compressHTML: false,
  integrations: [tailwind(), mdx(), sitemap(), pagefind()],
  //experimental: {
  //  assets: true,
  //},
  vite: {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: "src",
        },
      ],
    },
  },
});
