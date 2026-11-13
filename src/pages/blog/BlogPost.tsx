import { Layout } from '../../components/Layout';
import type { Post } from '../../lib/blog';

export function BlogPost({ post }: { post: Post }) {
  const formattedDate = post.pubDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Layout active="ramblings">
      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-[2.6rem] leading-[1.1]">{post.title}</h1>
          <time className="meta block mt-5">{formattedDate}</time>
        </header>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />

        <p className="mt-16">
          <a href="/blog" className="text-sm no-underline text-muted hover:text-accent">
            ← all ramblings
          </a>
        </p>
      </article>
    </Layout>
  );
}
