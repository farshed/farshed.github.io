import { hydrateRoot } from 'react-dom/client';
import { PortfolioProjectPage } from '../pages/portfolio/PortfolioProjectPage';
import { projects } from '../data/portfolio';

// The URL is /portfolio/<id>; every project page shares this bundle.
const id = location.pathname.split('/').filter(Boolean)[1];
const project = projects.find((p) => p.id === id);

if (project) {
  hydrateRoot(document.getElementById('root')!, <PortfolioProjectPage project={project} />);
}
