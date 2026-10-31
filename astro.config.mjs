import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap({ filter: (page) => !page.includes('/gracias/') })],
  site: 'https://www.peritomedicobarcelona.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
