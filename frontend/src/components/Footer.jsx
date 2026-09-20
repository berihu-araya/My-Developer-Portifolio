import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(sectionId === 'home' ? '/' : `/#${sectionId}`);
  };

  return (
    <footer className="relative bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">

          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/profile.jpeg"
                  alt="Berihu Araya"
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/80 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Berihu Araya
                </h3>
                <p className="text-xs text-emerald-400 font-medium font-mono">
                  Full-Stack &amp; Odoo ERP Developer
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Full-Stack Developer specializing in MERN stack, Odoo ERP, and modern web technologies.
              Creating scalable solutions that drive business success.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/berihu-araya-159b0033b/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0H5C3.346 0 2 1.346 2 3v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3zM8.5 20H6V9.5h2.5V20zm-1.25-12C6.01 8 5 6.99 5 5.75S6.01 3.5 7.25 3.5 9.5 4.51 9.5 5.75 8.49 8 7.25 8zM18 20h-2.5v-5.75c0-1.375-.025-3.14-1.915-3.14-1.915 0-2.21 1.5-2.21 3.05V20H9V9.5h2.4v1.4h.03c.34-.64 1.17-1.32 2.41-1.32 2.58 0 3.06 1.7 3.06 3.92V20z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/berihu-araya"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297a12 12 0 0 0-3.79 23.403c.6.11.82-.26.82-.577v-2.034c-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018 0 2.043.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.824.576A12.004 12.004 0 0 0 12 .297z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/berihu.araya.969"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764V11.01h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-emerald-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Overview' },
                { id: 'about', label: 'Engineering Background' },
                { id: 'skills', label: 'Technical Stack & Architecture' },
                { id: 'experience', label: 'Work Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications & Accreditations' },
                { id: 'contact', label: 'Get in Touch' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-emerald-400">
              Direct Contact
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:berihuaraya374@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Email Inquiry</p>
                  <p className="font-mono text-xs text-slate-200">berihuaraya374@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+251972129362"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Phone / WhatsApp</p>
                  <p className="font-mono text-xs text-slate-200">+251 972 129 362</p>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Based in Addis Ababa / Mekelle, Ethiopia (Open to Remote Worldwide)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Berihu Araya. Engineered with precision & modern web standards.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-emerald-500">React 19 • Tailwind CSS </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
