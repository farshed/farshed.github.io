import { ArrowLeft } from 'lucide-react';
import { Layout } from '../../components/Layout';
import type { Post } from '../../lib/blog';

export function BlogPost({ post }: { post: Post }) {
  const formattedDate = post.pubDate.toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Layout active="ramblings">
      <article>
        <a href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 no-underline">
          <ArrowLeft className="size-3.5" />
          Ramblings
        </a>

        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <time className="text-sm text-black/60">{formattedDate}</time>
        </header>

        <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
}
