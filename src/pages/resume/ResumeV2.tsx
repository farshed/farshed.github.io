import { Mail, Phone } from 'lucide-react';
import { Github } from '../../components/icons/Github';
import { Linkedin } from '../../components/icons/Linkedin';

const contact = [
  { icon: Mail, label: 'mail@farshed.me', href: 'mailto:mail@farshed.me' },
  { icon: Phone, label: '(+92) 309 6855375', href: 'tel:+923096855375' },
  { icon: Github, label: 'github.com/farshed', href: 'https://github.com/farshed' },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/faisal-arshed',
    href: 'https://linkedin.com/in/faisal-arshed/'
  }
];

const skills = [
  {
    category: 'Languages',
    text: 'TypeScript, Python, Rust'
  },
  {
    category: 'Frameworks and Libraries',
    text: 'React, Next.js, Node.js, FastAPI, GraphQL'
  },
  {
    category: 'Database and Infra',
    text: 'PostgreSQL, MongoDB, Redis, Docker, AWS, Supabase'
  },
  {
    category: 'AI Agents',
    text: 'RAG, MCP, LangChain'
  }
];

const workExperience = [
  {
    role: 'Product Engineer',
    org: 'Zeist Labs',
    date: 'May 2025 – Present',
    logo: 'zeistlabs_logo.jpeg',
    highlights: [
      'Building products <span class="font-semibold">from concept to launch</span> as an independent contractor.',
      'Engineered an <span class="font-semibold">asset portfolio management system and financial analytics terminal</span>, consolidating <span class="font-semibold">5+ data sources</span> into a single real-time dashboard and replacing 3 separate tools.',
      'Built an <span class="font-semibold">AI-powered video ad platform (HeyGen + OpenAI), reducing production time by ~70%</span> and enabling the delivery of 100+ variants/month without a dedicated creative team.',
      'Deployed a <span class="font-semibold">24/7 AI voice coaching product (OpenAI + Twilio)</span>, supporting 2k+ sessions/month with sub-3s response latency and zero human involvement.',
      'Automated business-critical workflows for a US law firm and a British security training company, <span class="font-semibold">saving tens of hours of manual work per week</span>.'
    ],
    skills: 'TypeScript, Bun, Elysia, React, Python, OpenAI, PostgreSQL'
  },
  {
    role: 'Senior Software Engineer',
    org: 'SmashCloud',
    date: 'July 2022 – May 2025',
    logo: 'smashcloud_logo.jpeg',
    highlights: [
      'Led the development of a <span class="font-semibold">workplace experience B2B SaaS</span> for a French <span class="font-semibold">Fortune Global 500 giant</span>.',
      'Built key features for a <span class="font-semibold">multi-tenant property turnover platform</span> used by leading housing owners across North America.',
      `Modernized a Quebec manufacturer's ERP from legacy C++, eliminated technical debt and <span class="font-semibold">unified fragmented operations</span> into a single system.`,
      'Optimized critical backend services, reducing execution time <span class="font-semibold">from several minutes to mere seconds</span>.'
    ],
    skills: 'JavaScript, React, Next.js, Node.js, GraphQL, MySQL, AWS'
  },
  {
    role: 'Software Engineer',
    org: 'Pursue Today',
    date: 'March 2021 – June 2022',
    logo: 'pursuetoday_logo.jpeg',
    highlights: [
      'Built <span class="font-semibold">Pribox (now GoCustomer)</span>, a SaaS platform for tracking and improving email deliverability and domain reputation.',
      'Built a PostgreSQL-to-Elasticsearch data pipeline that <span class="font-semibold">aggregated millions of data points</span> in sub-second time.',
      'Implemented <span class="font-semibold">automated email campaigns</span> with real-time analytics and data visualization.'
    ],
    skills: 'React, Next.js, Node.js, GraphQL, React Native, MongoDB, Redis'
  },
  {
    role: 'Full-Stack Engineer',
    org: 'BookOtto',
    date: 'July 2020 – March 2021',
    logo: 'bookotto_logo.jpg',
    highlights: [
      'Prototyped and developed the flagship MVP, taking the product <span class="font-semibold">from concept to launch in 4 months</span>.',
      'Developed <span class="font-semibold">Cribfox</span>, a CRM to digitize NYC real estate bureaucracy during COVID-19, <span class="font-semibold">used by 30+ agencies</span>.',
      'Helped create and maintain the AWS backend and CI/CD infrastructure.'
    ],
    skills: 'React Native, AWS, Python, React, CI/CD'
  }
];

const projects = [
  {
    name: 'Sage',
    description: 'Self-hosted voice conversational layer for LLMs.',
    skills: 'TypeScript, Rust, whisper.cpp, Kokoro, Docker',
    year: 2025
  },
  {
    name: 'Pennywise',
    description: 'Production-grade, robust banking ledger with transactions and extensive test coverage.',
    skills: 'Go, Gin, PostgreSQL, Docker, AWS',
    year: 2024
  },
  {
    name: 'SoundSpice',
    description: `Minimalist music player for Android and Desktop. Featured as <span class="font-semibold">Beebom's Top FOSS Android App of 2020</span>.`,
    skills: 'JavaScript, React Native, FFmpeg, Node.js, Electron',
    year: 2019
  }
];

/** Extra head content injected by the page shell */
export const head = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
    <style>
      @font-face {
        font-family: 'Apercu';
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
        src: url('/fonts/apercu-regular.woff2') format('woff2');
      }

      :root {
        font-size: 15.5px;
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      hr {
        background-color: #6b7280;
      }

      .apercu-md {
        font-family: 'Apercu', sans-serif;
        font-size: 1.05rem;
        font-weight: 600;
        font-style: normal;
      }
    </style>`;

export function ResumeV2() {
  return (
    <div className="bg-gray-5 text-black">
      <div className="max-w-4xl mx-auto p-4 bg-white flex flex-col gap-y-1">
          {/* Header */}
          <header className="text-center mb-3">
            <h1 className="text-3xl mb-2">Faisal Arshed</h1>
            <div className="flex flex-wrap justify-center gap-x-3 text-[13px] mt-2 text-gray-700">
              {contact.map((c) => (
                <a href={c.href} className="flex flex-row gap-x-1 items-center tracking-tight" key={c.label}>
                  <c.icon className="size-3.5" />
                  {c.label}
                </a>
              ))}
            </div>
          </header>

          {/* Experience */}
          <section>
            <div className="flex flex-row items-center">
              <h2 className="text-sm mb-3 text-gray-600 whitespace-nowrap">Professional Experience</h2>
              <hr className="w-full mb-2 ml-2" />
            </div>

            <div className="px-2">
              {workExperience.map((exp) => (
                <div className="mb-4" key={exp.org}>
                  <div className="flex flex-row items-center gap-x-3 mb-2">
                    <img src={`/media/resume/${exp.logo}`} className="size-9 border" alt="logo" />
                    <div>
                      <div className="flex flex-row items-center gap-2">
                        <h3 className="font-bold apercu-md text-[14.5px]">{exp.org}</h3>
                        <p className="text-sm text-gray-700">
                          {exp.role} ({exp.date})
                        </p>
                      </div>
                      <p className="text-xs text-skyBlue">{exp.skills}</p>
                    </div>
                  </div>
                  <ul className="list-disc text-sm pl-1.5 flex flex-col gap-y-0.5">
                    {exp.highlights.map((h) => (
                      <li key={h} dangerouslySetInnerHTML={{ __html: h }} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="flex flex-row items-center">
              <h2 className="text-sm mb-3 text-gray-600 whitespace-nowrap">Projects</h2>
              <hr className="w-full mb-2 ml-2" />
            </div>

            <div className="px-2">
              {projects.map((p) => (
                <div className="mb-2" key={p.name}>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="font-bold apercu-md text-[14.5px]">{p.name}</h3>
                    <p className="text-xs text-skyBlue">
                      {p.skills} <span className="text-gray-700">({p.year})</span>
                    </p>
                  </div>
                  <p className="text-sm" dangerouslySetInnerHTML={{ __html: p.description }} />
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-1">
            <div className="flex flex-row items-center">
              <h2 className="text-sm mb-3 text-gray-600 whitespace-nowrap">Education</h2>
              <hr className="w-full mb-2 ml-2" />
            </div>

            <div className="px-2 mb-3 flex flex-row items-center gap-2">
              <h3 className="font-bold apercu-md text-[14.5px]">PMAS Arid Agriculture University</h3>
              <p className="text-sm text-gray-700">B.S. Computer Science – GPA 3.37 (Class of 2020)</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="flex flex-row items-center">
              <h2 className="text-sm mb-3 text-gray-600">Skills</h2>
              <hr className="w-full mb-2 ml-2" />
            </div>
            <div className="ml-6 flex flex-col gap-y-1.5">
              {skills.map((s) => (
                <p className="text-[13px]" key={s.category}>
                  {s.category} –<span className="text-skyBlue"> {s.text}</span>
                </p>
              ))}
            </div>
          </section>
        </div>
    </div>
  );
}
