export interface LabProject {
  title: string;
  url: string;
  description: string;
  stars?: string;
}

const projects: LabProject[] = [
  {
    title: 'Wu',
    url: 'https://wu.farshed.me',
    description: 'Fast, native code editor in Rust.'
  },
  {
    title: 'ETF Mirror',
    url: 'https://etfmirror.farshed.me',
    description: 'An ETF replicator for PSX investors.'
  },
  {
    title: 'Qisse',
    url: 'https://qisse.app',
    description: 'Vocabulary and comprehension acquisition through reading.'
  },
  {
    title: 'Sage',
    url: 'https://github.com/farshed/sage',
    description: 'Self-hosted voice chat with LLMs.',
    stars: '200+'
  },
  {
    title: 'Soundspice',
    url: 'https://github.com/farshed/SoundSpice-mobile',
    description:
      "Minimalist music player for Android. Featured at #1 spot in Beebom's Best FOSS Android Apps of 2020.",
    stars: '400+'
  },
  {
    title: 'Duofolio',
    url: 'https://github.com/farshed/duofolio',
    description:
      'Ebook reader to help language learners effectively acquire new vocabulary in their target language.',
    stars: '450+'
  },
  {
    title: 'DeepGaze',
    description:
      'Experiment in realtime object detection and image classification on edge devices using Tensorflow.',
    url: 'https://github.com/farshed/deepgaze'
  },
  {
    title: 'Genius++',
    url: 'https://github.com/farshed/genius-lyrics-api',
    description: 'Library for aggregating lyrics and song metadata from Genius API and website.',
    stars: '200+'
  },
  {
    title: 'Zusammen',
    description: 'Parallel downloader using Rust and Tokio.',
    url: 'https://github.com/farshed/zusammen'
  },
  {
    title: 'Pennywise',
    description: 'A robust banking ledger backend written in Go.',
    url: 'https://github.com/farshed/pennywise'
  }
];

export default projects;
