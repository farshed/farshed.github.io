import { BrandIcon } from './BrandIcon';

export function Linkedin({ className }: { className?: string }) {
  return (
    <BrandIcon className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2.5" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </BrandIcon>
  );
}
