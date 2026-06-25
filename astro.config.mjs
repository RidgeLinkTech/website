import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ridgelink.us',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
