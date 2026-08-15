import { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function PortfolioGrid() {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const allTags = useMemo(() => {
    const tagCount: Record<string, number> = {};
    projects.forEach((p) =>
      p.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] ?? 0) + 1;
      })
    );
    return Object.keys(tagCount).sort((a, b) => (tagCount[b] ?? 0) - (tagCount[a] ?? 0));
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  const toggleTag = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Portfolio</h1>

      <div className="py-6 md:py-8">
        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">Filter by category</h2>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag('')}
                  className="text-xs font-medium px-3 py-1.5 border border-slate-300 text-slate-900 rounded hover:bg-slate-100 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-2.5 py-1 text-xs font-medium rounded cursor-pointer transition-all ${
                    selectedTag === tag
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-slate-200 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="block group relative overflow-hidden rounded-lg bg-white border border-slate-200 transition-all duration-300 hover:border-customBlue hover:shadow-lg cursor-pointer h-full no-underline"
              >
                <div className="relative w-full aspect-video bg-slate-200 overflow-hidden flex-shrink-0">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-1.5 py-0.5 text-[0.65rem] font-medium bg-slate-100 text-slate-900 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-slate-900 text-xs font-medium group-hover:gap-2 gap-1 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
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
