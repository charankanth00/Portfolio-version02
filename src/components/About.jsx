import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * About Me Section (Enhanced for Charan)
 * 2-column layout highlighting 2025 graduation, foundational engineering skills,
 * Java internship experience, and readiness for a full-time software engineering role.
 */
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#05070D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12 sm:mb-16"
        >
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
            // 01. ABOUT &amp; BACKGROUND
          </span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-cyan-500/60 to-transparent" />
        </motion.div>

        {/* 2-Column Asymmetrical Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* LEFT COLUMN: Bold Animated Typography Headline */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display tracking-tight text-white leading-[1.14]">
              2025 Engineering Graduate eager to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                build real-world software
              </span>{' '}
              with speed &amp; precision.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Equipped with strong programming fundamentals in C, Java, and Python, practical experience building backend systems during my Java internship, and working knowledge of modern web technologies, databases, and DevOps automation.
            </p>

            {/* Practical Focus Card */}
            <div className="mt-4 p-5 rounded-2xl glass-card border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
              <div className="flex items-start gap-3.5 relative z-10">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-wider text-cyan-300 uppercase">
                    Ready for Production Roles
                  </h4>
                  <p className="text-sm text-gray-300 mt-1 font-mono">
                    "Deep theoretical comprehension grounded in practical coding, disciplined version control, and Linux command-line efficiency."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Bio & Key Highlights */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col gap-8">
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
              {portfolioData.personal.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-300 font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {portfolioData.personal.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-gray-400 mt-2 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>VIEW FEATURED PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
              >
                <span>CONNECT FOR INTERVIEWS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
