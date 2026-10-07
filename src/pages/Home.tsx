import { Layout } from '../components/Layout';
import { VolumeButton } from '../components/VolumeButton';
import { EMAIL } from '../consts';
import { socials } from '../data/socials';

export function Home() {
  return (
    <Layout footer={false} overMedia>
      <div className="mt-[2vh] md:mt-[8vh] max-w-xl">
        <h1 className="text-4xl md:text-5xl leading-[1.05]">Hi! I’m Faisal</h1>
        <p className="meta mt-3" data-nosnippet="">
          /ˈfeɪ.səl/ – rhymes with “vassal”
        </p>

        <div className="flex flex-col gap-y-5 mt-8 text-lg md:text-xl leading-[1.6] tracking-[-0.01em]">
          <p>A software engineer and aspiring generalist who likes building and tinkering with things.</p>

          <p>Besides tech, I’m interested in evolutionary psychology, language, history, and culture.</p>

          <p>
            To get in touch, shoot me an email at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or{' '}
            <a href="https://cal.com/farshed/30min" target="_blank" rel="noopener">
              schedule a chat
            </a>
            .
          </p>
        </div>

        <div className="mt-9 pt-5 border-t border-line flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener" className="no-underline text-muted hover:text-accent">
                  {s.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <video
        className="fade-in fixed inset-0 w-full h-full object-cover pointer-events-none select-none -z-20"
        src="/media/leaves.mp4"
        poster="/media/leaves-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none select-none -z-10 bg-paper/20" />

      <VolumeButton />
    </Layout>
  );
}
