// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.smartdentalcloud.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.smartdentalcloud.com/',
        'https://www.smartdentalcloud.com/pricing',
        'https://www.smartdentalcloud.com/privacy',
        'https://www.smartdentalcloud.com/terms',
      ],
    }),
  ],
});
