import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      description: "Building polished, responsive, and high-performance user experiences.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS"
      ]
    },
    {
      id: "backend-database",
      title: "Backend & Database",
      description: "Designing scalable server systems, REST APIs, and robust data persistence.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        "Node.js & Express.js",
        "Python / Django",
        "REST APIs",
        "Authentication",
        "PostgreSQL",
        "MongoDB",
        "Firebase"
      ]
    },
    {
      id: "odoo",
      title: "Odoo ERP",
      description: "Delivering business-focused ERP solutions and custom workflows.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      skills: [
        "Odoo Development",
        "Custom Module Development",
        "ERP Customization",
        "Odoo ORM",
        "XML Views",
        "Python for Odoo"
      ]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Building intelligent models, computer vision pipelines, and NLP solutions.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        "NumPy",
        "Pandas",
        "CNN (Convolutional Neural Networks)",
        "NLP (Natural Language Processing)",
        "Computer Vision",
        "TensorFlow",
        "Scikit-Learn"
      ]
    }
  ];

  const tools = [
    "Git", "GitHub", "Docker", "Postman", "Linux", "VS Code", "Jira", "Agile Methodology"
  ];

  const filteredCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section className="section-padding max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Technical <span className="text-emerald-600 dark:text-emerald-400">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          A concise view of the technologies I use to build reliable, scalable, and modern solutions.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeCategory === "all"
                ? "bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
              }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeCategory === category.id
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Display */}
      {activeCategory === "all" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800/70 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Single Selected Category - Centered Showcase Card */
        <div className="max-w-2xl mx-auto mb-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-3xl p-7 sm:p-9 border border-emerald-500/30 shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider mb-4">
                Core Competencies &amp; Technologies
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-200 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tools Section */}
      <div className="glass-card rounded-2xl p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white text-center mb-6">
          Tools &amp; Technologies
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
