import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Certifications from "../components/Certifications";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-6 sm:mb-8 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Remote &amp; Hybrid Full-Stack (MERN) &amp; Odoo ERP roles</span>
          </div>

          {/* Main Headline */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-emerald-500 dark:text-emerald-400 inline-block font-extrabold">
                Berihu Araya
              </span>
            </h1>
            <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 min-h-[44px] flex items-center justify-center">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Odoo ERP Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>
          </div>

          {/* Value Narrative */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            I&apos;m a passionate Full-Stack &amp; Odoo ERP Developer focused on building scalable web applications and customized ERP solutions that help businesses automate workflows and improve productivity.
          </p>

          {/* Side-by-Side Core Capability Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-10 sm:mb-12">
            {/* Card 1: Full-Stack Development */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-xl text-emerald-600 dark:text-emerald-400 flex-shrink-0 shadow-sm">
                  🌐
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Full-Stack Development
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                  <span>Build responsive and scalable web applications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                  <span>Develop modern frontends and robust backend systems</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                  <span>Integrate APIs, databases, and third-party services</span>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {['MERN Stack', 'REST APIs', 'React'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Odoo ERP Development */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-xl text-emerald-600 dark:text-emerald-400 flex-shrink-0 shadow-sm">
                  ⚙️
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Odoo ERP Development
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                  <span>Develop and customize Odoo ERP modules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                  <span>Automate workflows and improve business efficiency</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                  <span>Deliver tailored ERP solutions for real business needs</span>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {['Custom Modules', 'Python', 'Workflows'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Unified Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base shadow-lg shadow-emerald-500/25"
            >
              View Projects
            </button>
            <a
              href="/Berihu_Araya_Resume.pdf"
              download="Berihu_Araya_Resume.pdf"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base shadow-lg shadow-emerald-500/25 inline-flex items-center justify-center gap-2"
            >
              <span>Let&apos;s Connect</span>
              <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Integrated Sections */}
      <section id="about" className="pt-0 md:pt-0">
        <About />
      </section>

      <section id="skills" className="pt-0 md:pt-0">
        <Skills />
      </section>

      <section id="experience" className="pt-0 md:pt-0">
        <Experience />
      </section>

      <section id="projects" className="pt-0 md:pt-0">
        <Projects />
      </section>

      <section id="certifications" className="pt-0 md:pt-0">
        <Certifications />
      </section>

      <Contact />
    </div>
  );
}
