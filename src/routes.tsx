import type { ReactElement } from 'react';
import { Home, socials } from './pages/Home';
import { SITE_URL, EMAIL } from './consts';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import { Projects } from './pages/Projects';
import { PortfolioIndex } from './pages/PortfolioIndex';
import { PortfolioProjectPage } from './pages/PortfolioProjectPage';
import { NotFound } from './pages/NotFound';
import { ResumeV1 } from './pages/ResumeV1';
import { ResumeV2 } from './pages/ResumeV2';
import { loadPosts, listedPosts } from './lib/blog';
import { projects as portfolioProjects } from './data/portfolio';

/** Client bundles. Pages without an entry are rendered as pure static HTML with no JS. */
export type ClientEntry = 'home' | 'portfolio' | 'portfolio-project';

interface RouteBase {
  /** URL path, e.g. "/", "/blog", "/blog/my-post" */
  path: string;
  meta?: {
    title?: string;
    description?: string;
    cover?: string;
    redirectTo?: string;
    /** Structured data rendered as an application/ld+json script */
    jsonLd?: object;
  };
}

/** A page rendered inside the site shell (head, meta, site stylesheet). */
export interface PageRoute extends RouteBase {
  element: ReactElement;
  entry?: ClientEntry;
  standalone?: undefined;
}

/** A self-contained document that renders its own <html>/<head> (e.g. resumes). */
export interface StandaloneRoute extends RouteBase {
  standalone: {
    /** Name of the CSS entrypoint this document links (e.g. "resume" -> src/resume.css) */
    css: string;
    page: (cssHref: string) => ReactElement;
  };
}

export type Route = PageRoute | StandaloneRoute;

export async function getRoutes(): Promise<Route[]> {
  const posts = await loadPosts();

  return [
    {
      path: '/',
      element: <Home />,
      entry: 'home',
      meta: {
        title: 'Faisal Arshed — Software Engineer',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Faisal Arshed',
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/faisal-arshed.jpeg`,
          jobTitle: 'Software Engineer',
          email: `mailto:${EMAIL}`,
          sameAs: socials.map((s) => s.href)
        }
      }
    },
    { path: '/blog', element: <BlogIndex posts={listedPosts(posts)} /> },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      element: <BlogPost post={post} />,
      meta: {
        title: post.title,
        description: post.description,
        cover: post.cover,
        redirectTo: post.redirectTo
      }
    })),
    { path: '/projects', element: <Projects /> },
    { path: '/portfolio', element: <PortfolioIndex />, entry: 'portfolio' },
    ...portfolioProjects.map((project) => ({
      path: `/portfolio/${project.id}`,
      element: <PortfolioProjectPage project={project} />,
      entry: 'portfolio-project' as const
    })),
    { path: '/404', element: <NotFound />, meta: { title: '404 · Page not found' } },
    {
      path: '/noindex/resume/v1',
      standalone: { css: 'resume', page: (css: string) => <ResumeV1 cssHref={css} /> }
    },
    {
      path: '/noindex/resume/v2',
      standalone: { css: 'resume', page: (css: string) => <ResumeV2 cssHref={css} /> }
    }
  ];
}
