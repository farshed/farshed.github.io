import { hydrateRoot } from 'react-dom/client';
import { PortfolioIndex } from '../pages/PortfolioIndex';

hydrateRoot(document.getElementById('root')!, <PortfolioIndex />);
