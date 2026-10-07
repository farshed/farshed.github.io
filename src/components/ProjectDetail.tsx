import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';
import { Github } from './icons/Github';
import ProjectGallery from './ProjectGallery';

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  const hasMedia = !!project.screenshotUrls?.length || !!project.loomUrl;

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl md:text-[2.6rem] leading-[1.1]">{project.title}</h1>
        <p className="text-lg text-muted mt-4 max-w-[48ch]">{project.description}</p>
      </header>

      {!!project.screenshotUrls?.length && (
        <div className="mb-14">
          <ProjectGallery images={project.screenshotUrls} />
        </div>
      )}

      {project.loomUrl && (
        <div className="aspect-video rounded-xl border border-line overflow-hidden bg-line mb-14">
          <iframe
            src={project.loomUrl}
            title={`${project.title} demo video`}
            loading="lazy"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      )}

      <div className={`grid md:grid-cols-[12rem_1fr] gap-x-12 gap-y-10 ${hasMedia ? '' : 'mt-2'}`}>
        <aside className="flex flex-col gap-y-8">
          <div>
            <p className="text-sm text-muted mb-2">Tags</p>
            <ul className="meta text-ink leading-relaxed">
              {project.tags.map((tag) => (
                <li key={tag}>{tag.toLowerCase()}</li>
              ))}
            </ul>
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div>
              <p className="text-sm text-muted mb-2">Links</p>
              <ul className="text-sm flex flex-col gap-y-1.5">
                {project.liveUrl && (
                  <li>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                      Live site <ArrowUpRight className="size-3.5" />
                    </a>
                  </li>
                )}
                {project.githubUrl && (
                  <li>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                      Source <Github className="size-3.5" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </aside>

        <div>
          <p className="text-sm text-muted mb-2">About</p>
          <p className="text-lg leading-[1.7] whitespace-pre-line max-w-[60ch]">{project.writeup}</p>
        </div>
      </div>

      <p className="mt-16">
        <a href="/portfolio" className="text-sm no-underline text-muted hover:text-accent">
          ← all work
        </a>
      </p>
    </article>
  );
}
