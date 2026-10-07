import { ArrowUpRight } from 'lucide-react';
import { Layout } from '../../components/Layout';
import type { Post } from '../../lib/blog';

export function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <Layout active="ramblings">
      <h1 className="text-3xl md:text-4xl mb-10">Ramblings</h1>

      <ul className="flex flex-col gap-y-1">
        {posts.map((post) => {
          const href = post.redirectTo ? post.redirectTo : `/blog/${post.slug}`;
          const target = post.redirectTo ? '_blank' : '_self';
          const date = post.pubDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

          return (
            <li key={post.slug}>
              <a href={href} target={target} className="row py-3">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="text-lg leading-snug tracking-[-0.01em]">
                    {post.title}
                    {post.redirectTo && <ArrowUpRight className="inline size-4 ml-1 align-baseline text-muted" />}
                  </span>
                  <time className="meta shrink-0">{date}</time>
                </div>
                {post.description && <p className="text-sm text-muted mt-1 max-w-[52ch]">{post.description}</p>}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
