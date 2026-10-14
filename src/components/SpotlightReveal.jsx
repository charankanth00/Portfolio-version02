import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowLeftRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * SpotlightReveal (Enhanced & Cleaned)
 * - Desktop: Soft, feathered circular reveal at cursor location.
 *   NO gun scopes, crosshairs, or artificial border rings.
 *   The edge blends seamlessly and naturally into the background.
 * - Mobile: Clean crossfade on scroll or tap toggle.
 */
export default function SpotlightReveal() {
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);

  // ----------------------------------------------------
  // DESKTOP NATURAL FEATHERED SPOTLIGHT LOGIC
  // ----------------------------------------------------
  const [isInside, setIsInside] = useState(false);
  const [spotlightRadius, setSpotlightRadius] = useState(240);

  // Raw mouse coordinates relative to hero container
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Silky smooth spring interpolation with natural physical damping
  const springConfig = { damping: 30, stiffness: 350, mass: 0.12 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Feathered radial gradient mask: smoothly falls off from center to 100% transparent.
  // Zero visible hard edge — perfectly blended transition between both photos.
  const maskImage = useMotionTemplate`radial-gradient(circle ${spotlightRadius}px at ${smoothX}px ${smoothY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 82%, rgba(0,0,0,0) 100%)`;

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    if (!isInside) setIsInside(true);
  };

  const handleMouseEnter = (e) => {
    setIsInside(true);
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w > 1600) setSpotlightRadius(260);
      else if (w > 1200) setSpotlightRadius(230);
      else setSpotlightRadius(190);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ----------------------------------------------------
  // MOBILE CLEAN CROSSFADE LOGIC (Scroll + Tap toggle)
  // ----------------------------------------------------
  const [mobileRevealed, setMobileRevealed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end start'],
  });

  const scrollCrossfadeOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  return (
    <div className="relative w-full">
      {/* ==================================================== */}
      {/* 1. DESKTOP VIEW (Soft, feathered cursor blend)       */}
      {/* ==================================================== */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block relative w-full h-screen overflow-hidden select-none cursor-default bg-[#05070D]"
        style={{ aspectRatio: '16/9', maxHeight: '100vh' }}
        aria-label="Interactive Hero image reveal: hover cursor anywhere to reveal Charan beneath Iron Man"
      >
        {/* Layer 1: Base Image (Iron Man Desktop 16:9) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={portfolioData.images.desktop.ironman}
            alt="Iron Man Cover"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle natural dark gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070D]/70 via-transparent to-[#05070D]/70 pointer-events-none" />
        </div>

        {/* Layer 2: Masked Soft-Blended Reveal Image (Charan's Photo Desktop 16:9) */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
            opacity: isInside ? 1 : 0,
            transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src={portfolioData.images.desktop.myphoto}
            alt={portfolioData.personal.name}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>

        {/* Ambient Bottom Fade for seamless section transition */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#05070D] via-[#05070D]/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* ==================================================== */}
      {/* 2. MOBILE VIEW (Clean crossfade on scroll or tap)    */}
      {/* ==================================================== */}
      <div
        ref={mobileContainerRef}
        onClick={() => setMobileRevealed((prev) => !prev)}
        className="block md:hidden relative w-full h-[80vh] overflow-hidden bg-[#05070D] select-none cursor-pointer"
        style={{ aspectRatio: '4/5' }}
        aria-label="Tap to toggle between Iron Man and Charan's photo"
      >
        {/* Layer 1: Base Mobile Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={portfolioData.images.mobile.ironman}
            alt="Iron Man Mobile"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-black/50 pointer-events-none" />
        </div>

        {/* Layer 2: Charan's Mobile Photo */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            opacity: mobileRevealed ? 1 : 0,
          }}
          style={{
            opacity: mobileRevealed ? 1 : scrollCrossfadeOpacity,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={portfolioData.images.mobile.myphoto}
            alt={portfolioData.personal.name}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-black/40 pointer-events-none" />
        </motion.div>

        {/* Clean Mobile Toggle Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={(e) => {
              e.stopPropagation();
              setMobileRevealed((prev) => !prev);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 text-xs font-mono text-cyan-300 shadow-xl"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-cyan-400" />
            <span>{mobileRevealed ? 'Show Iron Man' : 'Tap / Scroll to Reveal Charan'}</span>
          </motion.button>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05070D] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
