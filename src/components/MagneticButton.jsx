import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { FileDown, Sparkles } from 'lucide-react';

/**
 * Premium Magnetic Button with spring physics and an animated glowing border.
 * Pulls subtly toward the user's cursor when hovered.
 */
export default function MagneticButton({ 
  href = "/resume.pdf", 
  label = "View / Download Resume",
  className = "" 
}) {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Spring physics for buttery organic magnetic pull
  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Micro spring for inner content parallax
  const contentX = useSpring(0, { damping: 20, stiffness: 220 });
  const contentY = useSpring(0, { damping: 20, stiffness: 220 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull strength (capped)
    const maxPull = 22;
    const pullX = Math.max(-maxPull, Math.min(maxPull, distanceX * 0.45));
    const pullY = Math.max(-maxPull, Math.min(maxPull, distanceY * 0.45));

    x.set(pullX);
    y.set(pullY);
    contentX.set(pullX * 0.35);
    contentY.set(pullY * 0.35);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    contentX.set(0);
    contentY.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-block group select-none ${className}`}
    >
      {/* Outer ambient pulsing glow */}
      <div 
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse-slow" 
      />

      {/* Animated gradient border wrapper */}
      <div className="relative rounded-full p-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500">
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ x: contentX, y: contentY }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#090D18]/90 backdrop-blur-xl border border-white/10 text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 group-hover:bg-[#0e1424]/95 group-hover:border-white/20 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          aria-label="View or download curriculum vitae (PDF)"
        >
          {/* Subtle particle / light sweep sheen */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
          </div>

          <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
            <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </span>

          <span className="relative z-10 font-medium font-sans">
            {label}
          </span>

          <span className="relative z-10 text-xs px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 font-mono hidden sm:inline-block border border-white/5">
            PDF
          </span>
          
          <Sparkles className="w-3.5 h-3.5 text-amber-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      </div>
    </motion.div>
  );
}
