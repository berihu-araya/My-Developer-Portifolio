import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = useMemo(() => [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      path: '/about',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      path: '/skills',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      path: '/experience',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      path: '/projects',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'certifications',
      label: 'Certifications',
      path: '/',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      path: '/contact',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ], []);

  const getActiveLinkId = (pathname) => {
    const routeMap = {
      '/about': 'about',
      '/skills': 'skills',
      '/experience': 'experience',
      '/projects': 'projects',
      '/certifications': 'certifications',
      '/contact': 'contact',
    };
    return routeMap[pathname] || 'home';
  };

  const handleNavClick = (link) => {
    setIsOpen(false);
    setActiveSection(link.id);

    if (location.pathname === '/' && document.getElementById(link.id)) {
      scrollToSection(link.id);
      return;
    }

    if (link.path === '/') {
      navigate('/');
      requestAnimationFrame(() => {
        scrollToSection(link.id);
      });
      return;
    }

    navigate(link.path);
  };

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(getActiveLinkId(location.pathname));
      return undefined;
    }

    const getCurrentSection = () => {
      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      if (!sections.length) return 'home';

      const offset = window.scrollY + 180;
      let closestSection = 'home';
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const distance = Math.abs(section.offsetTop - offset);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      return closestSection;
    };

    const updateActiveSection = () => {
      setActiveSection(getCurrentSection());
    };

    updateActiveSection();

    const handleScroll = () => {
      window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname, navLinks]);

  return (
    <>
      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 md:hidden 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5' 
          : 'bg-white/60 dark:bg-[#090d16]/60 backdrop-blur-sm border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3.5 px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Logo & Identity */}
          <button 
            onClick={() => handleNavClick(navLinks[0])}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative">
              <img 
                src="/profile.jpeg" 
                alt="Berihu Araya"
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/80 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  Berihu Araya
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded border border-emerald-300/50 dark:border-emerald-700/50">
                  DEV
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                Full-Stack &amp; Odoo ERP Developer
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                    isActive 
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pl-3 border-l border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/Berihu_Araya_Resume.pdf"
                download="Berihu_Araya_Resume.pdf"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-colors shadow-sm shadow-emerald-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>CV</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-navigation" 
          className={`md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[85vh] py-3 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left font-medium text-sm transition-colors ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold' 
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg ${isActive ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="/Berihu_Araya_Resume.pdf"
                download="Berihu_Araya_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Resume / CV</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
}
