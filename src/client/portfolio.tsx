import { hydrateRoot } from 'react-dom/client';
import { PortfolioIndex } from '../pages/portfolio/PortfolioIndex';

hydrateRoot(document.getElementById('root')!, <PortfolioIndex />);
