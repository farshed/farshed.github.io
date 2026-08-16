import { projects } from '../data/portfolio';

export default function PortfolioGrid() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Portfolio</h1>

      <div className="py-6 md:py-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="flex flex-col group relative overflow-hidden rounded-lg bg-white border border-slate-200 transition-all duration-300 hover:border-customBlue hover:shadow-lg cursor-pointer h-full no-underline"
              >
                {project.thumbnail && (
                  <div className="relative w-full aspect-video bg-slate-200 overflow-hidden flex-shrink-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-1.5 py-0.5 text-[0.65rem] font-medium bg-slate-100 text-slate-900 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
