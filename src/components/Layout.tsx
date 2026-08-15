import type { ReactNode } from 'react';
import { Header } from './Header';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen py-6 px-5 pb-20 md:px-0 mx-auto max-w-2xl">
      <Header />
      {children}
    </main>
  );
}
