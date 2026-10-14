import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Footer (Enhanced for Charan)
 * Minimalist luxury dark footer with live clock telemetry,
 * status beacon, social links, and smooth back-to-top trigger.
 */
export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 px-6 sm:px-12 lg:px-20 bg-[#030509] border-t border-white/5 text-gray-400 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Identity & Status */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold font-mono text-xs">
                CH
              </div>
              <span className="font-display font-bold text-white tracking-wide">
                {portfolioData.personal.name}
              </span>
              <span className="text-gray-600">·</span>
              <span className="text-xs font-mono text-cyan-400">SOFTWARE ENGINEER (2025)</span>
            </div>

            <p className="text-xs text-gray-500 max-w-sm font-light">
              Crafting reliable software solutions across Java, C, Python, Web, DevOps, SQL, and Linux.
            </p>
          </div>

          {/* Live Telemetry Time */}
          <div className="flex items-center gap-6 font-mono text-xs">
            <div className="p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">STATION TIME</span>
                <span className="text-gray-200 font-mono tracking-wider">{currentTime || 'SYNCING...'}</span>
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Socials & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved · Built with React &amp; Vite.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
