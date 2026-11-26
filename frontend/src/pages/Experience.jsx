export default function Experience() {
  const experiences = [
    {
      company: "NIYAT CONSULTANCY PLC",
      location: "Addis Ababa, Ethiopia",
      position: "Software Developer / Odoo ERP Developer",
      period: "09/2025 – Present",
      type: "Full-Time",
      description: "Architecting, developing, and extending custom Odoo ERP solutions and backend services to streamline enterprise business workflows, transaction processing, and organizational operations.",
      achievements: [
        "Designed, developed, and customized modular Odoo ERP solutions across Sales, Purchase, Inventory, Accounting, Human Resources, POS, and CRM modules.",
        "Built custom models, views (XML/OWL), SQL reports, automated server actions, and backend business logic using Python and PostgreSQL.",
        "Engineered REST API integrations connecting Odoo with external web services and third-party systems for real-time reliable data synchronization.",
        "Applied clean architecture principles, code reviews, and database indexing to maintain enterprise-level performance and stability."
      ],
      technologies: ["Odoo ERP", "Python", "PostgreSQL", "XML", "JavaScript", "OWL Framework", "REST APIs", "Git"]
    },
    {
      company: "Tigray Investment Bureau",
      location: "Mekelle, Ethiopia",
      position: "Backend Developer",
      period: "06/2024 – 09/2025",
      type: "Professional Contract",
      description: "Spearheaded the design and implementation of scalable backend microservices, database schemas, and RESTful APIs powering investment management and administrative web applications.",
      achievements: [
        "Developed and maintained robust backend applications using Python, Django, and Django REST Framework (DRF).",
        "Engineered secure RESTful APIs, role-based access control (RBAC), token authentication, and data validation pipelines.",
        "Optimized relational PostgreSQL databases with structured migrations, query profiling, and index strategies to enhance response times under load.",
        "Collaborated with frontend teams and senior engineering staff to deliver production-ready, well-documented software solutions."
      ],
      technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs", "JWT Auth", "Git", "Swagger"]
    }
  ];

  return (
    <section className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <div className="badge-brand mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Career Track Record
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Professional <span className="text-emerald-600 dark:text-emerald-400">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          Delivering production-grade enterprise ERP architectures, robust distributed backends, and business-critical software systems.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-md relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent" />

            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {exp.type}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="text-xs text-slate-400 font-normal">• {exp.location}</span>
                </h4>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 self-start lg:self-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Overview */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {exp.description}
            </p>

            {/* Engineering Achievements */}
            <div className="mb-6">
              <h5 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
                Key Technical Contributions
              </h5>
              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex-shrink-0 mt-0.5 border border-emerald-200/80 dark:border-emerald-800/60">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-5 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider mb-2.5">
                Technologies &amp; Architecture
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
