import { Layout } from '../components/Layout';

const advice = [
  'You’re going to die soon.',
  'Make the most of what little time you have left.',
  'Do it all. Experience it all. Taste it all.',
  'Embrace the part of you that is cringe.',
  'Kill the part that cringes.',
  'There are no rules.',
  'You can just poke the world and bend it to your desires.',
  'Cultivate infinite risk tolerance.',
  'Stop being afraid.',
  'Live deliciously.'
];

export function NotFound() {
  return (
    <Layout>
      <p className="eyebrow">Page not found</p>
      <h1 className="text-[5.5rem] md:text-[8rem] leading-none mt-3 -ml-1 tabular-nums">404</h1>
      <p className="font-serif text-2xl mt-6 max-w-[30ch]">
        This page doesn’t exist. Here’s some unsolicited advice instead.
      </p>

      <ol className="hairline mt-10 pt-6 font-serif italic text-xl leading-[1.9] text-muted">
        {advice.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>

      <p className="mt-10 text-lg">
        Now <a href="/">go back home</a>.
      </p>
    </Layout>
  );
}
