import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://kabarbour.github.io/personal', // ✅ must match your GitHub Pages URL
  base: '/personal/',                           // ✅ must match your repo name
  integrations: [mdx(), sitemap(), tailwind()],
});
