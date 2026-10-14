import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';

/**
 * Premium Floating Toast Notification
 * Shows at the bottom center of the screen with glowing border, spring entrance, and auto-dismiss.
 */
export default function Toast({ 
  show, 
  onClose, 
  type = 'success', 
  title = 'Message Dispatched', 
  message = "Transmission received! I'll get back to you within 24 hours.",
  duration = 5000 
}) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 260 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-md pointer-events-auto"
        >
          {/* Outer glowing border wrapper */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.3)]">
            <div className="relative rounded-2xl bg-[#090D18]/95 backdrop-blur-2xl p-4 sm:p-5 flex items-start gap-3.5">
              {/* Type Icon */}
              <div className="flex-shrink-0 mt-0.5">
                {type === 'success' ? (
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Message Content */}
              <div className="flex-grow min-w-0 pr-2">
                <h4 className="text-sm font-semibold font-display text-white tracking-wide">
                  {title}
                </h4>
                <p className="text-xs text-gray-300 font-sans font-light mt-0.5 leading-relaxed">
                  {message}
                </p>
              </div>

              {/* Dismiss Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Dismiss toast"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Animated Progress Bar */}
              <div className="absolute bottom-0 inset-x-4 h-[2px] bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: duration / 1000, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
