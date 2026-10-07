import { projects } from '../data/portfolio';

export default function PortfolioGrid() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mb-12">Portfolio</h1>

      <ul className="flex flex-col gap-y-16">
        {projects.map((project, i) => (
          <li key={project.id} className="group">
            <a href={`/portfolio/${project.id}`} className="block no-underline text-ink hover:text-ink">
              {project.thumbnail && (
                <div className="overflow-hidden rounded-xl border border-line bg-line mb-5">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>
              )}

              <h2 className="text-2xl leading-tight">{project.title}</h2>
              <p className="mt-1.5 text-muted max-w-[56ch]">{project.description}</p>
              <p className="meta mt-3">{project.tags.slice(0, 4).join(' · ').toLowerCase()}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
