import { Layout } from '../components/Layout';
import type { Post } from '../lib/blog';

export function BlogPost({ post }: { post: Post }) {
  const formattedDate = post.pubDate.toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Layout>
      <article>
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <time>{formattedDate}</time>
        </header>

        <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
}
