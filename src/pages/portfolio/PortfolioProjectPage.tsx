import { Layout } from '../../components/Layout';
import ProjectDetail from '../../components/ProjectDetail';
import type { PortfolioProject } from '../../data/portfolio';

export function PortfolioProjectPage({ project }: { project: PortfolioProject }) {
  return (
    <Layout>
      <ProjectDetail project={project} />
    </Layout>
  );
}
