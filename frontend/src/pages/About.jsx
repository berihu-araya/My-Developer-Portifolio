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
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] md:gap-12">
        {/* Profile Image */}
        <div ref={imageRef} data-reveal="image" className={revealClass("image", "image")}>
          <div className="glass-card overflow-hidden rounded-2xl p-3 relative group">
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900 shadow-lg">
              <img
                src="/me.png"
                alt="Berihu Araya"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle bottom gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Status Pill on Top */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono font-medium text-emerald-400 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Software Engineer</span>
              </div>

              {/* Name & Title Overlay Glass Card */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-white shadow-xl transition-all duration-300 group-hover:border-emerald-500/50">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-bold text-base sm:text-lg text-white tracking-tight">
                      Berihu Araya
                    </p>
                    <p className="text-xs text-emerald-400 font-mono font-medium">
                      Full-Stack &amp; Odoo ERP Developer
                    </p>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative flex-shrink-0" title="Active & Available">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content & Education */}
        <div className="space-y-6">
          <div
            ref={aboutRef}
            data-reveal="about"
            className={`${revealClass("about", "content")} glass-card rounded-2xl p-6 md:p-8`}
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white md:mb-4 md:text-2xl">
              About Me
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
              Software Engineer with professional experience as a Full-Stack MERN Developer &amp; Odoo ERP Developer. Expert in
              developing Web Apps &amp; Enterprise Business Solutions. Proficient in React.js, Node.js, Express.js, Python, Django, Odoo
              ERP &amp; databases like PostgreSQL &amp; MongoDB, with hands-on experience developing RESTful APIs, customizing ERP
              modules, and optimizing backend systems. Passionate about delivering clean, maintainable, and high-performance
              software that solves real-world business challenges.
            </p>
          </div>

          <div
            ref={educationRef}
            data-reveal="education"
            className={`${revealClass("education", "education")} glass-card rounded-2xl p-6 md:p-8`}
          >
            <div className="flex items-start gap-3.5 md:gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Education
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base font-medium">
                  Mekelle University - Mekelle Institute of Technology (MU-MIT)
                </p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Bachelor&apos;s Degree in Computer Science and Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
