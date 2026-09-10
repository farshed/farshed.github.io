import { ArrowUpRight } from 'lucide-react';
import { Layout } from '../../components/Layout';
import type { Post } from '../../lib/blog';

function groupByYear(posts: Post[]) {
  const groups = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.pubDate.getFullYear();
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()];
}

export function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <Layout active="ramblings">
      <div>
        <header className="mb-14">
          <p className="eyebrow">Writing</p>
          <h1 className="text-5xl md:text-6xl leading-[1.05] mt-3">Ramblings</h1>
          <p className="font-serif italic text-muted text-xl mt-4">
            On tech, history, culture and whatever else catches my eye.
          </p>
        </header>

        {groupByYear(posts).map(([year, group]) => (
          <section key={year} className="grid md:grid-cols-[5rem_1fr] gap-x-8 hairline pt-5 mb-12">
            <p className="eyebrow pt-1 mb-4 md:mb-0">{year}</p>
            <ul>
              {group.map((post) => {
                const href = post.redirectTo ? post.redirectTo : `/blog/${post.slug}`;
                const target = post.redirectTo ? '_blank' : '_self';
                const date = post.pubDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

                return (
                  <li key={post.slug} className="group">
                    <a href={href} target={target} className="block no-underline text-ink py-3">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                        <span className="font-serif text-[1.55rem] leading-snug group-hover:text-accent transition-colors duration-200">
                          {post.title}
                          {post.redirectTo && (
                            <ArrowUpRight className="inline size-4 ml-1.5 align-baseline text-muted" />
                          )}
                        </span>
                        <time className="eyebrow shrink-0">{date}</time>
                      </div>
                      {post.description && <p className="text-sm text-muted mt-1.5 max-w-[52ch]">{post.description}</p>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </Layout>
  );
}
