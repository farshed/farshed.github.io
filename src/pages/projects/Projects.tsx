import { ArrowUpRight } from 'lucide-react';
import { Layout } from '../../components/Layout';
import projects from '../../data/lab-projects';

export function Projects() {
  return (
    <Layout active="lab">
      <div>
        <header className="mb-14">
          <p className="eyebrow">Things I’ve built</p>
          <h1 className="text-5xl md:text-6xl leading-[1.05] mt-3">Lab</h1>
          <p className="font-serif italic text-muted text-xl mt-4">
            Tools, experiments, and side projects. Mostly open source.
          </p>
        </header>

        <ol className="hairline">
          {projects.map((project, i) => (
            <li key={project.title} className="group border-b border-line">
              <a
                href={project.url}
                target="_blank"
                rel="noopener"
                className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-5 no-underline text-ink"
              >
                <span className="eyebrow tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="font-serif text-[1.45rem] leading-snug group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </span>
                  <span className="block text-sm text-muted mt-1 max-w-[52ch]">{project.description}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted group-hover:text-accent transition-colors duration-200 self-center" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}
