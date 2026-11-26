export default function ProfileServicesCard() {
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl glass-card p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 hover:border-emerald-500/40 text-left">
      {/* Profile Header */}
      <div className="pb-5 mb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            Professional Profile
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Active
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Berihu Araya Gebrihans
        </h3>
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
          Software Engineer
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          B.Sc. Computer Science &amp; Engineering (MU-MIT) • Addis Ababa, Ethiopia
        </p>
      </div>

      {/* Services Section */}
      <div>
        <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
          Core Services &amp; Expertise
        </h4>

        <div className="space-y-3.5">
          {/* Service 1: MERN Full Stack */}
          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-emerald-500/40">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-bold">
                🌐
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                MERN Full Stack Developer
              </h5>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
              Building responsive, high-performance web applications with React.js, Next.js, Node.js, Express.js, MongoDB, and RESTful APIs.
            </p>
          </div>

          {/* Service 2: Odoo ERP Developer */}
          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-emerald-500/40">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-bold">
                ⚙️
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Odoo ERP Developer
              </h5>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
              Customizing Odoo ERP modules (Sales, Accounting, Inventory, POS, CRM), automating business workflows, XML views, and PostgreSQL optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Production Footnote */}
      <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <a
          href="https://erp.niyatconsultancy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
        >
          <span>Live ERP: erp.niyatconsultancy.com</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
