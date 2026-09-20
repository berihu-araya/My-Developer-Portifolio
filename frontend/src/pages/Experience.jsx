export default function Experience() {
  const experiences = [
    {
      company: "Niyat Consultancy & Software Company",
      position: "Odoo ERP Developer",
      period: "September 2025 - Present",
      description: "Developed and customized Odoo ERP solutions for Wagwago Business Group, building scalable business modules and automating workflows to improve operational efficiency across multiple business operations.",
      achievements: [
        "Designed and extended ERP functionalities across Sales, Purchase, Inventory, Accounting, HR, CRM, and other core business modules based on organizational requirements",
        "Built custom models, views, reports, workflows, and backend business logic using Python and the Odoo framework while following clean, maintainable, and scalable software engineering practices",
        "Integrated Odoo with external systems and third-party services through REST APIs, enabling secure and reliable data exchange between business applications",
        "Collaborated with cross-functional teams to deliver robust ERP solutions tailored to business processes and operational needs"
      ],
      technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript", "Git"]
    },
    {
      company: "Geez EdTech",
      position: "Backend Developer",
      period: "June 2025 - September 2025",
      description: "Contributed to the development of scalable backend services for web applications using Node.js, Express.js, and MongoDB.",
      achievements: [
        "Designed and implemented secure RESTful APIs, backend business logic, authentication, and authorization using JWT",
        "Built and optimized MongoDB database schemas, CRUD operations, and API endpoints to ensure efficient data management and application performance",
        "Integrated frontend applications with backend services to provide seamless data flow and reliable user experiences",
        "Collaborated with frontend developers and senior engineers to deliver scalable, maintainable, and production-ready web applications"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "JavaScript", "REST APIs", "JWT", "Git", "GitHub"]
    }
  ];

  return (
    <section className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Professional <span className="text-emerald-600 dark:text-emerald-400">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          My journey in software development, from enterprise solutions to innovative web applications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="mb-5 pb-5 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <h4 className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {exp.company}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {exp.period}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex-shrink-0 mt-0.5 border border-emerald-200/80 dark:border-emerald-800/60">
                        ✓
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-2.5 tracking-wide">
                Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50"
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
