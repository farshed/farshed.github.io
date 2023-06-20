import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://farshed.me',
	integrations: [mdx(), sitemap()],
	compressHTML: true
});
