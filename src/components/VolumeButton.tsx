import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function VolumeButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const label = playing ? 'Pause forest sounds' : 'Play forest sounds';

  const toggle = () => {
    const audio = (audioRef.current ??= new Audio('/media/forest.mp3'));
    if (playing) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={playing}
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-out hover:scale-110 active:scale-95 bg-black text-neutral-200"
    >
      {playing ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
    </button>
  );
}
