import { useEffect, useState } from 'react';
import aiCertificate from '../assets/Artificial Intelligence.png';
import dataVisualizationCertificate from '../assets/Data Visualizations from courcera.png';
import pythonMachineLearningCertificate from '../assets/Python ML.png';
import webDevelopmentCertificate from '../assets/Web Development from IBM.png';
import odooCertificate from '../assets/Odoo.png';

const certifications = [

  {
    id: 'web-development-ibm',
    title: 'Web Development',
    topic: 'Frontend Development',
    issuer: 'IBM',
    date: '2025',
    description: 'Reflects hands-on experience building polished, responsive web applications with modern development practices.',
    highlights: [
      'Responsive interfaces',
      'Web app development',
      'Modern frontend practices',
    ],
    image: webDevelopmentCertificate,
    link: webDevelopmentCertificate,
  },
  {
    id: 'odoo-erp',
    title: 'Odoo ERP Development',
    topic: 'ERP Development',
    issuer: 'Odoo S.A.',
    date: '2025',
    description: 'Shows practical experience customizing and extending Odoo ERP solutions for business workflows and operational automation.',
    highlights: [
      'Custom Odoo modules',
      'Workflow automation',
      'Business process customization',
    ],
    image: odooCertificate,
    link: odooCertificate,
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    topic: 'AI Foundations',
    issuer: 'Coursera',
    date: '2025',
    description: 'Highlights foundational understanding of AI concepts, applied workflows, and practical problem-solving approaches.',
    highlights: [
      'Core AI concepts',
      'Applied learning workflows',
      'Practical problem-solving',
    ],
    image: aiCertificate,
    link: aiCertificate,
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    topic: 'Data Storytelling',
    issuer: 'Coursera',
    date: '2025',
    description: 'Showcases the ability to create clear, insightful visual narratives from data using modern visualization techniques.',
    highlights: [
      'Visual data storytelling',
      'Effective chart design',
      'Audience-focused insights',
    ],
    image: dataVisualizationCertificate,
    link: dataVisualizationCertificate,
  },
  {
    id: 'python-machine-learning',
    title: 'Python Machine Learning',
    topic: 'Machine Learning',
    issuer: 'Coursera',
    date: '2025',
    description: 'Demonstrates practical knowledge of Python-based machine learning concepts and model development.',
    highlights: [
      'Python ML workflows',
      'Model development',
      'Data-driven experimentation',
    ],
    image: pythonMachineLearningCertificate,
    link: pythonMachineLearningCertificate,
  },
  
  
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCert, setActiveCert] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (isCarouselPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveCert((current) => (current + 1) % certifications.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isCarouselPaused]);

  const showCertificate = (index) => {
    setActiveCert((index + certifications.length) % certifications.length);
  };

  const renderCertificateCard = (cert, index) => (
    <article
      key={cert.id}
      className={`glass-effect rounded-3xl p-6 card-shadow transition-all duration-500 ${
        index % 3 === 0 ? 'fade-in' : index % 3 === 1 ? 'fade-in-delayed' : 'slide-in-right'
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-blue-700 dark:text-blue-300 font-semibold">
            {cert.topic}
          </p>
          <h3 className="mt-3 text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            {cert.title}
          </h3>
        </div>
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-200">
          {cert.issuer}
        </span>
      </div>

      <p className="text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300 mb-6">
        {cert.description}
      </p>

      <ul className="space-y-3 mb-6 text-sm text-slate-600 dark:text-slate-300">
        {cert.highlights.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-3 py-1.5">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Issued</span>
          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{cert.date}</span>
        </div>
        <button
          type="button"
          onClick={() => setSelectedCert(cert)}
          className="btn-primary w-full text-center"
        >
          View Certificate
        </button>
      </div>
    </article>
  );

  return (
    <section id="certifications" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 text-shadow">Certifications & Achievements</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-3xl mx-auto px-4">
            Explore the certifications that prove my technical foundations, enterprise experience, and ability to deliver smart solutions.
          </p>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {certifications.map(renderCertificateCard)}
        </div>

        <div
          className="md:hidden"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onFocus={() => setIsCarouselPaused(true)}
          onBlur={() => setIsCarouselPaused(false)}
        >
          <div key={certifications[activeCert].id} className="animate-capability-slide" aria-live="polite">
            {renderCertificateCard(certifications[activeCert], activeCert)}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => showCertificate(activeCert - 1)}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200"
              aria-label="Show previous certificate"
            >
              ←
            </button>
            <div className="flex gap-2" aria-label="Choose certificate">
              {certifications.map((cert, index) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => showCertificate(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeCert ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 dark:bg-slate-600"}`}
                  aria-label={`Show ${cert.title}`}
                  aria-current={index === activeCert ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => showCertificate(activeCert + 1)}
              className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200"
              aria-label="Show next certificate"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 sm:p-4">
          <div className="mx-auto my-3 flex w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-900 sm:my-4">
            <div className="relative flex flex-col gap-4 border-b border-slate-200 px-4 py-4 dark:border-slate-800 sm:px-6 sm:py-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300 font-semibold">Certificate Preview</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{selectedCert.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{selectedCert.topic} • {selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:static sm:ml-auto"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-6 overflow-y-auto p-4 sm:p-6 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="flex items-center justify-center overflow-auto rounded-[1.75rem] border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-950 sm:p-4">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="space-y-5">
                <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Description</p>
                  <p className="mt-3 text-slate-700 dark:text-slate-200 leading-7">{selectedCert.description}</p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Highlights</p>
                  <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                    {selectedCert.highlights.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center justify-center w-full"
                  >
                    Open Certificate
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
