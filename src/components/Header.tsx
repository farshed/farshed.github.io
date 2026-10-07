export type NavSection = 'ramblings' | 'lab';

function navClass(isActive: boolean, overMedia: boolean) {
  const base = 'inline-block py-3 no-underline';
  return `${base} hover:text-accent ${isActive || overMedia ? 'text-ink' : 'text-muted'}`;
}

export function Header({ active, overMedia = false }: { active?: NavSection; overMedia?: boolean }) {
  return (
    <header className="flex justify-between items-baseline flex-wrap gap-6 pt-6 pb-12 md:pt-8 md:pb-16">
      <p className="font-medium tracking-[-0.01em]">
        <a href="/" className="no-underline">
          Faisal Arshed
        </a>
      </p>
      <nav className="flex flex-wrap gap-x-6 -my-3 text-[0.95rem]">
        <a href="/blog" className={navClass(active === 'ramblings', overMedia)} aria-current={active === 'ramblings' ? 'page' : undefined}>
          ramblings
        </a>
        <a href="/projects" className={navClass(active === 'lab', overMedia)} aria-current={active === 'lab' ? 'page' : undefined}>
          lab
        </a>
      </nav>
    </header>
  );
}
