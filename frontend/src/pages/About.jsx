export default function About() {
  return (
    <section className="section-padding max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">About Me</h2>
        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow fade-in">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3 md:mb-4">About Me</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              Software Engineer with professional experience as a Full-Stack MERN Developer & Odoo ERP Developer. Expert in
              developing Web Apps & Enterprise Business Solutions. Proficient in React.js, Node.js, Express.js, Python, Django, Odoo
              ERP & databases like PostgreSQL & MongoDB, with hands-on experience developing RESTful APIs, customizing ERP
              modules, and optimizing backend systems. Passionate about delivering clean, maintainable, and high-performance
              software that solves real-world business challenges
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3 md:mb-4">My Approach</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              I focus on building clean, maintainable, and scalable software solutions
              that solve real-world problems. With expertise in modern web technologies
              and enterprise systems, I deliver high-quality applications that drive
              business success.
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 fade-in-delayed">
          <div className="bg-white rounded-xl p-5 md:p-6 card-shadow">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-xl">🎓</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base">Education</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">Mekelle University-Mekelle Institute Of Technology(MU-MIT)</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">Bachelor's Degree - Computer Science and Engineering</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 md:p-6 card-shadow">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-xl">💻</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base">Specialization</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">Full-Stack Development & Odoo ERP Systems</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 md:p-6 card-shadow">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-xl">🚀</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base">Focus</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">Scalable & Maintainable Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
