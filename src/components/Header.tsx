export function Header() {
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
        <a href="/blog" className="no-underline">
          Ramblings
        </a>
        <a href="/projects" className="no-underline">
          Lab
        </a>
      </nav>
    </header>
  );
}
