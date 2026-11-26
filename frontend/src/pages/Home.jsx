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
      <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-6 sm:mb-8 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Enterprise ERP &amp; Full-Stack Software Engineering Roles</span>
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
                  "Enterprise Odoo ERP Developer",
                  "Full-Stack Software Engineer",
                  "Distributed Backend Architect",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={35}
                delaySpeed={2200}
              />
            </div>
          </div>

          {/* Value Narrative */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Software Engineer specializing in <strong>Odoo ERP architecture</strong> and modern <strong>MERN stack engineering</strong>. Experienced in designing resilient business modules, automating high-throughput workflows, and building scalable distributed web backends.
          </p>

          {/* Unified Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base shadow-lg shadow-emerald-500/25"
            >
              Explore Architecture &amp; Projects
            </button>
            <a
              href="/Berihu_Araya_CV.pdf"
              download="Berihu_Araya_Gebrihans_CV.pdf"
              className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-base inline-flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-base inline-flex items-center justify-center gap-2"
            >
              <span>Let&apos;s Connect</span>
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
