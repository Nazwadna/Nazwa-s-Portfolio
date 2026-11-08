import { useEffect, useRef, useState } from 'react';
import profilePhoto from './assets/hero/profile.jpg';
import laWebsite from './assets/Projects/la.png';
import academyNextTopModel from './assets/Projects/Academy Next Top Model.png';
import levioraFashion from './assets/Projects/Leviora.png';

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
      { label: 'Demo Video', url: '/videos/lenteng-agung-demo.mp4', primary: true },
      { label: 'Live Website', url: 'https://kelurahan-la.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/Nazwadna/kelurahan-la-main' },
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
    compact: true,
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
    compact: true,
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
    compact: true,
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
    period: 'Dec 2024',
    category: 'Human-Computer Interaction Project',
    role: 'UI/UX Designer',
    design: true,
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

const leadership = {
  role: 'Project Manager',
  place: 'Lenteng Agung Urban Village Office · Community Service',
  date: 'Oct 2025 - Jan 2026',
  highlights: [
    'Led a team of 5 to deliver a public service and complaint website with an AI chatbot and an admin dashboard.',
    'Planned the timeline, divided tasks, and tracked progress from requirements to the official handover (BAST, January 2026).',
    'Helped design the UI/UX in Figma. In testing, information access time dropped by 30% and 25+ complaints were sent online.',
  ],
  tags: ['Project Management', 'Team Leadership', 'Figma', 'UI/UX'],
};

const otherExperience = [
  {
    role: 'Runway Choreographer',
    place: '"Wondrous" by Benita Octaviana · The Ritz-Carlton Jakarta',
    date: 'Jun 2025',
    highlights: [
      'Choreographed the runway for a designer fashion show.',
      'Set the walking patterns, formations, and timing so the show ran in sync with the music.',
    ],
  },
  {
    role: 'Design Crew Member',
    place: 'Academy Next Top Model · Indonesia Fashion Week 2025',
    date: 'May 2025',
    highlights: [
      'Joined the design crew for the academy show at Indonesia Fashion Week.',
      'Helped prepare the looks and supported the team backstage so every model was ready on time.',
    ],
  },
  {
    role: 'Event Organizer',
    place: 'B1 Management · Fashion Trunk Show, Cove PIK Jakarta',
    date: 'Oct - Dec 2024',
    highlights: [
      'Organized a fashion trunk show from planning to show day.',
      'Coordinated the schedule, models, and vendors over three months.',
    ],
  },
  {
    role: 'Runway Model',
    place: 'Modest Fashion Week 2024 · Gebyar UMKM (DPR RI x Harry Ryan Designer)',
    date: 'Sep - Oct 2024',
    highlights: [
      'Walked the runway at Modest Fashion Week 2024.',
      'Modeled for Harry Ryan Designer at Gebyar UMKM, an event that showcased local small businesses.',
    ],
  },
];

const certifications = [
  {
    title: 'Certificate of Competence: Junior Web Programmer',
    issuer: 'BNSP (Badan Nasional Sertifikasi Profesi) via LSP Gunadarma University',
    date: 'Jul 2026',
    file: '/certificates/bnsp-junior-web-programmer.pdf',
    preview: 'bnsp-junior-web-programmer',
    featured: true,
    note: 'National competency certification based on SKKNI standards. Passed all 8 units of competency, including implementing user interfaces, structured programming, data structures, using pre-existing libraries, writing code documentation, and debugging. Valid until July 2029.',
  },
  { title: 'EF SET English Certificate: 87/100 (C2 Proficient)', issuer: 'EF SET', date: 'Jul 2026', file: 'https://cert.efset.org/id/WDwj9u', preview: 'ef-set' },
  { title: 'Basic Web Application Development', issuer: 'Gunadarma University', date: 'Jun 2026', file: '/certificates/web-app-development.pdf', preview: 'web-app-development' },
  { title: 'Aptitude Test', issuer: 'Gunadarma University', date: 'May 2026', file: '/certificates/aptitude-test.pdf', preview: 'aptitude-test' },
  { title: 'Interface Design and Prototyping with Figma', issuer: 'Gunadarma University', date: 'Jan 2026', file: '/certificates/figma-workshop.pdf', preview: 'figma-workshop' },
  { title: 'Basic Web Application Design', issuer: 'Gunadarma University', date: 'Sep 2025', file: '/certificates/web-app-design.pdf', preview: 'web-app-design' },
  { title: 'Oracle for Intermediate', issuer: 'Gunadarma University', date: 'Aug 2025', file: '/certificates/oracle-intermediate.pdf', preview: 'oracle-intermediate' },
  { title: 'Java Programming (J2SE): Intermediate', issuer: 'Gunadarma University', date: 'Feb 2025', file: '/certificates/java-intermediate.pdf', preview: 'java-intermediate' },
  { title: 'Java Programming (J2SE): Beginner', issuer: 'Gunadarma University', date: 'Feb 2024', file: '/certificates/java-beginner.pdf', preview: 'java-beginner' },
  { title: 'Oracle for Beginner', issuer: 'Gunadarma University', date: 'Feb 2024', file: '/certificates/oracle-beginner.pdf', preview: 'oracle-beginner' },
  { title: 'Fundamental Desktop Programming', issuer: 'Gunadarma University', date: 'Aug 2023', file: '/certificates/desktop-programming.pdf', preview: 'desktop-programming' },
  { title: 'Fundamental DBMS', issuer: 'Gunadarma University', date: 'Feb 2023', file: '/certificates/dbms-fundamental.pdf', preview: 'dbms-fundamental' },
];

const card = 'rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8';
const eyebrow = 'text-xs font-medium uppercase tracking-[0.24em] text-blue-200/80';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({ value }) {
  const match = /^([0-9]+(?:\.[0-9]+)?)(.*)$/.exec(value);
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);
  useEffect(() => {
    if (!match || !inView) return;
    const target = parseFloat(match[1]);
    const decimals = (match[1].split('.')[1] || '').length;
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${(target * eased).toFixed(decimals)}${match[2]}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);
  return <span ref={ref}>{display}</span>;
}

const techFilters = ['All', 'Laravel', 'React.js', 'PHP', 'MySQL', 'Tailwind CSS', 'Figma'];

function SectionHeading({ label, title }) {
  return (
    <Reveal className="mb-8">
      <p className={eyebrow}>{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    </Reveal>
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
  const [progress, setProgress] = useState(0);
  const [techFilter, setTechFilter] = useState('All');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [toast, setToast] = useState('');

  const matchesFilter = (project) => techFilter === 'All' || project.tools.includes(techFilter);
  const featuredProjects = projects.filter((p) => !p.compact && !p.design && matchesFilter(p));
  const compactProjects = projects.filter((p) => p.compact && matchesFilter(p));
  const designProjects = projects.filter((p) => p.design && matchesFilter(p));
  const visibleCount = featuredProjects.length + compactProjects.length + designProjects.length;

  const featuredCerts = certifications.filter((c) => c.featured);
  const otherCerts = certifications.filter((c) => !c.featured);
  const shownCerts = [...featuredCerts, ...(showAllCerts ? otherCerts : otherCerts.slice(0, 6))];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast('Email copied to clipboard');
    } catch {
      setToast(EMAIL);
    }
    setTimeout(() => setToast(''), 2200);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
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

  const renderFeatured = (project, index) => (
            <Reveal key={project.title}>
            <article className={`${card} grid gap-8 md:grid-cols-2 md:items-center`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0f1118]">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
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
                        <dd className="text-2xl font-semibold text-white"><CountUp value={s.value} /></dd>
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
            </Reveal>
  );

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#0a0f1f] text-white">
      <div className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-400" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-[#111a33] px-5 py-3 text-sm text-white shadow-xl transition-all duration-300 ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        {toast}
      </div>
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
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-300" />
              Profile &amp; Biography
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
        <Reveal><div className="grid gap-6 md:grid-cols-[1fr_1fr]">
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
        </div></Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-10 md:px-10">
        <SectionHeading label="Experience" title="Where I've worked" />
        <Reveal><div className="grid gap-6">
          <div className={card}>
            <p className={eyebrow}>Work Experience</p>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
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
        </div></Reveal>

        <Reveal><div className="mt-12">
          <p className={eyebrow}>Leadership &amp; Organization</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">Beyond code</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className={`${card} border-blue-300/25 bg-blue-500/[0.07] md:col-span-2`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-semibold">{leadership.role}</h4>
                  <p className="mt-1 text-sm text-white/70">{leadership.place}</p>
                </div>
                <span className="rounded-full border border-blue-300/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-100">{leadership.date}</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
                {leadership.highlights.map((h) => (
                  <li key={h} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{h}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {leadership.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">{t}</span>
                ))}
              </div>
            </article>
            {otherExperience.map((item) => (
              <article key={item.role + item.date} className={card}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold">{item.role}</h4>
                    <p className="mt-1 text-xs leading-5 text-white/60">{item.place}</p>
                  </div>
                  <span className="shrink-0 text-xs text-white/50">{item.date}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div></Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-16 md:px-10">
        <SectionHeading label="Selected Projects" title="Featured work" />
        <div className="-mt-2 mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by technology">
          <span className="mr-1 text-xs uppercase tracking-[0.18em] text-white/55">Filter</span>
          {techFilters.map((tech) => (
            <button
              key={tech}
              onClick={() => setTechFilter(tech)}
              aria-pressed={techFilter === tech}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${techFilter === tech ? 'border-blue-400/60 bg-blue-500/20 text-white' : 'border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'}`}
            >
              {tech}
            </button>
          ))}
          <span className="ml-auto text-xs text-white/55">{visibleCount} project{visibleCount === 1 ? '' : 's'}</span>
        </div>

        {featuredProjects.length > 0 && (
          <div className="space-y-8">
            {featuredProjects.map((project, index) => renderFeatured(project, index))}
          </div>
        )}

        {compactProjects.length > 0 && <h3 className="mb-5 mt-14 text-xl font-semibold">More projects</h3>}
        <div className="grid gap-5 md:grid-cols-3">
          {compactProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100} className="flex">
            <article className="flex w-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 font-medium uppercase tracking-[0.12em] text-blue-200">{project.category}</span>
                <span className="text-white/55">{project.period}</span>
              </div>
              <h4 className="mt-4 text-xl font-semibold">{project.title}</h4>
              <p className="mt-1 text-sm text-white/60">{project.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-white/75">{project.description}</p>
              {project.stats.length > 0 && (
                <dl className="mt-4 flex gap-6">
                  {project.stats.map((st) => (
                    <div key={st.label}>
                      <dd className="text-xl font-semibold"><CountUp value={st.value} /></dd>
                      <dt className="text-xs text-white/55">{st.label}</dt>
                    </div>
                  ))}
                </dl>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">{tool}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${link.primary ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500' : 'border border-white/15 bg-white/5 text-white/85 hover:bg-white/10'}`}>
                    {link.label}
                    <ArrowIcon direction="external" className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        {designProjects.length > 0 && (
          <>
            <h3 className="mb-5 mt-14 text-xl font-semibold">UI/UX design</h3>
            <div className="space-y-8">
              {designProjects.map((project, index) => renderFeatured(project, index))}
            </div>
          </>
        )}

        {visibleCount === 0 && (
          <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white/70">No projects use {techFilter} yet.</p>
        )}
      </section>

      {/* Skills & Education */}
      <section id="skills" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-10 md:px-10">
        <Reveal><div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className={card}>
            <p className={eyebrow}>Skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tools and capabilities</h2>
            <p className="mt-2 text-sm text-white/60">Tip: click a highlighted skill to see the projects that use it.</p>
            <div className="mt-6 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">{group.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) =>
                      techFilters.includes(skill) ? (
                        <button
                          key={skill}
                          onClick={() => {
                            setTechFilter(skill);
                            goTo('projects');
                          }}
                          title={`Show projects built with ${skill}`}
                          className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 text-sm text-white/90 transition hover:border-blue-300/60 hover:bg-blue-500/20"
                        >
                          {skill}
                        </button>
                      ) : (
                        <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/85">{skill}</span>
                      )
                    )}
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
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" /><span>Sarjana Muda scientific paper (Grade A, Sep 2025): a web-based portfolio management information system for Academy Next Top Model, built with the Waterfall method.{' '}<a href="https://drive.google.com/file/d/1vYRKdoDruRTxknZLuU_M-fE3xGA8Y4D_/view?usp=sharing" target="_blank" rel="noreferrer" className="whitespace-nowrap font-medium text-blue-300 underline-offset-4 hover:underline">View certificate ↗</a></span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />Relevant courses: Web Programming, Human-Computer Interaction, Database Systems</li>
            </ul>
          </div>
        </div></Reveal>
      </section>

      {/* Certifications */}
      <section id="certifications" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-16 md:px-10">
        <SectionHeading label="Certifications" title="Training and certificates" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shownCerts.map((cert) => (
            <a
              key={cert.title}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border transition hover:-translate-y-0.5 hover:border-blue-300/40 ${cert.featured ? 'border-blue-300/30 bg-blue-500/10 sm:col-span-2 lg:col-span-3 md:flex-row' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'}`}
            >
              <div className={`relative shrink-0 overflow-hidden bg-white/90 ${cert.featured ? 'aspect-[4/3] md:aspect-auto md:min-h-[240px] md:w-72' : 'aspect-[4/3]'}`}>
                <img
                  src={`/certificates/previews/${cert.preview}.webp`}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium text-blue-200/80">{cert.date}</span>
                <p className="mt-2 font-medium leading-6 text-white/90">{cert.title}</p>
                <p className="mt-1 text-xs text-white/55">{cert.issuer}</p>
                {cert.note && <p className="mt-3 text-sm leading-6 text-white/70">{cert.note}</p>}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-blue-300">
                  View certificate <ArrowIcon direction="external" className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
        {otherCerts.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllCerts((v) => !v)}
              aria-expanded={showAllCerts}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              {showAllCerts ? 'Show fewer' : `Show all ${certifications.length} certificates`}
            </button>
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-16 md:px-10">
        <Reveal><div className="overflow-hidden rounded-[2.4rem] border border-blue-400/15 bg-[linear-gradient(135deg,#0d1730_0%,#0d1b2a_55%,#111a3a_100%)] px-6 py-10 md:px-12 md:py-14">
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
                <button onClick={copyEmail} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                  Copy email
                </button>
                <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-3 text-sm font-medium text-white/75 transition hover:text-white">
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
        </div></Reveal>
      </section>

      <footer className="relative mt-8 border-t border-white/10 bg-[#070b17]/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">Nazwa Audina</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
              Web Developer and BNSP-certified Junior Web Programmer, building clean and useful websites with Laravel, React.js, and MySQL.
            </p>
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10">
              Download CV <ArrowIcon direction="external" className="h-3.5 w-3.5" />
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => goTo(item.id)} className="text-white/70 transition hover:text-white">{item.label}</button>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Connect</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ['Email', `mailto:${EMAIL}`],
                ['WhatsApp', 'https://wa.me/6282298795797'],
                ['LinkedIn', 'https://www.linkedin.com/in/nazwaaudina/'],
                ['GitHub', 'https://github.com/Nazwadna'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/70 transition hover:text-white">
                    {label} <ArrowIcon direction="external" className="h-3 w-3 text-white/40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/45 md:px-10">
            <p>© 2026 Nazwa Audina. All rights reserved.</p>
          </div>
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
