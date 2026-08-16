import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings, { type Options as AutolinkOptions } from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';

export interface Post {
  /** Source filename, e.g. "nature-vs-nurture.md" */
  id: string;
  /** URL slug, e.g. "nature-vs-nurture" */
  slug: string;
  title: string;
  description?: string;
  pubDate: Date;
  cover?: string;
  redirectTo?: string;
  /** Rendered HTML body */
  html: string;
}

const contentDir = path.join(import.meta.dir, '..', 'content', 'blog');

const autolinkOptions: AutolinkOptions = {
  behavior: 'append',
  properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
  content: { type: 'text', value: '#' }
};

interface HastNode {
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

/** Defer offscreen image loading in image-heavy posts */
function rehypeLazyImages() {
  const walk = (node: HastNode) => {
    if (node.tagName === 'img' && node.properties) {
      node.properties.loading ??= 'lazy';
      node.properties.decoding ??= 'async';
    }
    for (const child of node.children ?? []) walk(child);
  };
  return (tree: unknown) => {
    walk(tree as HastNode);
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeKatex)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, autolinkOptions)
  .use(rehypeLazyImages)
  .use(rehypeExternalLinks, { target: '_blank' })
  .use(rehypeShiki, { theme: 'dracula' })
  .use(rehypeStringify);

let cache: Post[] | null = null;

/** Dev-server hook so markdown edits show up on refresh */
export function clearPostCache() {
  cache = null;
}

export async function loadPosts(): Promise<Post[]> {
  if (cache) return cache;

  const posts: Post[] = [];
  for (const file of new Bun.Glob('*.md').scanSync(contentDir)) {
    const raw = await Bun.file(path.join(contentDir, file)).text();
    const { data, content } = matter(raw);
    const html = String(await processor.process(content));

    posts.push({
      id: file,
      slug: file.replace(/\.md$/, ''),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDate),
      cover: data.cover,
      redirectTo: data.redirectTo,
      html
    });
  }

  posts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
  return (cache = posts);
}

// Hidden from the blog index (but their pages still exist), same list as the old site
const hidden = ['on-losing-faith', 'borderline-internals', '.draft.'];

export function listedPosts(posts: Post[]): Post[] {
  return posts.filter((post) => !hidden.some((h) => post.id.includes(h)));
}
