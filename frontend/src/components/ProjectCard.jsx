import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  tech = [],
  image,
  liveLink,
  githubLink,
  featured = false,
  category = "Full-Stack"
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative flex flex-col h-full rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
        featured ? 'ring-1 ring-emerald-500/40 shadow-glow-sm' : ''
      }`}
    >
      {/* Media / Screenshot Preview */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-800/80">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-400">
            <svg className="w-12 h-12 text-emerald-500/70 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{category} System</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            {category}
          </span>
          {featured && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 backdrop-blur-md">
              FEATURED
            </span>
          )}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 backdrop-blur-sm">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold transition-transform duration-200 hover:scale-105 shadow-md"
            >
              <span>Live Preview</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-transform duration-200 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297a12 12 0 0 0-3.79 23.403c.6.11.82-.26.82-.577v-2.034c-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018 0 2.043.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.824.576A12.004 12.004 0 0 0 12 .297z" />
              </svg>
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Bottom Direct Links */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3 text-xs font-semibold">
          {liveLink ? (
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
            <span className="text-slate-400 font-normal">Internal Architecture</span>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
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
