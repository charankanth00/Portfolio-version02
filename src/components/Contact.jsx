import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, Mail, MapPin, Briefcase, GraduationCap, Clock } from 'lucide-react';
import Toast from './Toast';
import { portfolioData } from '../data/portfolioData';

/**
 * Contact Section (Tailored for Charan)
 * Minimalist contact form for recruiters and hiring managers.
 * Direct fetch POST to Google Apps Script Web App URL with loading spinner and toast.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time Software Engineer Role',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    type: 'success',
    title: 'Message Dispatched',
    message: "Thank you! I will get back to you within 24 hours.",
  });

  const subjectOptions = [
    'Full-Time Software Engineer Role',
    'Java / Backend Opportunity',
    'DevOps / Cloud Engineering',
    'General Inquiry',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToastMessage({
        type: 'error',
        title: 'Missing Fields',
        message: 'Please complete all required fields before dispatching.',
      });
      setShowToast(true);
      return;
    }

    setStatus('loading');

    const scriptUrl = portfolioData.contactConfig.googleScriptUrl;
    const isPlaceholder = !scriptUrl || scriptUrl.includes('PLACEHOLDER');

    try {
      if (isPlaceholder) {
        // DEMO MODE: Simulates transmission before real Google Script deployment
        console.info(
          '%c[Static Contact Form Demo]%c Simulating transmission to Google Apps Script. Deploy Code.gs and update googleScriptUrl in src/data/portfolioData.js to connect to your live Google Sheet.',
          'background: #00F0FF; color: black; font-weight: bold; padding: 2px 6px; border-radius: 4px;',
          'color: #94A3B8; padding: 2px 4px;'
        );
        await new Promise((resolve) => setTimeout(resolve, 1400));
      } else {
        // LIVE GOOGLE APPS SCRIPT POST SUBMISSION
        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('subject', formData.subject);
        formPayload.append('message', formData.message);
        formPayload.append('timestamp', new Date().toISOString());

        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formPayload,
        });
      }

      setStatus('success');
      setToastMessage({
        type: 'success',
        title: 'Transmission Dispatched',
        message: `Thank you, ${formData.name}. Your message has been sent to Charan. Expect a prompt response within 24 hours!`,
      });
      setShowToast(true);

      setFormData({
        name: '',
        email: '',
        subject: 'Full-Time Software Engineer Role',
        message: '',
      });

      setTimeout(() => setStatus('idle'), 3500);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setToastMessage({
        type: 'error',
        title: 'Transmission Failed',
        message: 'Unable to reach the static endpoint. Please send an email directly to ' + portfolioData.personal.email,
      });
      setShowToast(true);
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#05070D] overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
                // 04. GET IN TOUCH
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-cyan-500/60 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white"
            >
              Let's Connect &amp; Collaborate.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-md text-sm sm:text-base font-light"
          >
            I am actively interviewing for Entry-level, Associate Software Engineer, and Backend/Full-Stack opportunities. Send a message below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="p-7 rounded-3xl glass-card border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                  {portfolioData.personal.status}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white">
                Ready for Immediate Joining
              </h3>
              <p className="text-gray-400 text-sm font-light mt-2 leading-relaxed">
                Available for full-time engineering positions, technical assessments, and interviews.
              </p>

              <div className="mt-6 space-y-4 pt-6 border-t border-white/10 font-mono text-xs">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-cyan-300 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Batch: {portfolioData.personal.graduationYear}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>SLA: Response {portfolioData.contactConfig.responseTime}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.015] border border-white/5 font-mono text-xs text-gray-400 space-y-1.5">
              <span className="text-cyan-400 font-semibold uppercase tracking-wider block">
                ⚡ Static Google Sheets Integration
              </span>
              <p className="text-[11px] leading-relaxed text-gray-400">
                Form dispatches directly to an automated Google Sheets database with zero third-party middleware.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative"
            >
              {/* Inquiry Type Chips */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  Opportunity / Inquiry Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjectOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData((prev) => ({ ...prev, subject: opt }))}
                      className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                        formData.subject === opt
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                          : 'bg-white/[0.03] text-gray-400 border border-white/5 hover:border-white/20 hover:text-gray-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Your Name / Recruiter <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-gray-600 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-gray-600 font-sans"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the role, technical requirements, or schedule an interview..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-gray-600 font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-gray-500 hidden sm:inline">
                  🔒 Encrypted Static POST Submission
                </span>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className={`relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold font-mono tracking-wider transition-all duration-300 shadow-lg ${
                    status === 'loading'
                      ? 'bg-cyan-500/40 text-cyan-200 cursor-wait'
                      : status === 'success'
                      ? 'bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,240,255,0.35)]'
                  }`}
                >
                  {status === 'loading' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>DISPATCHING...</span>
                    </>
                  )}

                  {status === 'success' && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      <span>DISPATCHED!</span>
                    </>
                  )}

                  {status === 'idle' && (
                    <>
                      <span>SEND INQUIRY</span>
                      <Send className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <span>RETRY SEND</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        type={toastMessage.type}
        title={toastMessage.title}
        message={toastMessage.message}
        duration={5000}
      />
    </section>
  );
}
