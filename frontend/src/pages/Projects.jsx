import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "odoo-pos-customization",
      title: "Odoo POS Development & Enterprise Customization",
      category: "Enterprise ERP",
      featured: true,
      timeline: "Enterprise Production",
      tech: ["Python", "Odoo ERP", "PostgreSQL", "XML", "JavaScript", "OWL Framework", "REST APIs"],
      description: "Customized and extended Odoo Point of Sale (POS) and inventory workflows for high-volume retail transactions, offline-resilient UI, and multi-branch ledger synchronization.",
      fullDescription: "Architected and delivered customized Odoo Point of Sale (POS) modules tailored for multi-location retail enterprises. The solution enhances cashier productivity, accelerates checkout processing with custom OWL components, and guarantees real-time ledger accounting consistency.",
      highlights: [
        "Built modular OWL (Odoo Web Library) frontend components supporting touchscreen workflows and barcode scanning.",
        "Engineered transactional Python backend routines ensuring atomic stock reservations and financial journal entries in PostgreSQL.",
        "Developed custom REST APIs bridging external payment terminals with Odoo ERP backend workflows."
      ],
      challenges: "Ensuring zero data loss during high-volume peak hours while syncing POS register sessions to core inventory and accounting ledgers across distributed branches.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      liveLink: "https://erp.niyatconsultancy.com/",
      githubLink: "https://github.com/berihu-araya"
    },
    {
      id: "school-management-system",
      title: "School Management System with Redis Caching",
      category: "Distributed Web System",
      featured: true,
      timeline: "Full-Stack System",
      tech: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs"],
      description: "Full-stack institutional school management platform streamlining student academic records, attendance logs, fee collections, and staff scheduling with Redis caching.",
      fullDescription: "A modern, high-performance school management system designed to coordinate academic and administrative operations across departments. Implemented layered caching using Redis to maintain sub-second response times during peak grade submission and report card generation periods.",
      highlights: [
        "Engineered RESTful microservices in Node.js and Express with robust schema validation and JWT authentication.",
        "Integrated Redis caching layer, reducing PostgreSQL read loads by over 60% during simultaneous exam grading sessions.",
        "Designed responsive, accessible web portals using React.js and Next.js for administrators, teachers, and students."
      ],
      challenges: "Eliminating database contention and slow response times when thousands of student attendance records and grades are submitted concurrently.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      liveLink: "https://github.com/berihu-araya/smart_sms",
      githubLink: "https://github.com/berihu-araya/smart_sms"
    },
    {
      id: "ai-helpdesk-chatbot",
      title: "AI Helpdesk Chatbot for Ride-Hailing System",
      category: "AI & NLP",
      featured: true,
      timeline: "05/2025 – 09/2025",
      tech: ["React.js", "Python", "Django", "NLP", "PostgreSQL", "REST APIs"],
      description: "Intelligent customer support automation system designed for a ride-hailing company, reducing ticket resolution time through natural language query resolution.",
      fullDescription: "Designed and engineered an automated AI-powered helpdesk chatbot for ride-hailing dispatch and passenger support. The system utilizes natural language processing (NLP) to parse user inquiries regarding ride disputes, lost items, and payment issues, dynamically retrieving trip data from PostgreSQL.",
      highlights: [
        "Built a modular NLP intent-classification and query-parsing pipeline to route passenger requests automatically.",
        "Integrated the React frontend with a secure Django/Python backend via authenticated RESTful endpoints.",
        "Implemented fallback mechanisms for seamless escalation to human support agents when confidence thresholds drop."
      ],
      challenges: "Handling ambiguous language, multilingual slang, and abrupt context switching during urgent trip-related inquiries.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
      liveLink: "https://github.com/bre-araya/chatbot",
      githubLink: "https://github.com/bre-araya/chatbot"
    },
    {
      id: "plant-disease-detection",
      title: "Plant Disease Detection & Cure Recommendation (CNN)",
      category: "Computer Vision & Mobile AI",
      featured: false,
      timeline: "Final Year Project (MU-MIT)",
      tech: ["CNN Models", "TensorFlow Lite", "Flutter", "React.js", "Django", "Firebase", "MongoDB"],
      description: "AI-based agricultural diagnostic system for tomato, potato, and green pepper leaf diseases, featuring offline edge inference on mobile and cloud analytics.",
      fullDescription: "Graduation engineering project developed at Mekelle Institute of Technology (MIT). Features a Deep Convolutional Neural Network (CNN) trained to classify leaf diseases across tomato, potato, and green pepper crops with treatment cure recommendations.",
      highlights: [
        "Trained high-accuracy CNN image classification models on curated plant pathology datasets.",
        "Quantized and embedded the model via TensorFlow Lite into a Flutter Android mobile application for offline field inference by farmers.",
        "Deployed a companion cloud web platform using React and Django backed by MongoDB and Firebase."
      ],
      challenges: "Deploying high-accuracy deep learning models to low-resource smartphones operating in rural environments with no cellular network connectivity.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
      liveLink: "https://github.com/berihu-araya/plant-disease-detection",
      githubLink: "https://github.com/berihu-araya/plant-disease-detection"
    },
    {
      id: "fullstack-ecommerce",
      title: "Scalable Full-Stack E-Commerce Engine",
      category: "Full-Stack MERN",
      featured: false,
      timeline: "Full-Stack Architecture",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS"],
      description: "Modern commerce platform featuring JWT authentication, role-based access control (RBAC), product inventory management, and media hosting via Cloudinary.",
      fullDescription: "A production-ready e-commerce solution architected with the MERN stack. Includes robust administrative controls for product inventories, order fulfillment states, and user customer management with atomic shopping cart operations.",
      highlights: [
        "Implemented secure JWT authentication and role-based permissions (Admin vs Customer).",
        "Configured Cloudinary CDN for optimized asset delivery and high-resolution product photography.",
        "Designed clean RESTful API schemas with data validation and defensive error boundaries."
      ],
      challenges: "Preventing race conditions during checkout and inventory decrements during concurrent purchases.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      liveLink: "https://github.com/bre-araya/E-Commerce",
      githubLink: "https://github.com/bre-araya/E-Commerce"
    },
    {
      id: "project-management-tools",
      title: "Collaborative Project Management Dashboard",
      category: "Productivity Web System",
      featured: false,
      timeline: "Web System",
      tech: ["React", "GitHub API", "Tailwind CSS", "JavaScript"],
      description: "Interactive task board and sprint planning dashboard designed to make team deliverables and milestone tracking transparent and measurable.",
      fullDescription: "A developer-focused productivity dashboard consolidating team tasks, milestone velocity, and pull request statuses into a unified, intuitive workspace.",
      highlights: [
        "Interactive drag-and-drop kanban columns with live status indicators.",
        "Integration with GitHub REST APIs for commit and branch status synchronization.",
        "Lightweight, snappy frontend interface styled with modern Tailwind CSS."
      ],
      challenges: "Synchronizing remote API status changes cleanly with optimistic UI updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      liveLink: "https://github.com/bre-araya/project-managment-Tools",
      githubLink: "https://github.com/bre-araya/project-managment-Tools"
    }
  ];

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "Enterprise ERP", label: "Enterprise ERP" },
    { id: "Distributed Web System", label: "Distributed Web" },
    { id: "AI & NLP", label: "AI & NLP" },
    { id: "Full-Stack MERN", label: "Full-Stack MERN" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section-padding max-w-7xl mx-auto">
      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <div className="badge-brand mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Engineering Portfolio
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Featured <span className="text-emerald-600 dark:text-emerald-400">Systems &amp; Architecture</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          Explore real-world software architectures, enterprise ERP modules, AI applications, and distributed backends.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              featured={project.featured}
              category={project.category}
              timeline={project.timeline}
              onOpenModal={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {/* Collaboration Call to Action */}
      <div className="text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto border border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Looking for a Senior Software Engineer?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
            I specialize in architecting scalable business solutions, custom Odoo ERP systems, and high-performance full-stack web applications. Let&apos;s build together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#contact"
              className="btn-primary px-8 py-3.5 text-sm font-bold shadow-lg shadow-emerald-500/25"
            >
              Initiate Discussion
            </a>
            <a
              href="/Berihu_Araya_CV.pdf"
              download="Berihu_Araya_Gebrihans_CV.pdf"
              className="btn-secondary px-6 py-3.5 text-sm font-semibold"
            >
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
