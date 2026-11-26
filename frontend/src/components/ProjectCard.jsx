import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  tech = [],
  image,
  liveLink,
  githubLink,
  featured = false,
  category = "Full-Stack",
  timeline,
  onOpenModal
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative flex flex-col h-full rounded-2xl sm:rounded-3xl glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
        featured ? 'ring-1 ring-emerald-500/40 shadow-glow-sm' : ''
      }`}
    >
      {/* Media / Screenshot Preview */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 border-b border-slate-200/60 dark:border-slate-800/80">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-400">
            <svg className="w-12 h-12 text-emerald-500/70 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{category}</span>
          </div>
        )}

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold font-mono tracking-wide bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            {category}
          </span>
          {featured && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 backdrop-blur-md">
              FEATURED
            </span>
          )}
        </div>

        {/* Timeline Badge (Bottom Left of Image) */}
        {timeline && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-950/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {timeline}
          </div>
        )}
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
              <span>Architecture &amp; Details</span>
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
