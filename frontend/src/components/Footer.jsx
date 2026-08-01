import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3 md:mb-4">Berihu Araya</h3>
            <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Full-Stack Developer specializing in MERN stack, Odoo ERP, and modern web technologies.
              Creating scalable solutions that drive business success.
            </p>
            <div className="flex gap-3 md:gap-4">
              {/* Facebook */}
                <a
                  href="https://web.facebook.com/berihu.araya.969"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ease-out shadow-lg shadow-blue-600/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764V11.01h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>

              {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/berihu-araya-159b0033b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ease-out shadow-lg shadow-blue-500/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M19 0H5C3.346 0 2 1.346 2 3v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3zM8.5 20H6V9.5h2.5V20zm-1.25-12C6.01 8 5 6.99 5 5.75S6.01 3.5 7.25 3.5 9.5 4.51 9.5 5.75 8.49 8 7.25 8zM18 20h-2.5v-5.75c0-1.375-.025-3.14-1.915-3.14-1.915 0-2.21 1.5-2.21 3.05V20H9V9.5h2.4v1.4h.03c.34-.64 1.17-1.32 2.41-1.32 2.58 0 3.06 1.7 3.06 3.92V20z" />
                  </svg>
                </a>
              
              {/* GitHub */}
                <a
                  href="https://github.com/bre-araya"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-gray-700 to-black rounded-xl flex items-center justify-center text-white hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ease-out shadow-lg shadow-gray-900/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M12 .297a12 12 0 0 0-3.79 23.403c.6.11.82-.26.82-.577v-2.034c-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018 0 2.043.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.824.576A12.004 12.004 0 0 0 12 .297z" />
                  </svg>
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-48">
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 whitespace-nowrap">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:ml-64">
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 whitespace-nowrap">Get In Touch</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                  <span className="text-xs md:text-sm">📧</span>
                </div>
                <span className="text-gray-300 text-xs md:text-sm ">berihuaraya374@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                  <span className="text-xs md:text-sm">📱</span>
                </div>
                <span className="text-gray-300 text-xs md:text-sm whitespace-nowrap">+251 972 129 362 </span>
              </div>
              <div className="flex items-center">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                  <span className="text-xs md:text-sm">📍</span>
                </div>
                <span className="text-gray-300 text-xs md:text-sm whitespace-nowrap">Mekelle, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs md:text-sm text-center">
              © {new Date().getFullYear()} Berihu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
