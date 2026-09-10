import { socials } from '../data/socials';

export function Footer() {
  return (
    <footer className="mt-auto pt-24">
      <div className="hairline pt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener" className="eyebrow no-underline hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
