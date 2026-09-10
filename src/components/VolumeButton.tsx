import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUTED_KEY = 'forest-muted';

function wasMutedByUser() {
  try {
    return localStorage.getItem(MUTED_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberMuted(muted: boolean) {
  try {
    if (muted) localStorage.setItem(MUTED_KEY, '1');
    else localStorage.removeItem(MUTED_KEY);
  } catch {}
}

function isTypingTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || /^(input|textarea|select)$/i.test(target.tagName));
}

export function VolumeButton() {
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const label = playing ? 'Pause forest sounds' : 'Play forest sounds';

  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio('/media/forest.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const setPlayingState = (next: boolean) => {
    playingRef.current = next;
    setPlaying(next);
  };

  const play = () => {
    setPlayingState(true);
    getAudio().play().catch(() => {});
  };

  const pause = () => {
    setPlayingState(false);
    getAudio().pause();
  };

  const toggle = () => {
    if (playingRef.current) {
      pause();
      rememberMuted(true);
    } else {
      play();
      rememberMuted(false);
    }
  };

  useEffect(() => {
    getAudio();
    let armed = !wasMutedByUser();

    const disarm = () => {
      armed = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!armed) return;
      if (e.target instanceof Element && e.target.closest('a, button')) return;
      disarm();
      play();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return;
      if (e.key === 'm' || e.key === 'M') {
        disarm();
        toggle();
        return;
      }
      if (!armed || e.key === 'Tab' || e.key === 'Shift') return;
      disarm();
      play();
    };

    const onVisibility = () => {
      if (!playingRef.current) return;
      if (document.hidden) getAudio().pause();
      else getAudio().play().catch(() => {});
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

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
