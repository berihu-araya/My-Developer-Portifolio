import { useState } from "react";

export default function Contact() {
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (form.message.trim().length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 text-shadow">Get In Touch</h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mt-4 max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="fade-in">
            <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 md:mb-6">Send a Message</h3>
              <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4 md:mb-6">
                    <div className="flex items-center">
                      <span className="text-green-500 text-xl mr-3">✓</span>
                      <p className="text-green-800 dark:text-green-300 font-medium text-sm md:text-base">Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-4 md:mb-6">
                    <div className="flex items-center">
                      <span className="text-red-500 text-xl mr-3">✕</span>
                      <p className="text-red-800 dark:text-red-300 font-medium text-sm md:text-base">Failed to send message. Please try again or contact me directly.</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      maxLength={50}
                      value={form.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 ${
                        errors.name ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 ${
                        errors.email ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    id="contact-message"
                    maxLength={500}
                    value={form.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm resize-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 ${
                      errors.message ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 dark:border-slate-600'
                    }`}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                  <p aria-live="polite" className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    {form.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 fade-in-delayed">
            <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 md:mb-6">Contact Information</h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-white text-lg md:text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">berihuaraya374@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-white text-lg md:text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">+251 972 129 362</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-white text-lg md:text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">Mekelle, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 md:p-8 card-shadow">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 md:mb-4">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="flex gap-3 md:gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
