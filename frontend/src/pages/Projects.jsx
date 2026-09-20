import ProjectCard from "../components/ProjectCard";

export default function Projects() {
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

  return (
    <section className="section-padding max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          A showcase of my recent work spanning web development, AI/ML, and enterprise solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
        {projects.map((project, index) => (
          <div key={index}>
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

      {/* Call to action */}
      <div className="text-center">
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Interested in Working Together?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
            I&apos;m always open to discussing new opportunities and interesting projects.
            Let&apos;s create something amazing together!
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
