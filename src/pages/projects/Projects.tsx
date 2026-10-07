import { ArrowUpRight } from 'lucide-react';
import { Layout } from '../../components/Layout';
import projects from '../../data/lab-projects';

export function Projects() {
  return (
    <Layout active="lab">
      <h1 className="text-3xl md:text-4xl mb-10">Lab</h1>

      <ul className="flex flex-col gap-y-1">
        {projects.map((project) => (
          <li key={project.title}>
            <a href={project.url} target="_blank" rel="noopener" className="row group py-3">
              <div className="flex items-baseline justify-between gap-6">
                <span>
                  <span className="text-lg leading-snug tracking-[-0.01em]">{project.title}</span>
                  <span className="block text-sm text-muted mt-1 max-w-[52ch]">{project.description}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
