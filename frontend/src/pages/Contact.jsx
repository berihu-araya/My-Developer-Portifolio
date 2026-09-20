import { useState } from "react";

export default function Contact() {
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);

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
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
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

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to send message. Please try again or reach out via email directly.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <div className="badge-brand mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Direct Communication
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          Get In <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your ideas to life? Let&apos;s discuss your next project, explore collaboration opportunities, or create scalable business solutions together.
        </p>
      </div>

      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Contact Channels
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you have a question, an opportunity, or want to discuss full-stack &amp; Odoo ERP development, feel free to reach out directly.
            </p>

            {/* Direct Info Items with One-Click Copy */}
            <div className="space-y-3 pt-2">
              {/* Email Item */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Email Address</p>
                    <a href="mailto:berihuaraya374@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors">
                      berihuaraya374@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy("berihuaraya374@gmail.com", "email")}
                  className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </span>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Phone Item */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Phone / WhatsApp</p>
                    <a href="tel:+251972129362" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors">
                      +251 972 129 362
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy("+251972129362", "phone")}
                  className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </span>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Addis Abeba, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <p className="text-xs text-emerald-900 dark:text-emerald-200 font-medium">
                Fast Response: Typically responds within 24 hours
              </p>
            </div>

            {/* Social Link Cards */}
            <div className="pt-2">
              <p className="text-xs uppercase font-mono font-semibold text-slate-400 tracking-wider mb-3">
                Let&apos;s Connect
              </p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/berihu-araya-159b0033b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200 group text-center"
                >
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0H5C3.346 0 2 1.346 2 3v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3zM8.5 20H6V9.5h2.5V20zm-1.25-12C6.01 8 5 6.99 5 5.75S6.01 3.5 7.25 3.5 9.5 4.51 9.5 5.75 8.49 8 7.25 8zM18 20h-2.5v-5.75c0-1.375-.025-3.14-1.915-3.14-1.915 0-2.21 1.5-2.21 3.05V20H9V9.5h2.4v1.4h.03c.34-.64 1.17-1.32 2.41-1.32 2.58 0 3.06 1.7 3.06 3.92V20z" />
                  </svg>
                  <span className="text-[11px] font-semibold">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/berihu-araya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200 group text-center"
                >
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297a12 12 0 0 0-3.79 23.403c.6.11.82-.26.82-.577v-2.034c-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.776.42-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018 0 2.043.138 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.824.576A12.004 12.004 0 0 0 12 .297z" />
                  </svg>
                  <span className="text-[11px] font-semibold">GitHub</span>
                </a>

                <a
                  href="https://web.facebook.com/berihu.araya.969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200 group text-center"
                >
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764V11.01h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                  </svg>
                  <span className="text-[11px] font-semibold">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Fill out the details below, and I will get back to you soon.
            </p>

            <form onSubmit={submitHandler} className="space-y-4 sm:space-y-5">
              {submitStatus === "success" && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-200">
                    Message sent successfully! I will review your note and respond promptly.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-red-800 dark:text-red-200">
                    {errors.submit || "Failed to send message. Please email me directly at berihuaraya374@gmail.com"}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    maxLength={50}
                    value={form.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="e.g. Berihu Araya"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    maxLength={254}
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="e.g. your.email@example.com"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  rows={4}
                  id="contact-message"
                  maxLength={500}
                  value={form.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none transition-all ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-emerald-500"
                  }`}
                />
                <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                  {errors.message ? <span className="text-red-500">{errors.message}</span> : <span></span>}
                  <span>{form.message.length}/500</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3.5 text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
