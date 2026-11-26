import { useEffect, useRef, useState } from "react";

export default function About() {
  const imageRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const [visibleBlocks, setVisibleBlocks] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBlocks((current) => ({ ...current, [entry.target.dataset.reveal]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    [imageRef, aboutRef, educationRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const revealClass = (name, direction) =>
    `about-reveal about-reveal-${direction} ${visibleBlocks[name] ? "is-visible" : ""}`;

  return (
    <section className="section-padding max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-14">
        <div className="badge-brand mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Engineering Profile &amp; Background
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] md:gap-12">
        {/* Profile Image & Quick Metrics */}
        <div ref={imageRef} data-reveal="image" className={`${revealClass("image", "image")} space-y-6`}>
          <div className="glass-card overflow-hidden rounded-3xl p-3 relative group">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
              <img
                src="/me.png"
                alt="Berihu Araya Gebrihans"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Status Pill on Top */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono font-medium text-emerald-400 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Software Engineer</span>
              </div>

              {/* Identity Glass Card */}
              <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 text-white shadow-xl">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-bold text-base sm:text-lg text-white tracking-tight">
                      Berihu Araya Gebrihans
                    </p>
                    <p className="text-xs text-emerald-400 font-mono font-medium">
                      Full-Stack (MERN) &amp; Odoo ERP Engineer
                    </p>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative flex-shrink-0" title="Available">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic & Professional Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl glass-card text-center border border-slate-200 dark:border-slate-800">
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                3.91<span className="text-sm font-sans text-slate-500">/4.00</span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold tracking-wider font-mono">
                B.Sc. CSE GPA (MIT)
              </p>
            </div>
            <div className="p-4 rounded-2xl glass-card text-center border border-slate-200 dark:border-slate-800">
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                81<span className="text-sm font-sans text-slate-500">/100</span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold tracking-wider font-mono">
                National Exit Exam
              </p>
            </div>
          </div>
        </div>

        {/* Content & Education */}
        <div className="space-y-6">
          {/* Executive Bio */}
          <div
            ref={aboutRef}
            data-reveal="about"
            className={`${revealClass("about", "content")} glass-card rounded-3xl p-6 md:p-8`}
          >
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white md:mb-4 md:text-2xl">
              Software Engineer &amp; ERP Architect
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base mb-4">
              I am a Software Engineer with <strong>3+ years of experience</strong> in modern web development using the <strong>MERN Stack</strong>, and <strong>2+ years specializing in Odoo ERP development and customization</strong>. I have delivered enterprise solutions at <strong>Niyat Consultancy PLC</strong> and backend services at the <strong>Tigray Investment Bureau</strong>.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
              My engineering focus centers on backend architecture, database modeling (PostgreSQL &amp; MongoDB), RESTful API engineering, caching with Redis, and business process automation. I bridge business operational needs with scalable, clean, and maintainable software engineering solutions.
            </p>
          </div>

          {/* Education & Academic Excellence */}
          <div
            ref={educationRef}
            data-reveal="education"
            className={`${revealClass("education", "education")} glass-card rounded-3xl p-6 md:p-8`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    Mekelle University / Mekelle Institute of Technology (MIT)
                  </h3>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-md border border-emerald-200 dark:border-emerald-800">
                    2018 – 2025
                  </span>
                </div>
                <p className="mt-1 text-sm md:text-base font-semibold text-emerald-600 dark:text-emerald-400">
                  Bachelor of Science in Computer Science and Engineering
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border border-slate-200 dark:border-slate-700">
                    Cumulative GPA: 3.91 / 4.00
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border border-slate-200 dark:border-slate-700">
                    National Exit Exam: 81 / 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
