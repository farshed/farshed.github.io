import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://farshed.me',
  compressHTML: true,
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: ['_blank']
        }
      ]
    ],
    shikiConfig: {
      theme: 'github-dark'
      // https://shikiji.netlify.app/guide/dual-themes#light-dark-dual-themes
      // experimentalThemes: {
      //   light: 'github-light',
      //   dark: 'github-dark'
      // }
    }
  }
});
