import { useEffect, useState } from "react";

function SkillCategoryCard({ category }) {
  return (
    <div className="glass-effect rounded-2xl p-5 md:p-7 card-shadow">
      <div className="mb-6 text-center">
        <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${category.color} text-2xl shadow-lg md:h-16 md:w-16 md:text-3xl`}>
          {category.icon}
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">{category.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{category.description}</p>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 md:text-base">{skill.name}</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      description: "Building polished, responsive, and high-performance user experiences.",
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 82 }
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Backend",
      icon: "⚙️",
      description: "Designing scalable APIs and reliable server-side systems.",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python / Django", level: 82 },
        { name: "REST APIs", level: 84 },
        { name: "Authentication", level: 85 }
      ],
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Odoo ERP",
      icon: "🏢",
      description: "Delivering business-focused ERP solutions and custom workflows.",
      skills: [
        { name: "Odoo Development", level: 80 },
        { name: "Custom Module Development", level: 84 },
        { name: "ERP Customization", level: 83 },
        { name: "Odoo ORM", level: 87 },
        { name: "XML Views", level: 88 },
        { name: "Python for Odoo", level: 90 }
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Database",
      icon: "🗄️",
      description: "Structuring data for performance, reliability, and maintainability.",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 90 },
        { name: "Database Design", level: 88 }
      ],
      color: "from-cyan-600 to-blue-600"
    }
  ];

  const tools = [
    "Git", "GitHub", "Docker", "Postman", "Linux", "VS Code", "Jira", "Agile Methodology"
  ];

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveCategory((current) => (current + 1) % skillCategories.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, skillCategories.length]);

  const showCategory = (index) => {
    setActiveCategory((index + skillCategories.length) % skillCategories.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Technical Skills</h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mt-4 max-w-3xl mx-auto px-4">
            A concise view of the technologies I use to build reliable, scalable, and modern solutions.
          </p>
        </div>

        <div
          className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${
                index % 2 === 0 ? 'fade-in' : 'fade-in-delayed'
              }`}
            >
              <SkillCategoryCard category={category} />
            </div>
          ))}
        </div>

        <div
          className="md:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div key={skillCategories[activeCategory].title} className="animate-capability-slide" aria-live="polite">
            <SkillCategoryCard category={skillCategories[activeCategory]} />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => showCategory(activeCategory - 1)}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200"
              aria-label="Show previous skill category"
            >
              ←
            </button>
            <div className="flex gap-2" aria-label="Choose skill category">
              {skillCategories.map((category, index) => (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => showCategory(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeCategory ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 dark:bg-slate-600"}`}
                  aria-label={`Show ${category.title} skills`}
                  aria-current={index === activeCategory ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => showCategory(activeCategory + 1)}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200"
              aria-label="Show next skill category"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-16 fade-in">
          <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow">
            <h3 className="mb-6 text-xl font-bold text-slate-800 dark:text-slate-100 md:text-center md:text-2xl">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className={`rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 px-3 py-2 text-center text-xs font-semibold text-slate-800 transition-all duration-300 hover-shimmer dark:from-slate-800 dark:to-slate-700 dark:text-slate-100 md:px-4 md:py-3 md:text-sm ${
                    index % 4 === 0 ? 'hover-lift' :
                    index % 4 === 1 ? 'hover-glow' :
                    index % 4 === 2 ? 'hover-bounce' : 'hover-rotate'
                  }`}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
