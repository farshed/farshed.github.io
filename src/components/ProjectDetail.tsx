import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';
import { Github } from './icons/Github';
import ProjectGallery from './ProjectGallery';

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  return (
    <div>
      <a href="/portfolio" className="inline-flex items-center gap-2 text-sm mb-8 no-underline">
        <ArrowLeft className="w-3 h-3" />
        Back to portfolio
      </a>

      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-200 hover:bg-slate-300 no-underline hover:text-inherit shadow-sm transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-200 hover:bg-slate-300 no-underline hover:text-inherit shadow-sm transition-all"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-1.5 py-0.5 text-xs text-[0.65rem] font-medium bg-slate-200 text-slate-900 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {!!project.screenshotUrls?.length ? (
        <div className="mb-8">
          <ProjectGallery images={project.screenshotUrls} />
        </div>
      ) : null}

      {project.loomUrl ? (
        <div className="aspect-video rounded-lg overflow-hidden bg-slate-200 mb-8">
          <iframe
            src={project.loomUrl}
            title={`${project.title} demo video`}
            loading="lazy"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      ) : null}

      <div className="prose max-w-none">
        <p className="text-slate-600 leading-relaxed whitespace-pre-line">{project.writeup}</p>
      </div>
    </div>
  );
}
