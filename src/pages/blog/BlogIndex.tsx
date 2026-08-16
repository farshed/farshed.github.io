import { ArrowUpRight } from 'lucide-react';
import { Layout } from '../../components/Layout';
import type { Post } from '../../lib/blog';

export function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <Layout active="ramblings">
      <div>
        <h1 className="text-3xl font-bold tracking-tight my-6">Ramblings</h1>
        <ul className="space-y-6">
          {posts.map((post) => {
            const href = post.redirectTo ? post.redirectTo : `/blog/${post.slug}`;
            const target = post.redirectTo ? '_blank' : '_self';
            const date = post.pubDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });

            return (
              <li key={post.slug}>
                <a href={href} target={target} className="block no-underline rounded-md">
                  <span className="text-xl">
                    {post.title}
                    {post.redirectTo && (
                      <ArrowUpRight className="inline size-4 ml-1 align-baseline text-black/50" />
                    )}
                  </span>
                  {post.description && (
                    <p className="text-sm text-black/60 mt-1">{post.description}</p>
                  )}
                  <p className="text-sm text-black/50 mt-0.5">{date}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
