const button = document.querySelector<HTMLButtonElement>('#volume')!;
let audio: HTMLAudioElement | undefined;

function getAudio() {
  if (!audio) {
    audio = new Audio('/media/forest.mp3');
    audio.loop = true;
  }
  return audio;
}

function setPlaying(playing: boolean) {
  button.setAttribute('aria-pressed', String(playing));
  button.setAttribute('aria-label', playing ? 'Pause forest sounds' : 'Play forest sounds');
}

button.addEventListener('click', () => {
  const audio = getAudio();
  if (button.getAttribute('aria-pressed') === 'true') {
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
  } else {
    audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }
});

function preload() {
  const audio = getAudio();
  audio.preload = 'auto';
  audio.load();
}

const whenIdle = () =>
  'requestIdleCallback' in window ? requestIdleCallback(preload) : setTimeout(preload, 1000);

if (document.readyState === 'complete') whenIdle();
else window.addEventListener('load', whenIdle, { once: true });
