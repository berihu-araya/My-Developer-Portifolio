import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectCarouselControls({ items, activeIndex, onSelect, label }) {
  return (
    <div className="mt-5 flex items-center justify-between">
      <button
        type="button"
        onClick={() => onSelect(activeIndex - 1)}
        className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200"
        aria-label={`Show previous ${label}`}
      >
        ←
      </button>
      <div className="flex gap-2" aria-label={`Choose ${label}`}>
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onSelect(index)}
            className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 dark:bg-slate-600"}`}
            aria-label={`Show ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => onSelect(activeIndex + 1)}
        className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200"
        aria-label={`Show next ${label}`}
      >
        →
      </button>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const projects = [
    {
      title: "Plant Disease Detection System",
      description: "An AI-powered web application that uses machine learning to detect plant diseases from leaf images. Features real-time analysis, disease identification, and treatment recommendations for farmers and agricultural professionals.",
      tech: ["React", "Python", "TensorFlow", "Flask", "MongoDB"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      liveLink: "https://plant-disease-detection-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/plant-disease-detection",
      featured: true
    },
    {
      title: "ERP System with Odoo Customization",
      description: "Customized Odoo ERP modules for inventory management, sales tracking, and financial reporting. Implemented automated workflows, custom dashboards, and integrated third-party APIs for enhanced business operations.",
      tech: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      liveLink: "https://erp-system-demo.vercel.app",
      githubLink: "https://github.com/berihu-araya/odoo-erp-customization",
      featured: true
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description: "Developed a scalable full-stack e-commerce application with secure JWT authentication, product management, shopping cart, order processing, and an admin dashboard. Built RESTful APIs, integrated Cloudinary for image uploads, and implemented inventory management, product reviews, and role-based access control.",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveLink: "https://github.com/bre-araya/E-Commerce",
      githubLink: "https://github.com/bre-araya/E-Commerce"
    },
    {
      title: "AI Chatbot for Customer Support",
      description: "Intelligent chatbot built with natural language processing for automated customer support. Integrates with existing CRM systems and provides 24/7 customer assistance with human handoff capabilities.",
      tech: ["Python", "Django", "NLP", "Dialogflow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      liveLink: "https://github.com/bre-araya/chatbot",
      githubLink: "https://github.com/berihu-araya/chatbot"
    },
    {
      title: "Project Management Tools Dashboard",
      description: "A collaborative project management dashboard for tracking tasks, organizing work, and monitoring team progress in one place. Designed to make project planning and execution more visible and efficient.",
      tech: ["React", "GitHub Projects", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveLink: "https://github.com/bre-araya/project-managment-Tools",
      githubLink: "https://github.com/bre-araya/project-managment-Tools"
    }
  ];

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, projects.length]);

  const showProject = (index) => {
    setActiveProject((index + projects.length) % projects.length);
  };

  return (
    <section className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Featured Projects</h2>
        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
        <p className="text-base md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
          A showcase of my recent work spanning web development, AI/ML, and enterprise solutions
        </p>
      </div>

      <div
        className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              index % 3 === 0 ? 'fade-in' :
              index % 3 === 1 ? 'fade-in-delayed' : 'slide-in-right'
            }`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              featured={project.featured}
            />
          </div>
        ))}
      </div>

      <div
        className="sm:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div key={projects[activeProject].title} className="animate-capability-slide" aria-live="polite">
          <ProjectCard {...projects[activeProject]} />
        </div>
        <ProjectCarouselControls
          items={projects}
          activeIndex={activeProject}
          onSelect={showProject}
          label="project"
        />
      </div>

      {/* Call to action */}
      <div className="text-center mt-16 fade-in">
        <div className="glass-effect rounded-2xl p-8 card-shadow max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Working Together?</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
