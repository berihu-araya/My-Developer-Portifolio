import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "odoo-erp",
      title: "ERP Development & Odoo",
      description: "Delivering business-critical ERP solutions, custom workflows, and automated enterprise logic.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      skills: [
        "Odoo ERP Architecture",
        "Odoo Module Customization",
        "ERP Integrations & Sync",
        "Odoo ORM & Data Models",
        "XML Views & Actions",
        "OWL (Odoo Web Library)",
        "System Configuration",
        "Business Automation"
      ]
    },
    {
      id: "backend",
      title: "Backend & Distributed APIs",
      description: "Designing high-throughput server systems, RESTful microservices, and robust architectures.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        "Python",
        "Django & Django REST Framework",
        "FastAPI",
        "Node.js & Express.js",
        "RESTful API Design",
        "JWT Authentication & RBAC",
        "Clean Architecture",
        "Microservices"
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Building responsive, modern, and accessible user experiences with component-driven design.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        "React.js (v18/19)",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "Tailwind CSS",
        "CSS3 / HTML5",
        "State Management",
        "Responsive Web Design"
      ]
    },
    {
      id: "databases",
      title: "Databases & In-Memory Caching",
      description: "Relational modeling, query optimization, NoSQL schema design, and high-speed caching layers.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        "PostgreSQL (Indexing & Tuning)",
        "MongoDB & Mongoose",
        "Redis (In-Memory Caching)",
        "Firebase Firestore / Auth",
        "Data Migration Pipelines",
        "ACID Transactions"
      ]
    },
    {
      id: "ai-ml",
      title: "AI, Machine Learning & Vision",
      description: "Trained neural models, deep learning vision pipelines, and NLP query automation.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        "TensorFlow & TensorFlow Lite",
        "Keras",
        "Convolutional Neural Networks (CNN)",
        "OpenCV",
        "Natural Language Processing (NLP)",
        "NumPy & Pandas",
        "Mobile Edge Inference (Flutter TFLite)"
      ]
    },
    {
      id: "tools",
      title: "DevOps & Engineering Workflow",
      description: "Production version control, containerization, API testing, and agile collaboration standards.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        "Git & GitHub Workflow",
        "Docker Containerization",
        "Postman & Swagger / OpenAPI",
        "Linux CLI Environments",
        "Agile / Scrum Methodologies",
        "CI/CD Principles",
        "Code Reviews & Testing"
      ]
    }
  ];

  const filteredCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section className="section-padding max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <div className="badge-brand mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Engineering Competency
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Technical <span className="text-emerald-600 dark:text-emerald-400">Stack &amp; Capabilities</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          Comprehensive technologies and tools used to architect resilient ERP systems, scalable microservices, and modern web applications.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
            }`}
          >
            All Competencies
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md border border-slate-200 dark:border-slate-800"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800/70 text-xs font-semibold text-slate-800 dark:text-slate-200"
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
    </section>
  );
}
