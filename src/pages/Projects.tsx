import { Layout } from '../components/Layout';
import projects from '../data/lab-projects';

export function Projects() {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold my-6">Projects</h2>
        <ul className="space-y-5">
          {projects.map((project) => (
            <li key={project.title}>
              <a href={project.url} target="_blank" className="text-xl no-underline">
                {project.title}
              </a>
              <p className="text-sm text-black/60 mt-0.5">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
