import { Layout } from '../../components/Layout';
import projects from '../../data/lab-projects';

export function Projects() {
  return (
    <Layout active="lab">
      <div>
        <h1 className="text-3xl font-bold tracking-tight my-6">Projects</h1>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.title}>
              <a href={project.url} target="_blank" className="block no-underline rounded-md">
                <span className="text-xl">{project.title}</span>
                <p className="text-sm text-black/60 mt-0.5">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
