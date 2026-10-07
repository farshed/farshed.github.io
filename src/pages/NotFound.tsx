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
      <h1 className="text-[5rem] md:text-[7rem] leading-none -ml-1 tracking-[-0.05em] tabular-nums">404</h1>
      <p className="text-xl mt-6 max-w-[34ch] tracking-[-0.01em]">
        This page doesn’t exist. Here’s some unsolicited advice instead.
      </p>

      <ol className="border-t mt-10 pt-6 text-lg leading-[1.9] text-muted">
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
