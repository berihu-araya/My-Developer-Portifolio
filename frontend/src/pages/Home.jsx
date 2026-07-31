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
  }, [location]);// this is dependency array, it means that the effect will run whenever the location changes. This is important because we want to scroll to the correct section whenever the user navigates to a different route or clicks on a link that changes the URL hash.

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });// the block: 'start' option ensures that the top of the section aligns with the top of the viewport when scrolled into view.
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  };

  return (
    <div>
      <section id="home" className="bg-gradient-to-br from-white to-slate-50 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 dark:from-slate-950 dark:to-slate-900 text-center fade-in min-h-screen flex items-start">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="glass-effect rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-2xl shadow-slate-200/60 dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-black/20 sm:p-8 md:p-10 lg:p-12">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700 shadow-sm dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 sm:text-base">
  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-blue-500"></span>

  <Typewriter
    words={[
      "Full-Stack Developer",
      "Odoo ERP Developer",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1800}
  />
</div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white mb-3 md:mb-4">
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">Berihu Araya</span>
            </h1>

            <p className="mx-auto mb-6 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a passionate Full-Stack & Odoo ERP Developer focused on building scalable web applications and customized ERP solutions that help businesses automate workflows and improve productivity.
            </p>

            <div className="mx-auto mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-xl">🌐</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Full-Stack Development</h3>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  <li>• Build responsive and scalable web applications</li>
                  <li>• Develop modern frontends and robust backend systems</li>
                  <li>• Integrate APIs, databases, and third-party services</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-xl">⚙️</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Odoo ERP Development</h3>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  <li>• Develop and customize Odoo ERP modules</li>
                  <li>• Automate workflows and improve business efficiency</li>
                  <li>• Deliver tailored ERP solutions for real business needs</li>
                </ul>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">📍 Remote & On-site</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">⚡ Full-Stack & Odoo ERP Solutions</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
              <button onClick={() => scrollToSection('projects')} className="btn-primary hover-lift text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-8">
                View Projects
              </button>
              <a
                href="/Berihu_Araya_Resume.pdf"
                download="Berihu_Araya_Resume.pdf"
                className="btn-primary hover-glow inline-flex items-center justify-center text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">📄</span>
                Download Resume
              </a>
              <button onClick={() => scrollToSection('contact')} className="btn-primary hover-glow text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-8">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

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
