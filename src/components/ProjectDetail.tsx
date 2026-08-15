import { ArrowLeft, Code, ExternalLink } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';
import ProjectGallery from './ProjectGallery';

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  return (
    <div>
      <a href="/portfolio" className="inline-flex items-center gap-2 text-sm mb-8">
        <ArrowLeft className="w-3 h-3" />
        Back to portfolio
      </a>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
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

      {!!project.screenshotUrls?.length ? <ProjectGallery images={project.screenshotUrls} /> : null}

      {project.loomUrl ? (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={project.loomUrl}
            frameBorder="0"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      ) : null}

      <div className="prose max-w-none mt-8">
        <p className="text-slate-600 leading-relaxed whitespace-pre-line">{project.writeup}</p>
      </div>

      <div className="flex flex-row flex-wrap justify-start gap-3 mt-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="inline-block px-2 py-1 text-xs font-medium bg-slate-200 text-slate-900 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.liveUrl || project.githubUrl ? (
        <div className="my-4 md:my-6 border-t border-slate-200" />
      ) : null}

      <div className="flex items-center gap-2 mt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-200 hover:bg-slate-400 no-underline hover:text-inherit shadow-sm transition-all"
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
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-200 hover:bg-slate-400 no-underline hover:text-inherit shadow-sm transition-all"
          >
            <Code className="w-3 h-3" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
