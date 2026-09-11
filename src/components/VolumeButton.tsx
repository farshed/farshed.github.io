import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function VolumeButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const label = playing ? 'Pause forest sounds' : 'Play forest sounds';

  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio('/media/forest.mp3');
      audio.loop = true;
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  useEffect(() => {
    const preload = () => {
      const audio = getAudio();
      audio.preload = 'auto';
      audio.load();
    };
    const whenIdle = () =>
      'requestIdleCallback' in window ? requestIdleCallback(preload) : setTimeout(preload, 1000);

    if (document.readyState === 'complete') whenIdle();
    else window.addEventListener('load', whenIdle, { once: true });
  }, []);

  const toggle = () => {
    const audio = getAudio();
    if (playing) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={playing}
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-ink text-paper shadow-lg shadow-ink/10 transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
    >
      {playing ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
    </button>
  );
}
