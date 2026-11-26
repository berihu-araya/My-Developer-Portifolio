export default function ProjectCard({
  title,
  description,
  tech = [],
  liveLink,
  githubLink,
  featured = false,
  category = "Full-Stack",
  timeline,
  onOpenModal
}) {
  // Generate a tailored schematic topology based on category/title
  const getArchitectureFlow = () => {
    if (title.toLowerCase().includes('odoo')) {
      return {
        left: 'Touch POS (OWL)',
        center: 'Odoo Engine (Python)',
        right: 'PostgreSQL Ledger',
        status: 'Production Live: erp.niyatconsultancy.com'
      };
    }
    if (title.toLowerCase().includes('school')) {
      return {
        left: 'Next.js Frontend',
        center: 'Express + Redis Cache',
        right: 'PostgreSQL DB',
        status: 'Repo: github.com/berihu-araya/smart_sms'
      };
    }
    if (title.toLowerCase().includes('chatbot') || title.toLowerCase().includes('helpdesk')) {
      return {
        left: 'React UI Client',
        center: 'NLP Engine (Python)',
        right: 'Django & PostgreSQL',
        status: 'Ride-Hailing AI Pipeline'
      };
    }
    if (title.toLowerCase().includes('disease') || title.toLowerCase().includes('plant')) {
      return {
        left: 'Flutter Android',
        center: 'Offline TFLite (CNN)',
        right: 'Django Sync API',
        status: 'Edge Mobile AI Diagnostic'
      };
    }
    if (title.toLowerCase().includes('commerce')) {
      return {
        left: 'React Storefront',
        center: 'Express JWT Backend',
        right: 'MongoDB & Cloudinary',
        status: 'Secure Transactional Engine'
      };
    }
    return {
      left: 'Interactive UI',
      center: 'REST API Service',
      right: 'Data Persistence',
      status: 'Production Architecture'
    };
  };

  const flow = getArchitectureFlow();

  return (
    <div
      className={`group relative flex flex-col h-full rounded-2xl sm:rounded-3xl glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
        featured ? 'ring-1 ring-emerald-500/40 shadow-glow-sm' : ''
      }`}
    >
      {/* Visual Architectural Schematic Header */}
      <div className="relative h-44 sm:h-48 w-full p-4 flex flex-col justify-between bg-slate-950 border-b border-slate-800/80 overflow-hidden font-mono">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        
        {/* Radial subtle glow */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            {category}
          </span>
          {timeline && (
            <span className="text-[10px] text-slate-400 font-mono">
              {timeline}
            </span>
          )}
        </div>

        {/* Architectural Flow Diagram */}
        <div className="relative z-10 my-auto py-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300 gap-1 sm:gap-1.5">
            <div className="flex-1 px-1.5 sm:px-2 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center truncate">
              <span className="text-slate-200 font-semibold">{flow.left}</span>
            </div>
            <span className="text-emerald-400 font-bold text-xs flex-shrink-0">➔</span>
            <div className="flex-1 px-1.5 sm:px-2 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center truncate">
              <span className="text-emerald-300 font-semibold">{flow.center}</span>
            </div>
            <span className="text-emerald-400 font-bold text-xs flex-shrink-0">➔</span>
            <div className="flex-1 px-1.5 sm:px-2 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center truncate">
              <span className="text-slate-200 font-semibold">{flow.right}</span>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-900">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="truncate text-slate-400">{flow.status}</span>
          </div>
          <span className="text-emerald-400 text-[10px] group-hover:translate-x-0.5 transition-transform">
            Details ↗
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.slice(0, 5).map((technology, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono"
            >
              {technology}
            </span>
          ))}
          {tech.length > 5 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
              +{tech.length - 5}
            </span>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3 text-xs font-semibold">
          {onOpenModal ? (
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold transition-colors"
            >
              <span>Architecture Case Study</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          ) : liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Explore Demo</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span className="text-slate-400 font-normal font-mono">Enterprise Solution</span>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297a12 12 0 0 0-3.79 23.403c.6.11.82-.26.82-.577v-2.034c-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018 0 2.043.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.824.576A12.004 12.004 0 0 0 12 .297z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
