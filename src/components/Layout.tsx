import type { ReactNode } from 'react';
import { Header, type NavSection } from './Header';

export function Layout({ children, active }: { children: ReactNode; active?: NavSection }) {
  return (
    <main className="min-h-screen py-6 px-5 pb-20 md:px-0 mx-auto max-w-2xl">
      <Header active={active} />
      {children}
    </main>
  );
}
