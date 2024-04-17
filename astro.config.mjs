import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://matrix.works/",
  compressHTML: false,
  integrations: [tailwind(), mdx(), sitemap()],
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
