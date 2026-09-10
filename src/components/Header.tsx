export type NavSection = 'ramblings' | 'lab';

function navClass(isActive: boolean) {
  const base = 'eyebrow inline-block py-3';
  return isActive
    ? `${base} text-ink underline decoration-1 decoration-ink underline-offset-[0.7em]`
    : `${base} no-underline hover:text-ink`;
}

export function Header({ active }: { active?: NavSection }) {
  return (
    <header className="flex justify-between items-baseline flex-wrap gap-6 pt-6 pb-10 md:pt-8 md:pb-14">
      <p className="font-serif text-[1.35rem] leading-none">
        <a href="/" className="no-underline">
          Faisal Arshed
        </a>
      </p>
      <nav className="flex flex-wrap gap-x-7 -my-3">
        <a href="/blog" className={navClass(active === 'ramblings')}>
          Ramblings
        </a>
        <a href="/projects" className={navClass(active === 'lab')}>
          Lab
        </a>
      </nav>
    </header>
  );
}
