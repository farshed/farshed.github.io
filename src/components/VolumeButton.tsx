import { Volume2, VolumeX } from 'lucide-react';

export function VolumeButton() {
  return (
    <button
      id="volume"
      type="button"
      aria-label="Play forest sounds"
      aria-pressed="false"
      className="group fixed bottom-5 right-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-ink text-paper shadow-lg shadow-ink/10 transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
    >
      <VolumeX className="size-4 group-aria-pressed:hidden" />
      <Volume2 className="size-4 hidden group-aria-pressed:block" />
    </button>
  );
}
