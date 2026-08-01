import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
    { id: 'home', label: 'Home', icon: '🏠', path: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', path: '/about' },
    { id: 'skills', label: 'Skills', icon: '🛠️', path: '/skills' },
    { id: 'experience', label: 'Experience', icon: '📅', path: '/experience' },
    { id: 'projects', label: 'Projects', icon: '🚀', path: '/projects' },
    { id: 'certifications', label: 'Certifications', icon: '🏅', path: '/' },
    { id: 'contact', label: 'Contact', icon: '📩', path: '/contact' },
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
    <> {/* React Fragment used for return multiple elements instead of <div> in javascript*/}
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-40 
          transition-opacity duration-300 md:hidden 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
        <div className="flex justify-between items-center py-4 px-4 md:px-20">
          {/* Logo with Photo */}
          <div className="flex items-center gap-3">
            <img 
              src="/profile.jpeg" 
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-blue-600 shadow-md"
            />
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent select-none hover:scale-105 transition-transform duration-300">
              Berihu Araya
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`nav-link whitespace-nowrap ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">  {/*this md:hidden mean Hide this div on medium and large screens */} 
            <ThemeToggle className="shadow-none" />
            <button
              className="rounded-lg border border-slate-300 bg-white/90 p-1 text-2xl leading-none text-slate-700 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-navigation" className={`md:hidden fixed inset-x-0 top-16 z-40 border-t border-slate-300 bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-950/95 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 ">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-600 dark:bg-slate-800/80 dark:text-blue-400' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-400'}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg shadow-sm dark:bg-slate-800">{link.icon}</span>
                  <span className="truncate whitespace-nowrap">{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-14 md:h-16" />
    </>
  );
}
