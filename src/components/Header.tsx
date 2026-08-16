export type NavSection = 'ramblings' | 'lab';

function navClass(isActive: boolean) {
  return isActive ? 'underline decoration-2 underline-offset-8' : 'no-underline';
}

export function Header({ active }: { active?: NavSection }) {
  return (
    <header className="flex justify-between items-center flex-wrap gap-6 pt-6 pb-10">
      <div className="flex items-center gap-3">
        <p className="text-lg font-semibold">
          <a href="/" className="no-underline">
            Faisal Arshed
          </a>
        </p>
      </div>
      <nav className="font-semibold flex flex-wrap gap-x-6 gap-y-2">
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
