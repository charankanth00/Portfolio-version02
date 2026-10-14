import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Navbar (Enhanced for Charan)
 * Ultra-premium glassmorphic header with smooth-scroll section links,
 * live hiring badge, and quick resume link.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', index: '01' },
    { label: 'Skills', href: '#skills', index: '02' },
    { label: 'Projects', href: '#projects', index: '03' },
    { label: 'Contact', href: '#contact', index: '04' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#05070D]/85 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo / Moniker */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
              CH
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
                ENGINEER // 2025
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group flex items-center gap-1.5 text-xs font-mono tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-cyan-400/60 group-hover:text-cyan-400 text-[10px] transition-colors">
                  {link.index}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Quick Contact */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-300 transition-all hover:border-cyan-500/40"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-30 p-6 bg-[#05070D]/95 backdrop-blur-2xl border-b border-white/10 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-sm font-mono text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-cyan-400 text-xs">{link.index}</span>
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Resume (PDF)</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-black text-xs font-mono font-semibold"
                >
                  <span>Connect with Charan</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
