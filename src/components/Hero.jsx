import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap, Zap, Sparkles } from 'lucide-react';
import SpotlightReveal from './SpotlightReveal';
import MagneticButton from './MagneticButton';
import { portfolioData } from '../data/portfolioData';

/**
 * Hero Section (Enhanced & Cleaned for Charan)
 * - Seamless feathered spotlight image reveal underneath
 * - Clean recruiter-friendly status badges
 * - Magnetic resume button
 */
export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#05070D]">
      {/* 1. Fullscreen Image Reveal Hook (Soft blended spotlight) */}
      <SpotlightReveal />

      {/* 2. Top-Left Floating Identity & Hiring Beacon */}
      <div className="absolute top-24 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {/* Recruiter-Friendly Hiring Beacon */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-200 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider uppercase text-[11px] text-emerald-300 font-semibold">
              Actively Seeking Job Opportunities
            </span>
            <span className="text-white/20">|</span>
            <span className="text-cyan-400 text-[11px] font-mono">2025 Graduate</span>
          </div>

          {/* Hero Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight font-display text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            {portfolioData.personal.name}
          </h1>

          {/* Role & Core Focus */}
          <p className="text-base sm:text-xl lg:text-2xl text-gray-200 max-w-xl font-display font-medium drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            Software Engineer &amp; Developer
          </p>

          <p className="text-xs sm:text-sm text-gray-400 max-w-md font-sans font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-relaxed">
            Proficient in <span className="text-cyan-300 font-medium">C</span>, <span className="text-cyan-300 font-medium">Java</span>, <span className="text-cyan-300 font-medium">Python</span>, <span className="text-gray-200">HTML/CSS</span>, <span className="text-gray-200">SQL</span>, <span className="text-purple-300 font-medium">Linux</span> &amp; <span className="text-amber-300 font-medium">DevOps tools</span>.
          </p>

          {/* Quick hiring chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              Passed Out: 2025
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Immediate Joiner
            </span>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Hero Action Layer */}
      <div className="absolute bottom-6 sm:bottom-10 inset-x-0 px-6 sm:px-12 lg:px-16 z-20 flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-none">
        {/* Left: Clean Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden sm:flex items-center gap-4 text-xs font-mono text-gray-400 pointer-events-auto"
        >
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300"
            aria-label="Scroll down to About section"
          >
            <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce group-hover:text-cyan-300" />
            <span className="tracking-wider uppercase text-[11px]">Explore Profile &amp; Projects</span>
          </button>
        </motion.div>

        {/* Right / Center: THE MAGNETIC RESUME BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pointer-events-auto w-full sm:w-auto flex justify-center sm:justify-end"
        >
          <MagneticButton
            href={portfolioData.personal.resumeUrl}
            label="View / Download Resume"
          />
        </motion.div>
      </div>

      {/* Subtle Bottom Ambient Divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
    </section>
  );
}
