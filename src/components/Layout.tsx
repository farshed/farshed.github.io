import type { ReactNode } from 'react';
import { Header, type NavSection } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  active?: NavSection;
  width?: 'prose' | 'wide';
  footer?: boolean;
  overMedia?: boolean;
}

const widths = {
  prose: 'max-w-2xl',
  wide: 'max-w-4xl'
};

export function Layout({ children, active, width = 'prose', footer = true, overMedia = false }: LayoutProps) {
  return (
    <main className={`flex flex-col min-h-screen px-6 pb-16 md:px-8 mx-auto ${widths[width]}`}>
      <Header active={active} overMedia={overMedia} />
      {children}
      {footer && <Footer />}
    </main>
  );
}
