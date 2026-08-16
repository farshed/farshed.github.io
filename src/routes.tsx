import type { ReactElement } from 'react';
import { Home, socials } from './pages/Home';
import { SITE_URL, EMAIL } from './consts';
import { BlogIndex } from './pages/blog/BlogIndex';
import { BlogPost } from './pages/blog/BlogPost';
import { Projects } from './pages/projects/Projects';
import { PortfolioIndex } from './pages/portfolio/PortfolioIndex';
import { PortfolioProjectPage } from './pages/portfolio/PortfolioProjectPage';
import { NotFound } from './pages/NotFound';
import { ResumeV1, head as resumeV1Head } from './pages/resume/ResumeV1';
import { ResumeV2, head as resumeV2Head } from './pages/resume/ResumeV2';
import { loadPosts, listedPosts } from './lib/blog';
import { projects as portfolioProjects } from './data/portfolio';

/** Client bundles. Pages without an entry are rendered as pure static HTML with no JS. */
export type ClientEntry = 'home';

export interface Route {
  /** URL path, e.g. "/", "/blog", "/blog/my-post" */
  path: string;
  element: ReactElement;
  entry?: ClientEntry;
  /** CSS entrypoint name; defaults to "index" (src/styles/index.css). Resumes use "resume". */
  stylesheet?: string;
  meta?: {
    title?: string;
    description?: string;
    cover?: string;
    redirectTo?: string;
    /** Structured data rendered as an application/ld+json script */
    jsonLd?: object;
    /** Extra raw HTML injected into <head> (font links, page-specific styles) */
    head?: string;
  };
}

export async function getRoutes(): Promise<Route[]> {
  const posts = await loadPosts();

  return [
    {
      path: '/',
      element: <Home />,
      entry: 'home',
      meta: {
        title: 'Faisal Arshed – Software Engineer',
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
    { path: '/portfolio', element: <PortfolioIndex />, meta: { title: 'Portfolio' } },
    ...portfolioProjects.map((project) => ({
      path: `/portfolio/${project.id}`,
      element: <PortfolioProjectPage project={project} />,
      meta: { title: project.title, description: project.description }
    })),
    { path: '/404', element: <NotFound />, meta: { title: '404 · Page not found' } },
    {
      path: '/noindex/resume/v1',
      element: <ResumeV1 />,
      stylesheet: 'resume',
      meta: { title: 'Faisal_Arshed_resume', head: resumeV1Head }
    },
    {
      path: '/noindex/resume/v2',
      element: <ResumeV2 />,
      stylesheet: 'resume',
      meta: { title: 'Faisal Arshed - Resume', head: resumeV2Head }
    }
  ];
}
