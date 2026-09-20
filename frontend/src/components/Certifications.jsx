import { useState } from 'react';
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

  const renderCertificateCard = (cert) => (
    <article
      key={cert.id}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider font-mono font-semibold text-emerald-600 dark:text-emerald-400">
              {cert.topic}
            </p>
            <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {cert.title}
            </h3>
          </div>
          <span className="inline-flex items-center rounded-md bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 whitespace-nowrap">
            {cert.issuer}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          {cert.description}
        </p>

        <ul className="space-y-2 mb-6">
          {cert.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-3 py-1 text-xs">
          <span className="text-slate-400">Issued:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.date}</span>
        </div>
        <button
          type="button"
          onClick={() => setSelectedCert(cert)}
          className="btn-primary w-full text-center py-2.5 text-xs font-bold"
        >
          View Certificate
        </button>
      </div>
    </article>
  );

  return (
    <section id="certifications" className="section-padding max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Certifications &amp; <span className="text-emerald-600 dark:text-emerald-400">Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          Explore the certifications that prove my technical foundations, enterprise experience, and practical software skills.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map(renderCertificateCard)}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
          <div className="relative mx-auto my-4 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="relative flex flex-col gap-3 border-b border-slate-200 dark:border-slate-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  Certificate Preview
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedCert.topic} • {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors self-end sm:self-auto"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.3fr_0.9fr] items-center">
              <div className="flex items-center justify-center overflow-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-3">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  className="max-h-[55vh] w-full object-contain rounded-xl"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-5 border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-400 text-xs uppercase font-semibold tracking-wider">Description</p>
                  <p className="mt-2 text-slate-700 dark:text-slate-200 text-sm leading-relaxed">{selectedCert.description}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-5 border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-400 text-xs uppercase font-semibold tracking-wider">Highlights</p>
                  <ul className="mt-2.5 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {selectedCert.highlights.map((item) => (
                      <li key={item} className="flex gap-2.5 items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1 text-center py-2.5 text-xs font-bold"
                  >
                    Open Certificate
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="btn-secondary py-2.5 text-xs font-semibold"
                  >
                    Close
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
