import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';
import { Github } from './icons/Github';
import ProjectGallery from './ProjectGallery';

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  const hasMedia = !!project.screenshotUrls?.length || !!project.loomUrl;

  return (
    <article>
      <header className="mb-12">
        <p className="eyebrow">
          <a href="/portfolio" className="no-underline hover:text-ink">
            Portfolio
          </a>
          <span className="mx-2 text-muted/50">/</span>
          {project.title}
        </p>
        <h1 className="text-5xl md:text-6xl leading-[1.05] mt-5">{project.title}</h1>
        <p className="font-serif italic text-muted text-xl mt-5 max-w-[40ch]">{project.description}</p>
      </header>

      {!!project.screenshotUrls?.length && (
        <div className="mb-14">
          <ProjectGallery images={project.screenshotUrls} />
        </div>
      )}

      {project.loomUrl && (
        <div className="aspect-video rounded-sm overflow-hidden bg-line mb-14">
          <iframe
            src={project.loomUrl}
            title={`${project.title} demo video`}
            loading="lazy"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      )}

      <div className={`grid md:grid-cols-[12rem_1fr] gap-x-12 gap-y-10 hairline pt-8 ${hasMedia ? '' : 'mt-2'}`}>
        <aside className="flex flex-col gap-y-8">
          <div>
            <p className="eyebrow mb-3">Tags</p>
            <ul className="text-sm leading-relaxed">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div>
              <p className="eyebrow mb-3">Links</p>
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
          <p className="eyebrow mb-3">About</p>
          <p className="text-lg leading-[1.7] whitespace-pre-line max-w-[60ch]">{project.writeup}</p>
        </div>
      </div>

      <p className="hairline mt-16 pt-6">
        <a href="/portfolio" className="eyebrow no-underline hover:text-ink">
          ← All work
        </a>
      </p>
    </article>
  );
}
