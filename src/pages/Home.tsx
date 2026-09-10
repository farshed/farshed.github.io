import { Layout } from '../components/Layout';
import { VolumeButton } from '../components/VolumeButton';
import { EMAIL } from '../consts';
import { socials } from '../data/socials';

export function Home() {
  return (
    <Layout footer={false}>
      <div className="mt-[4vh] md:mt-[12vh]">
        <h1 className="text-[2.75rem] md:text-6xl leading-[1.05]">Hi! I’m Faisal</h1>
        <p className="mt-4 text-[0.85rem] text-muted" data-nosnippet="">
          /ˈfeɪ.səl/ – rhymes with “vassal”
        </p>
      </div>

      <div className="flex flex-col gap-y-7 mt-12 font-serif text-[1.45rem] md:text-[1.6rem] leading-[1.5] max-w-[32ch]">
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

      <ul className="hairline mt-14 pt-5 flex flex-wrap gap-x-6 gap-y-2">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener" className="eyebrow no-underline hover:text-ink">
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <video
        className="fade-in fixed inset-0 w-full h-full object-cover pointer-events-none -z-20"
        src="/media/leaves.mp4"
        poster="/media/leaves-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 bg-paper/72 md:bg-transparent md:bg-[linear-gradient(105deg,rgba(246,244,238,0.85)_0%,rgba(246,244,238,0.6)_45%,rgba(246,244,238,0.1)_100%)]"
      />

      <VolumeButton />
    </Layout>
  );
}
