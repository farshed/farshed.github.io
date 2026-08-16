import { Layout } from '../components/Layout';
import { VolumeButton } from '../components/VolumeButton';
import { EMAIL } from '../consts';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/farshed' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/faisal-arshed' },
  { label: 'Reading', href: 'https://www.goodreads.com/user/show/104865012-faisal-arshed' },
  { label: 'Listening', href: 'https://open.spotify.com/user/jy6o6o9a9x3rfrhi5dtd5dj6d' },
  { label: 'Photography', href: 'https://unsplash.com/@farshed' },
];

export function Home() {
  return (
    <Layout>
      <h1 className="mt-10 text-3xl md:text-4xl font-semibold tracking-tight">Hi! I’m Faisal</h1>
      <p className="mt-3 text-sm text-gray-500" data-nosnippet="">
        /ˈfeɪ.səl/ – rhymes with “vassal”
      </p>

      <div className="flex flex-col gap-y-8 text-xl leading-[1.8] mt-8">
        <p>
          A software engineer and aspiring generalist who likes building and tinkering with things.
        </p>

        <p>Besides tech, I’m interested in evolutionary psychology, language, history, and culture.</p>

        <p>
          To get in touch, shoot me an email at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or{' '}
          <a href="https://cal.com/farshed/30min" target="_blank" rel="noopener">
            schedule a chat
          </a>
          .
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-lg font-medium">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            className="no-underline hover:underline"
          >
            {s.label}
          </a>
        ))}
      </div>

      <video
        className="fixed inset-0 w-full h-full object-cover pointer-events-none -z-10"
        src="/media/leaves.mp4"
        poster="/media/leaves-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <VolumeButton />
    </Layout>
  );
}
