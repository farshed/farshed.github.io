const summary = `Full-Stack Engineer with over 6 years of experience building and scaling products from MVP to enterprise. Quick learner with a can-do attitude and a track record of being the lead engineer on mission-critical projects. `;

const workExperience = [
  {
    role: 'Software Engineer (Self-employed)',
    org: 'Zeist Labs',
    date: 'May 2025 - Present',
    keypoints: ['Building AI products and helping founders go from zero to one.']
  },
  {
    role: 'Senior Software Engineer',
    org: 'SmashCloud',
    date: 'July 2022 - May 2025',
    keypoints: [
      'Led the development of a workplace experience B2B SaaS for a French Fortune Global 500 giant.',
      'Developed crucial features for a leading tenant turnover management system, streamlining operations for top student housing owners across North America.',
      'Unified the fragmented ERP system of a Quebecois interior manufacturer and migrated key services from a legacy C++ codebase to React and Node.js.',
      'Optimized critical backend services, reducing execution time from several minutes to mere seconds.'
    ]
  },
  {
    role: 'Software Engineer',
    org: 'Pursue Today',
    date: 'March 2021 - June 2022',
    keypoints: [
      'Developed Pribox (now GoCustomer), a SaaS product for tracking and improving email deliverability and domain reputation, acting as its sole engineer during most of the MVP stage.',
      'Built a PostgreSQL → Elasticsearch data pipeline that aggregated millions of data points in subsecond time.',
      'Implemented automated planning and scheduling services for email campaigns with real-time analytics and data visualization.'
    ]
  },
  {
    role: 'Full Stack Engineer',
    org: 'BookOtto',
    date: 'July 2020 - March 2021',
    keypoints: [
      'Prototyped and developed the flagship MVP, taking the product from concept to launch in 4 months.',
      'Developed Cribfox, a CRM and document management solution to digitize bureaucratic operations in the NYC real estate market during the COVID-19 pandemic, used by 30+ agencies.',
      'Helped create and maintain the AWS backend and CI/CD infrastructure.'
    ]
  },
  {
    role: 'React Native Developer',
    org: 'MoneyWhere',
    date: 'March 2019 - December 2019',
    keypoints: [
      'Developed core fintech MVP using React Native and Node.js.',
      'Implemented a virtual currency system, payments, geolocation services, and advanced map features.'
    ]
  }
];

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'React Native',
  'AWS',
  'Docker',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'AI Agents',
  'RAG',
  'MCP'
];

/** Extra head content injected by the page shell */
export const head = `
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    <style>
      :root {
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.012rem;
      }

      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    </style>`;

export function ResumeV1() {
  return (
    <div className="bg-gray-100 min-h-screen text-sm text-black">
      <div className="max-w-4xl mx-auto bg-white overflow-hidden">
          {/* Header Section */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-medium">Faisal Arshed</h1>

            <div className="flex items-center mt-2 gap-x-4">
              <a href="https://github.com/farshed" target="_blank">
                github.com/farshed
              </a>
              <p className="text-gray-400">|</p>
              <a href="mailto:mail@farshed.me">mail@farshed.me</a>
              <p className="text-gray-400">|</p>
              <a href="tel:+92-3096855375">(+92) 309 6855375</a>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-4 pt-2">
            {/* Summary Section */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold pb-1 mb-2 border-b">Summary</h2>
              <p className="leading-relaxed">{summary}</p>
            </section>

            {/* Work Experience */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold pb-1 mb-2 border-b">Experience</h2>
              {workExperience.map((exp) => (
                <div className="mb-2" key={exp.org}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-semibold">{exp.role}</h3>
                      <p>{exp.org}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{exp.date}</p>
                    </div>
                  </div>
                  <ul className="list-disc ps-3 space-y-0.5">
                    {exp.keypoints.map((kp) => (
                      <li key={kp}>{kp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold pb-1 mb-2 text-gray-800 border-b">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">B.S. in Computer Science</h3>
                  <p className="text-gray-800">PMAS Arid Agriculture University</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">2016 - 2020</p>
                  <p>
                    <span className="font-medium">CGPA</span>: 3.37/4.0
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-lg font-semibold pb-1 mb-3 border-b">Skills</h2>
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
                {skills.map((skill) => (
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-200" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
    </div>
  );
}
