import { Layout } from '../components/Layout';
import type { Post } from '../lib/blog';

export function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold my-6">Blog</h2>
        <ul className="space-y-5">
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
                <a href={href} target={target} className="text-xl no-underline">
                  {post.title}
                </a>
                <p className="text-sm text-black/60 mt-0.5">{date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
