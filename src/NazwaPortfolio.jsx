import { useEffect, useState } from 'react';
import profilePhoto from './assets/hero/profile.jpg';
import laWebsite from './assets/Projects/la.png';
import academyNextTopModel from './assets/Projects/Academy Next Top Model.png';
import levioraFashion from './assets/Projects/Leviora.png';
import jewepeWedding from './assets/Projects/jewepe weeding.png';
import perpusGas from './assets/Projects/Perpus Gas.png';
import preloved from './assets/Projects/preloved.png';

const EMAIL = 'nazwaaudina.work@gmail.com';
const CV_LINK = '/cv/CV_Nazwa_Audina_Web_Developer.pdf';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const projects = [
  {
    title: 'Academy Next Top Model Website & Chatbot',
    subtitle: 'Modeling academy website with an NLP chatbot',
    period: 'May 2025 - Aug 2026',
    category: 'Thesis & Academic Project',
    role: 'Web Developer',
    image: academyNextTopModel,
    description:
      'A responsive Laravel website for a modeling academy, later extended for my thesis with an NLP chatbot and an admin dashboard.',
    stats: [
      { value: '88.89%', label: 'Chatbot intent accuracy' },
      { value: '92%', label: 'User acceptance (UAT)' },
      { value: 'A', label: 'Thesis grade' },
    ],
    highlights: [
      'Designed 10+ pages in Figma and built them as responsive Laravel pages, including online registration.',
      'Connected the website to a Flask NLP service through a REST API.',
      'Built an admin dashboard to manage chatbot answers and retrain the model in the background.',
    ],
    tools: ['Laravel', 'PHP', 'MySQL', 'Python (Flask)', 'REST API', 'Figma'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Nazwadna/academynexttopmodel', primary: true },
      { label: 'Prototype', url: 'https://www.figma.com/proto/nnAZEMHkD7r4pRfjgxjjHk/Website-Academy-Next-Top-Model?node-id=0-1&t=10zxFPACS7MvkWoH-1' },
    ],
  },
  {
    title: 'Lenteng Agung Public Service Website',
    subtitle: 'Public service and complaint website with an AI chatbot',
    period: 'Oct 2025 - Jan 2026',
    category: 'Community Service Project',
    role: 'Project Manager · UI/UX support',
    image: laWebsite,
    description:
      'A public service and complaint website for the Lenteng Agung Urban Village Office, delivered by a team of 5 and officially handed over to the office.',
    stats: [
      { value: '30%', label: 'Faster information access' },
      { value: '25+', label: 'Online complaints in testing' },
      { value: 'A', label: 'Project grade' },
    ],
    highlights: [
      'Led a team of 5 from planning to handover, managing the timeline and task division.',
      'Helped design the UI/UX in Figma, including the menu structure and complaint flow.',
      'Received a Certificate of Appreciation from the Lurah after the official handover in January 2026.',
    ],
    tools: ['React.js', 'Vite', 'Tailwind CSS', 'Supabase', 'Figma'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Nazwadna/kelurahan-la-main', primary: true },
      { label: 'Dashboard Repo', url: 'https://github.com/Nazwadna/dashboard-kel-main' },
      { label: 'Prototype', url: 'https://www.figma.com/proto/ikdzIxZeY8x5oIdPl0pZzZ/Kelurahan-Lenteng-Agung-Design?node-id=0-1&t=hU8cBqoWuYfhM54C-1' },
      { label: 'Certificate', url: '/certificates/kelurahan-la-award.pdf', award: true },
    ],
  },
  {
    title: 'Perpus GAS',
    subtitle: 'Library management system',
    period: 'Dec 2024 - Jan 2025',
    category: 'Academic Project',
    role: 'Web Developer',
    image: perpusGas,
    description:
      'A web-based library system with a React front end and a PHP API, built for the Web Programming Practicum.',
    stats: [
      { value: '100+', label: 'Book records' },
      { value: '50+', label: 'Simulated loans tested' },
    ],
    highlights: [
      'Built separate member and admin views in React.',
      'Added book search, catalog management, and borrowing features.',
      'Connected the front end to a PHP API and MySQL database.',
    ],
    tools: ['React.js', 'Vite', 'Tailwind CSS', 'PHP', 'MySQL'],
    links: [{ label: 'GitHub', url: 'https://github.com/Nazwadna/perpusgas', primary: true }],
  },
  {
    title: 'Jewepe Wedding Organizer',
    subtitle: 'Wedding package ordering system',
    period: '2024',
    category: 'Web Development Project',
    role: 'Web Developer',
    image: jewepeWedding,
    description:
      'A web application where customers browse wedding packages and place orders, while the admin manages the catalog and incoming orders.',
    stats: [],
    highlights: [
      'Built customer pages for the package catalog, package details, order form, and contact.',
      'Built an admin panel to add, edit, and delete wedding packages.',
      'Added order management, an order report, and website settings.',
    ],
    tools: ['CodeIgniter 3', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Nazwadna/jwp_wedding', primary: true },
      { label: 'Prototype', url: 'https://www.figma.com/proto/1I9dKA2TFo5WBvxyHCTM3W/Wedding-Organizer-JeWePe?node-id=0-1&t=g1wjmtZ2Nyk8GkFa-1' },
    ],
  },
  {
    title: 'Preloved POS',
    subtitle: 'Point of sale app for a preloved fashion store',
    period: '2024',
    category: 'Desktop Application Project',
    role: 'Developer',
    image: preloved,
    description:
      'A desktop point of sale application to manage sales and inventory for a second-hand fashion store.',
    stats: [],
    highlights: [
      'Built item management (add, view, edit, delete) for fashion stock.',
      'Built a cashier screen with a shopping cart to process sales.',
      'Added owner and staff login, transaction history, and a daily sales recap.',
    ],
    tools: ['Java 17', 'Java Swing', 'Spring', 'Hibernate', 'MySQL'],
    links: [{ label: 'GitHub', url: 'https://github.com/Nazwadna/preloved', primary: true }],
  },
  {
    title: 'Leviora Fashion E-Commerce',
    subtitle: 'High-fidelity UI prototype',
    period: '2024',
    category: 'Human-Computer Interaction Project',
    role: 'UI/UX Designer',
    image: levioraFashion,
    description:
      'A fashion e-commerce prototype focused on product discovery and a smooth shopping flow.',
    stats: [
      { value: '12+', label: 'High-fidelity screens' },
      { value: '4', label: 'Core user flows' },
    ],
    highlights: [
      'Designed interactive high-fidelity screens in Figma.',
      'Mapped browsing, product details, cart, and checkout flows.',
    ],
    tools: ['Figma'],
    links: [
      { label: 'Prototype', url: 'https://www.figma.com/proto/BsfZMYqS7Fqefuauhb6KXh/E-commerce?node-id=0-1&t=QtNUKDd75wvsvYRi-1', primary: true },
      { label: 'Figma File', url: 'https://www.figma.com/design/BsfZMYqS7Fqefuauhb6KXh/E-commerce?node-id=0-1&t=QtNUKDd75wvsvYRi-1' },
    ],
  },
];

const skillGroups = [
  { title: 'Front-End', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { title: 'Back-End & Database', items: ['PHP', 'Laravel', 'REST API', 'MySQL', 'Python (Flask)'] },
  { title: 'Tools & Design', items: ['Git & GitHub', 'Figma', 'VS Code', 'Wireframing', 'Prototyping'] },
];

const otherExperience = [
  { role: 'Runway Choreographer', place: '"Wondrous" by Benita Octaviana, The Ritz-Carlton Jakarta', date: 'Jun 2025' },
  { role: 'Design Crew Member', place: 'Indonesia Fashion Week 2025', date: 'May 2025' },
  { role: 'Event Organizer', place: 'Fashion Trunk Show, Cove PIK Jakarta', date: 'Oct - Dec 2024' },
  { role: 'Model', place: 'Modest Fashion Week 2024 & Gebyar UMKM', date: 'Sep - Oct 2024' },
];

const certifications = [
  {
    title: "Certificate of Competence: Junior Web Programmer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi) via LSP Gunadarma University",
    date: "Jul 2026",
    file: "/certificates/bnsp-junior-web-programmer.pdf",
    featured: true,
    note: "National competency certification based on SKKNI standards. Passed all 8 units of competency, including implementing user interfaces, structured programming, data structures, using pre-existing libraries, writing code documentation, and debugging. Valid until July 2029.",
  },
  {
    title: "Sarjana Muda Scientific Paper (Grade A)",
    issuer: "Faculty of Industrial Technology, Gunadarma University",
    date: "Sep 2025",
    file: "https://drive.google.com/file/d/1vYRKdoDruRTxknZLuU_M-fE3xGA8Y4D_/view?usp=sharing",
    featured: true,
    note: "Designed and built a web-based portfolio management information system for Academy Next Top Model using the Waterfall method, from requirements analysis to implementation. Completed the Sarjana Muda level in Informatics with an A grade.",
  },
  { title: "Basic Web Application Development", issuer: "Gunadarma University", date: "May - Jun 2026", file: "/certificates/web-app-development.pdf" },
  { title: "Basic Web Application Design", issuer: "Gunadarma University", date: "Sep 2025", file: "/certificates/web-app-design.pdf" },
  { title: "Interface Design and Prototyping with Figma", issuer: "Gunadarma University", date: "Jan 2026", file: "/certificates/figma-workshop.pdf" },
  { title: "Oracle for Intermediate", issuer: "Gunadarma University", date: "Aug 2025", file: "/certificates/oracle-intermediate.pdf" },
  { title: "Java Programming (J2SE): Intermediate", issuer: "Gunadarma University", date: "Feb 2025", file: "/certificates/java-intermediate.pdf" },
  { title: "Java Programming (J2SE): Beginner", issuer: "Gunadarma University", date: "Feb 2024", file: "/certificates/java-beginner.pdf" },
  { title: "Oracle for Beginner", issuer: "Gunadarma University", date: "Feb 2024", file: "/certificates/oracle-beginner.pdf" },
  { title: "Fundamental Desktop Programming", issuer: "Gunadarma University", date: "Aug 2023", file: "/certificates/desktop-programming.pdf" },
  { title: "Fundamental DBMS", issuer: "Gunadarma University", date: "Feb 2023", file: "/certificates/dbms-fundamental.pdf" },
  { title: "Aptitude Test", issuer: "Gunadarma University", date: "May 2026", file: "/certificates/aptitude-test.pdf" },
];

const card = 'rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8';
const eyebrow = 'text-xs font-medium uppercase tracking-[0.24em] text-blue-200/80';

function SectionHeading({ label, title }) {
  return (
    <div className="mb-8">
      <p className={eyebrow}>{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function ArrowIcon({ direction = 'right', className = 'h-4 w-4' }) {
  const d = {
    right: 'M9 6l6 6-6 6',
    left: 'M15 6l-6 6 6 6',
    up: 'M6 15l6-6 6 6',
    external: 'M7 17L17 7M9 7h8v8',
  }[direction];
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function NazwaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      let current = '';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0f1f] text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-[26rem] w-[26rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 px-4 pt-4 md:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0a0f1f]/80 px-5 py-3 backdrop-blur-xl">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
            Nazwa Audina
          </button>
          <div className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`transition-colors hover:text-white ${activeSection === item.id ? 'text-blue-300' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 font-medium text-[#0a0f1f] transition hover:bg-blue-100">
              Download CV
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="rounded-full p-1 text-white/80 transition hover:text-white lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#0d1325]/95 p-3 backdrop-blur-xl lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-[#0a0f1f]">
              Download CV
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to web developer roles
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Hi, I&apos;m Nazwa Audina.
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-indigo-200 to-white bg-clip-text text-transparent">
                Web Developer.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Informatics Engineering graduate and BNSP-certified Junior Web Programmer. I build websites and admin dashboards with React.js and Laravel, from Figma design to a working application.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => goTo('projects')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition hover:from-blue-500 hover:to-indigo-500">
                View Projects <ArrowIcon />
              </button>
              <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-300/40 hover:bg-white/10">
                Download CV
              </a>
              <a href={`mailto:${EMAIL}`} className="rounded-full px-4 py-3 text-sm font-medium text-white/75 transition hover:text-white">
                Contact me
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <dt className="text-xs text-white/55">Certified</dt>
                <dd className="mt-1 text-sm font-semibold text-white md:text-base">BNSP JWP</dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">GPA</dt>
                <dd className="mt-1 text-sm font-semibold text-white md:text-base">3.57 / 4.00</dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">Currently</dt>
                <dd className="mt-1 text-sm font-semibold text-white md:text-base">Intern @ Telkomsel</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={profilePhoto}
                  alt="Nazwa Audina"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-10 md:px-10">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className={card}>
            <p className={eyebrow}>About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">From design to a working website.</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Web developer with a background in UI/UX design. I turn Figma designs into responsive websites with React.js and Laravel, connect them to MySQL databases, and build admin dashboards so the data is easy to manage.
            </p>
          </div>
          <div className={card}>
            <p className={eyebrow}>Quick Info</p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ['Education', "Bachelor's in Informatics Engineering, Gunadarma University"],
                ['GPA', '3.57 / 4.00'],
                ['Focus', 'Web Development, Front-End, Admin Dashboards'],
                ['Languages', 'Indonesian (Native), English (Intermediate)'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-xs uppercase tracking-[0.18em] text-white/55">{k}</dt>
                  <dd className="mt-2 text-sm leading-6 text-white/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-10 md:px-10">
        <SectionHeading label="Experience" title="Where I've worked" />
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className={card}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">Cloud Team Intern</h3>
                <p className="mt-1 text-white/70">Telkomsel · Jakarta</p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">Jul 2026 - Present</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />Building a daily resource scan for several Huawei Cloud accounts using FunctionGraph, with read-only access between accounts and no Access Keys.</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />Tested permissions with Switch Role, ran Terraform tests to deploy FunctionGraph, and wrote architecture documents for my mentor.</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Huawei Cloud', 'FunctionGraph', 'IAM Agency', 'Terraform'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">{t}</span>
              ))}
            </div>
          </div>
          <div className={card}>
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">Other Experience</h3>
            <ul className="mt-5 space-y-4">
              {otherExperience.map((item) => (
                <li key={item.role + item.date} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium text-white/90">{item.role}</p>
                    <span className="shrink-0 text-xs text-white/50">{item.date}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/60">{item.place}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-16 md:px-10">
        <SectionHeading label="Selected Projects" title="Featured work" />
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={project.title} className={`${card} grid gap-8 md:grid-cols-2 md:items-center`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0f1118]">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="w-full object-cover" />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 font-medium uppercase tracking-[0.14em] text-blue-200">{project.category}</span>
                  <span className="text-white/55">{project.period}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">{project.title}</h3>
                <p className="mt-1 text-sm text-white/60">Role: {project.role}</p>
                <p className="mt-4 text-base leading-7 text-white/75">{project.description}</p>

                {project.stats.length > 0 && (
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-white/10 py-4">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <dd className="text-2xl font-semibold text-white">{s.value}</dd>
                        <dt className="mt-1 text-xs leading-4 text-white/55">{s.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}

                <ul className="mt-5 space-y-2 text-sm leading-7 text-white/75">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">{tool}</span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                        link.primary
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500'
                          : link.award
                            ? 'border border-amber-300/30 bg-amber-400/10 text-amber-100 hover:bg-amber-400/20'
                            : 'border border-white/15 bg-white/5 text-white/85 hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                      <ArrowIcon direction="external" className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills & Education */}
      <section id="skills" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-10 md:px-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className={card}>
            <p className={eyebrow}>Skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tools and capabilities</h2>
            <div className="mt-6 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">{group.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/85">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={card}>
            <p className={eyebrow}>Education</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Gunadarma University</h2>
            <p className="mt-3 text-white/80">Bachelor of Informatics Engineering</p>
            <p className="mt-1 text-sm text-white/60">Aug 2022 - Aug 2026 · GPA 3.57/4.00</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />Thesis: NLP-based chatbot for intent detection (Grade A)</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />Relevant courses: Web Programming, Human-Computer Interaction, Database Systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-16 md:px-10">
        <SectionHeading label="Certifications" title="Training and certificates" />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white/90">{cert.title}</p>
                    <p className="mt-1 text-xs text-white/55">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 text-xs text-white/55">{cert.date}</span>
                </div>
                {cert.note && <p className="mt-3 text-sm leading-6 text-white/70">{cert.note}</p>}
              </>
            );
            const cls = `block rounded-2xl border p-5 text-sm transition ${cert.featured ? 'border-blue-300/30 bg-blue-500/10 md:col-span-2' : 'border-white/10 bg-white/[0.03]'}`;
            return cert.file ? (
              <a key={cert.title} href={cert.file} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-blue-300/40 hover:bg-white/[0.07]`}>
                {inner}
              </a>
            ) : (
              <div key={cert.title} className={cls}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-16 md:px-10">
        <div className="overflow-hidden rounded-[2.4rem] border border-blue-400/15 bg-[linear-gradient(135deg,#0d1730_0%,#0d1b2a_55%,#111a3a_100%)] px-6 py-10 md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="min-w-0">
              <p className={eyebrow}>Contact</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Let&apos;s work together.</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
                I&apos;m open to web developer roles, internships, and freelance projects. The fastest way to reach me is by email.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:from-blue-500 hover:to-indigo-500">
                  Send an email
                </a>
                <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                  Download CV
                </a>
              </div>
            </div>
            <ul className="grid min-w-0 gap-3">
              {[
                ['Email', EMAIL, `mailto:${EMAIL}`],
                ['WhatsApp', '+62 822-9879-5797', 'https://wa.me/6282298795797'],
                ['LinkedIn', 'linkedin.com/in/nazwaaudina', 'https://www.linkedin.com/in/nazwaaudina/'],
                ['GitHub', 'github.com/Nazwadna', 'https://github.com/Nazwadna'],
                ['Location', 'Jakarta, Indonesia', null],
              ].map(([label, value, href]) => {
                const inner = (
                  <>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</span>
                    <span className="flex min-w-0 items-center gap-2 break-all text-sm text-white/90 sm:break-normal">
                      {value}
                      {href && <ArrowIcon direction="external" className="h-3.5 w-3.5 text-white/50" />}
                    </span>
                  </>
                );
                const cls = 'flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4';
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`${cls} transition hover:border-blue-300/40 hover:bg-white/[0.08]`}>
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-8 text-sm text-white/55 md:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nazwa Audina</p>
          <p>Built with React and Tailwind CSS</p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 ${showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        aria-label="Back to top"
      >
        <ArrowIcon direction="up" className="h-5 w-5" />
      </button>
    </main>
  );
}
