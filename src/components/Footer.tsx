import { socials } from '../data/socials';

export function Footer() {
  return (
    <footer className="mt-auto pt-24">
      <ul className="border-t pt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener" className="no-underline text-muted hover:text-accent">
              {s.label.toLowerCase()}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
