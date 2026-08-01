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
      <div className="text-center mb-10 md:mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">About Me</h2>
        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] md:gap-12">
        <div ref={imageRef} data-reveal="image" className={revealClass("image", "image")}>
          <div className="glass-effect overflow-hidden rounded-2xl p-3 card-shadow">
            <img
              src="/me.png"
              alt="Berihu Araya"
              className="aspect-[4/5] w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div ref={aboutRef} data-reveal="about" className={`${revealClass("about", "content")} glass-effect rounded-2xl p-6 md:p-8 card-shadow`}>
            <h3 className="mb-3 text-xl font-semibold text-slate-800 dark:text-slate-100 md:mb-4 md:text-2xl">About Me</h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
              Software Engineer with professional experience as a Full-Stack MERN Developer & Odoo ERP Developer. Expert in
              developing Web Apps & Enterprise Business Solutions. Proficient in React.js, Node.js, Express.js, Python, Django, Odoo
              ERP & databases like PostgreSQL & MongoDB, with hands-on experience developing RESTful APIs, customizing ERP
              modules, and optimizing backend systems. Passionate about delivering clean, maintainable, and high-performance
              software that solves real-world business challenges.
            </p>
          </div>

          <div ref={educationRef} data-reveal="education" className={`${revealClass("education", "education")} glass-effect rounded-2xl p-6 card-shadow md:p-8`}>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 md:h-12 md:w-12">
                <span className="text-lg text-white md:text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 md:text-2xl">Education</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
                  Mekelle University - Mekelle Institute of Technology (MU-MIT)
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
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
