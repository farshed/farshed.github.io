import type { ReactNode } from 'react';
import { Header, type NavSection } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  active?: NavSection;
  width?: 'prose' | 'wide';
  footer?: boolean;
}

const widths = {
  prose: 'max-w-2xl',
  wide: 'max-w-4xl'
};

export function Layout({ children, active, width = 'prose', footer = true }: LayoutProps) {
  return (
    <main className={`rise flex flex-col min-h-screen px-6 pb-16 md:px-8 mx-auto ${widths[width]}`}>
      <Header active={active} />
      {children}
      {footer && <Footer />}
    </main>
  );
}
