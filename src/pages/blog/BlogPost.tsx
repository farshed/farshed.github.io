import { Layout } from '../../components/Layout';
import type { Post } from '../../lib/blog';

export function BlogPost({ post }: { post: Post }) {
  const formattedDate = post.pubDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Layout active="ramblings">
      <article>
        <header className="mb-14">
          <p className="eyebrow">
            <a href="/blog" className="no-underline hover:text-ink">
              Ramblings
            </a>
            <span className="mx-2 text-muted/50">/</span>
            <time>{formattedDate}</time>
          </p>
          <h1 className="text-[2.6rem] md:text-5xl leading-[1.08] mt-5">{post.title}</h1>
          {post.description && (
            <p className="font-serif italic text-muted text-xl mt-5 max-w-[40ch]">{post.description}</p>
          )}
        </header>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />

        <p className="hairline mt-16 pt-6">
          <a href="/blog" className="eyebrow no-underline hover:text-ink">
            ← All ramblings
          </a>
        </p>
      </article>
    </Layout>
  );
}
