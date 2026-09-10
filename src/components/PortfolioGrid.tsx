import { projects } from '../data/portfolio';

export default function PortfolioGrid() {
  return (
    <div>
      <header className="mb-16">
        <p className="eyebrow">Selected work</p>
        <h1 className="text-5xl md:text-6xl leading-[1.05] mt-3">Portfolio</h1>
        <p className="font-serif italic text-muted text-xl mt-4 max-w-[40ch]">
          Products I’ve designed and built, for clients and for myself.
        </p>
      </header>

      <ol className="flex flex-col gap-y-20">
        {projects.map((project, i) => (
          <li key={project.id} className="group">
            <a href={`/portfolio/${project.id}`} className="block no-underline text-ink">
              {project.thumbnail && (
                <div className="overflow-hidden rounded-sm bg-line mb-7">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-[5rem_1fr] gap-x-8">
                <p className="eyebrow tabular-nums pt-2 mb-2 md:mb-0">{String(i + 1).padStart(2, '0')}</p>
                <div>
                  <h2 className="text-3xl leading-tight group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-muted max-w-[52ch]">{project.description}</p>
                  <p className="eyebrow mt-4">{project.tags.slice(0, 4).join(' · ')}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
