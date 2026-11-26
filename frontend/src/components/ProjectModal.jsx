import { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 flex flex-col w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 backdrop-blur-sm">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {project.category || 'System Architecture'}
              </span>
              {project.timeline && (
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {project.timeline}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
            aria-label="Close Case Study"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-5 sm:space-y-6">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-2">
              Executive Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Architecture Highlights & Engineering Decisions */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider mb-3">
                Key Engineering &amp; Architectural Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {project.challenges && (
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-2">
                Technical Challenge &amp; Solution
              </h4>
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.challenges}
              </div>
            </div>
          )}

          {/* Technology Stack Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 sm:py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition-all duration-200"
              >
                <span>Live System Demo</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-emerald-500 text-xs font-semibold transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297a12 12 0 0 0-3.79 23.403c.6.11.82-.26.82-.577v-2.034c-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018 0 2.043.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.824.576A12.004 12.004 0 0 0 12 .297z" />
                </svg>
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
