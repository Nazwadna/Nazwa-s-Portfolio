// import heroImage from './assets/hero-image.jpg'; // Uncomment after adding your image
// import lentengAgungWebsite from './assets/lenteng-agung-website.png'; // Uncomment after adding your image
import { useEffect, useState } from 'react';
import hero1 from './assets/hero/hero1.jpg';
import hero2 from './assets/hero/hero2.jpg';
import hero3 from './assets/hero/hero3.jpg';

export default function NazwaPortfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const heroImages = [hero1, hero2, hero3];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const projects = [
    {
      title: "Public Service and Complaint Website",
      subtitle: "Lenteng Agung Urban Village Office",
      period: "2025 — 2026",
      category: "Community Service Project",
      tools: ["Figma", "React.js", "Vite", "PHP", "MySQL"],
      description:
        "A public service and complaint platform designed to improve access to information, simplify complaint submissions, and support residents through a cleaner digital experience.",
      results: ["30% faster information access", "25+ online complaints submitted"],
      highlights: [
        "Led project planning, task allocation, and implementation as project manager.",
        "Designed an AI chatbot-assisted service flow for residents.",
        "Restructured navigation and page hierarchy for better usability.",
      ],
    },
    {
      title: "Academy Next Top Model Website",
      subtitle: "Modeling Academy Platform",
      period: "2025",
      category: "Academic Project",
      tools: ["Figma", "HTML", "CSS", "JavaScript", "Laravel"],
      description:
        "A responsive website concept for a modeling academy with a modern fashion-forward feel, focused on clear navigation, strong visual hierarchy, and an intuitive registration journey.",
      results: ["10+ UI screens", "Responsive design implementation"],
      highlights: [
        "Created homepage, gallery, program pages, and registration flow.",
        "Mapped user flow for exploring programs and applying online.",
        "Translated the design into a functional web implementation.",
      ],
    },
    {
      title: "Library Management System",
      subtitle: "Web-Based Academic System",
      period: "2024 — 2025",
      category: "Web Programming Practicum",
      tools: ["React.js", "PHP", "MySQL"],
      description:
        "A web-based library management system designed for operational efficiency, role-based access, and smoother catalog and borrowing workflows.",
      results: ["50+ simulated transactions", "100+ book records managed"],
      highlights: [
        "Built role-based interfaces for users and administrators.",
        "Implemented search, catalog, and borrowing flows.",
        "Improved usability through clearer information structure.",
      ],
    },
    {
      title: "Leviora Fashion E-Commerce",
      subtitle: "High-Fidelity UI Prototype",
      period: "2024",
      category: "Human-Computer Interaction Project",
      tools: ["Figma"],
      description:
        "A fashion e-commerce prototype focused on product discovery, elegant visual presentation, and seamless core shopping interactions.",
      results: ["12+ high-fidelity screens", "4 core user flows"],
      highlights: [
        "Designed interactive high-fidelity screens in Figma.",
        "Mapped browsing, product details, cart, and checkout flow.",
        "Focused on a modern and engaging shopping experience.",
      ],
    },
    {
      title: "Jewepe Weeding Platform",
      subtitle: "Wedding Management System",
      period: "2024",
      category: "Web Development Project",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: jewepeWeeding,
      figmaLink: "https://www.figma.com/design/1I9dKA2TFo5WBvxyHCTM3W/Wedding-Organizer-JeWePe?node-id=0-1&t=g1wjmtZ2Nyk8GkFa-1",
      githubLink: "https://github.com/Nazwadna/jwp_wedding.git",
      livePreviewLink: "https://www.figma.com/proto/1I9dKA2TFo5WBvxyHCTM3W/Wedding-Organizer-JeWePe?node-id=0-1&t=g1wjmtZ2Nyk8GkFa-1",
      description:
        "A comprehensive wedding management platform designed to streamline wedding planning processes, vendor management, and event coordination for couples and wedding organizers.",
      results: ["Complete vendor management system", "Event scheduling features"],
      highlights: [
        "Developed full-stack wedding management solution.",
        "Implemented vendor booking and payment systems.",
        "Created user-friendly dashboard for wedding planning.",
      ],
    },
    {
      title: "Perpus GAS",
      subtitle: "Digital Library Management System",
      period: "2024",
      category: "Academic Project",
      tools: ["React.js", "Node.js", "MongoDB", "Express"],
      image: perpusGas,
      figmaLink: null,
      githubLink: "https://github.com/Nazwadna/perpusgas.git",
      livePreviewLink: null,
      description:
        "A modern digital library management system designed to improve book cataloging, borrowing processes, and user experience for educational institutions.",
      results: ["500+ books cataloged", "Streamlined borrowing process"],
      highlights: [
        "Built responsive library interface with React.",
        "Implemented real-time book availability tracking.",
        "Created admin dashboard for library management.",
      ],
    },
    {
      title: "Preloved Marketplace",
      subtitle: "Second-Hand E-Commerce Platform",
      period: "2024",
      category: "E-Commerce Project",
      tools: ["React.js", "Tailwind CSS", "Firebase", "Stripe API"],
      image: preloved,
      figmaLink: null,
      githubLink: "https://github.com/Nazwadna/preloved.git",
      livePreviewLink: null,
      description:
        "A user-friendly marketplace platform for buying and selling pre-owned items, featuring secure payments, user verification, and comprehensive search functionality.",
      results: ["100+ active listings", "Secure payment integration"],
      highlights: [
        "Developed full e-commerce platform with React.",
        "Integrated Stripe API for secure payments.",
        "Implemented advanced search and filtering system.",
      ],
    },
  ];

  const skills = [
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "High-Fidelity Mockups",
    "User Flows",
    "Usability Testing",
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "PHP",
    "MySQL",
    "GitHub",
    "Notion",
    "Canva",
  ];

  const certifications = [
    "Interface Design and Prototyping with Figma",
    "Junior Web Programmer Certification",
    "Java Programming (J2SE): Beginner and Intermediate",
    "Oracle for Beginners",
    "Fundamental Desktop Programming",
    "Fundamentals of Database Management Systems (DBMS)",
  ];

  const experience = [
    "Choreographer — Wondrous by Benita Octaviana",
    "Design Crew Member — Indonesia Fashion Week 2025",
    "Event Organizer — Fashion Trunk Show",
    "Model — Modest Fashion Week 2024",
    "Model — Gebyar UMKM Event",
  ];

  return (
    <main className="min-h-screen bg-[#07080d] text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[18%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-10">
        <nav className={`mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Nazwa Audina</div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6v12M4 6h16" />
            </svg>
          </button>
          <div className="hidden gap-6 text-sm text-white/60 md:flex">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-200 ${activeSection === 'about' ? 'text-cyan-300' : 'hover:text-white'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-200 ${activeSection === 'projects' ? 'text-cyan-300' : 'hover:text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-colors duration-200 ${activeSection === 'skills' ? 'text-cyan-300' : 'hover:text-white'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-200 ${activeSection === 'contact' ? 'text-cyan-300' : 'hover:text-white'}`}
            >
              Contact
            </button>
          </div>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
              Creative Portfolio
            </p>
            <h1 className="max-w-3xl text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
              Nazwa's Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Informatics Engineering student with hands-on experience in UI/UX design, prototyping, and digital product development. I create interfaces that feel modern, structured, and visually memorable while staying intuitive for users.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Jakarta, Indonesia</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Figma • Web Design • Prototyping</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Informatics Engineering Student</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="group rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(6,182,212,0.45)] hover:from-cyan-400 hover:to-blue-400 inline-block">
                View Projects
              </a>
              <a href="#contact" className="group rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition-all duration-300 hover:bg-white/10 hover:border-cyan-300/30 hover:text-cyan-200 hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] inline-block">
                Contact
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-dashed border-white/15 bg-[#0f1118] p-4">
                <div className="relative">
                <img 
                  src={heroImages[currentImageIndex]} 
                  alt="Nazwa Audina - Portfolio Hero" 
                  className="h-full w-full object-cover rounded-[1.3rem]"
                />
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition"
                  aria-label="Previous image"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7m0 0l7 7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition"
                  aria-label="Next image"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full transition ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-200/80">About</p>
            <h2 className="mt-3 text-3xl font-semibold">A mix of visual style, structure, and usability.</h2>
            <p className="mt-4 text-sm leading-8 text-white/65">
              I enjoy building interfaces that are polished, engaging, and still practical for real users. My work combines wireframing, user flow mapping, prototyping, and front-end implementation for academic and community-based digital products.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#151826] to-[#0d1018] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.26)]">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/70">Quick Info</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">Education</p>
                <p className="mt-2 text-sm leading-7 text-white/85">Bachelor's Degree in Informatics Engineering, Gunadarma University</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">GPA</p>
                <p className="mt-2 text-sm leading-7 text-white/85">3.62 / 4.00</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">Focus</p>
                <p className="mt-2 text-sm leading-7 text-white/85">UI/UX, Prototyping, Front-End, Digital Product Design</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">Language</p>
                <p className="mt-2 text-sm leading-7 text-white/85">Indonesian (Native), English (Intermediate)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-200/75">Selected Projects</p>
            <h2 className="mt-3 text-4xl font-semibold">Featured work</h2>
          </div>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl md:grid-cols-2 md:p-8"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="rounded-[1.75rem] border border-dashed border-white/15 bg-[#0f1118] p-4">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.subtitle}`} 
                      className="h-full w-full object-cover rounded-[1.4rem]"
                    />
                  ) : (
                    <div className="flex h-[460px] items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#161926] via-[#121621] to-[#0d1018] text-center text-white/40">
                      <div>
                        <p className="text-lg font-medium text-white/75">🚀 Code Project</p>
                        <p className="mt-2 text-sm">View on GitHub for full implementation</p>
                        <p className="mt-1 text-xs text-white/40">Backend & Frontend Development</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-between`}>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                      {project.category}
                    </span>
                    <span className="text-sm text-white/50">{project.period}</span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">{project.title}</h3>
                  <p className="mt-2 text-base text-white/60">{project.subtitle}</p>
                  <p className="mt-5 text-sm leading-8 text-white/65">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.results.map((result) => (
                      <div key={result} className="rounded-[1.25rem] border border-white/8 bg-gradient-to-br from-white/8 to-white/4 px-4 py-4 text-sm text-white/80">
                        {result}
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-white/65">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.figmaLink && (
                    <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="group rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm text-white shadow-[0_10px_25px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(6,182,212,0.35)] hover:from-cyan-400 hover:to-blue-400 inline-block">Figma Link</a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="group rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:bg-white/10 hover:border-cyan-300/30 hover:text-cyan-200 hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] inline-block">GitHub Link</a>
                  )}
                  {project.livePreviewLink && (
                    <a href={project.livePreviewLink} target="_blank" rel="noopener noreferrer" className="group rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:bg-white/10 hover:border-purple-300/30 hover:text-purple-200 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)] inline-block">Live Preview</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-4 md:px-10">
        <div className="grid gap-6 md:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-200/80">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold">Tools and capabilities</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/70">Education</p>
            <h2 className="mt-3 text-3xl font-semibold">Academic background</h2>
            <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-[#11141d] p-5">
              <p className="text-lg font-medium text-white">Gunadarma University</p>
              <p className="mt-2 text-sm text-white/60">Bachelor's Degree in Informatics Engineering</p>
              <p className="mt-1 text-sm text-white/60">Aug 2022 — Present</p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Relevant coursework includes Human–Computer Interaction, Interface Design and Prototyping, Database Management Systems, Artificial Intelligence, and Web Programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#151826] to-[#0d1018] p-7 shadow-[0_18px_40px rgba(0,0,0,0.24)]">
            <p className="text-sm uppercase tracking-[0.22em] text-violet-200/70">Certifications</p>
            <div className="mt-5 space-y-3">
              <a href="/certificates/figma-workshop.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85 block hover:bg-white/10 transition">
                Interface Design and Prototyping with Figma
              </a>
              <div className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85">
                Junior Web Programmer Certification
              </div>
              <a href="/certificates/java-beginner.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85 block hover:bg-white/10 transition">
                Java Programming (J2SE): Beginner
              </a>
              <a href="/certificates/java-intermediate.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85 block hover:bg-white/10 transition">
                Java Programming (J2SE): Intermediate
              </a>
              <a href="/certificates/oracle-beginner.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85 block hover:bg-white/10 transition">
                Oracle for Beginners
              </a>
              <a href="/certificates/desktop-programming.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85 block hover:bg-white/10 transition">
                Fundamental Desktop Programming
              </a>
              <a href="/certificates/dbms-fundamental.pdf" target="_blank" rel="noopener noreferrer" className="rounded-[1.25rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-white/85 block hover:bg-white/10 transition">
                Fundamentals of Database Management Systems (DBMS)
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-200/75">Creative Experience</p>
            <div className="mt-5 space-y-3">
              {experience.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/8 bg-[#11141d] px-4 py-4 text-sm leading-7 text-white/70">
                  {item}
                </div>
              ))}
                          </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-[2.4rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_25%),linear-gradient(135deg,#0c1020_0%,#0a0d16_55%,#090b12_100%)] px-8 py-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/75">Contact</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Let&apos;s Work
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent pb-4">
                  Together
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                Open to collaborations, freelance projects, and full-time opportunities.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:nazwa.audina64@gmail.com"
                  className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/8 hover:shadow-[0_12px_35px_rgba(6,182,212,0.20)] hover:-translate-y-[-2px]"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45 group-hover:text-cyan-200/75 transition-colors">Email</p>
                  <p className="mt-3 text-lg font-medium text-white group-hover:text-cyan-100 transition-colors">nazwa.audina64@gmail.com</p>
                  <p className="mt-2 text-sm text-white/45 group-hover:text-cyan-200/75 transition-colors">Send a message ↗</p>
                </a>

                <a
                  href="tel:+6282298795797"
                  className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-green-300/30 hover:bg-white/8 hover:shadow-[0_12px_35px_rgba(34,197,94,0.20)] hover:-translate-y-[-2px]"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45 group-hover:text-green-200/75 transition-colors">Phone</p>
                  <p className="mt-3 text-lg font-medium text-white group-hover:text-green-100 transition-colors">+62 822-9879-5797</p>
                  <p className="mt-2 text-sm text-white/45 group-hover:text-green-200/75 transition-colors">Call or WhatsApp ↗</p>
                </a>
              </div>

              <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Location</p>
                <p className="mt-3 text-lg font-medium text-white">East Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
                  <div className="flex items-center justify-center">
                    <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-white p-2 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
                      <img
                        src={linktreeQr}
                        alt="Linktree QR Code"
                        className="h-full w-full object-contain rounded-[1rem]"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">Quick Access</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Scan to open my Linktree</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">
                      Access my curated links, portfolio references, and social profiles instantly.
                    </p>
                    <a
                      href="https://linktr.ee/nazwaadna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(56,189,248,0.35)] hover:from-cyan-400 hover:to-violet-400"
                    >
                      Open Linktree ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Social & Links</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://linkedin.com/in/nazwaaudina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[1.2rem] border border-white/10 bg-[#0d1324] px-4 py-4 text-sm text-white/82 transition-all duration-300 hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-blue-200 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] hover:-translate-y-[-1px]"
                  >
                    linkedin.com/in/nazwaaudina
                  </a>

                  <a
                    href="https://github.com/Nazwadna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[1.2rem] border border-white/10 bg-[#0d1324] px-4 py-4 text-sm text-white/82 transition-all duration-300 hover:border-gray-300/30 hover:bg-gray-500/10 hover:text-gray-200 hover:shadow-[0_8px_25px_rgba(107,114,128,0.15)] hover:-translate-y-[-1px]"
                  >
                    github.com/Nazwadna
                  </a>

                  <a
                    href="https://linktr.ee/nazwaadna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[1.2rem] border border-white/10 bg-[#0d1324] px-4 py-4 text-sm text-white/82 transition-all duration-300 hover:border-violet-300/30 hover:bg-violet-500/10 hover:text-violet-200 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)] hover:-translate-y-[-1px] sm:col-span-2"
                  >
                    linktr.ee/nazwaadna
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white shadow-[0_12px_30px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_15px_40px_rgba(6,182,212,0.45)] hover:from-cyan-400 hover:to-blue-400"
        aria-label="Scroll to top"
      >
        <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}
