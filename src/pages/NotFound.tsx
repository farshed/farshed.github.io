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
      <h1 className="text-8xl mt-4 font-bold">404</h1>
      <p className="text-xl leading-relaxed mt-2">This page doesn’t exist.</p>
      <p className="text-xl mt-6">Here’s some unsolicited advice instead.</p>
      <div className="mt-6">
        {advice.map((x) => (
          <p key={x} className="text-lg leading-loose">
            {x}
          </p>
        ))}
      </div>
      <p className="text-lg mt-8">
        Now <a href="/">go back home</a>.
      </p>
    </Layout>
  );
}
