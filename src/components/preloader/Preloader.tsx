"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = [
  "JK DIGITAL SOLUTIONS",
  "Website Development",
  "SEO & Local 3-Pack",
  "Google Ads & PPC",
  "Brand Identity",
  "Digital Growth Machines"
];

export default function Preloader() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this tab session
    const hasSeenPreloader = sessionStorage.getItem("jk_preloader_seen");
    if (hasSeenPreloader) {
      setIsLoaded(true);
      return;
    }

    // Interval for progress and word cycling
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            sessionStorage.setItem("jk_preloader_seen", "true");
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          y: "-100%",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }}
        className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#050505] text-[#F8F8F8] overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
          {/* JK Monogram Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 flex items-center justify-center"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.25)]">
              <span className="font-heading text-3xl font-extrabold tracking-tighter text-white">
                JK
              </span>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF6B00] shadow-[0_0_12px_#FF6B00]" />
            </div>
          </motion.div>

          {/* Rotating Text */}
          <div className="h-9 mb-6 overflow-hidden flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="font-heading text-sm md:text-base font-semibold tracking-widest uppercase text-white/90"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Orange Progress Bar */}
          <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden border border-white/5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] shadow-[0_0_15px_#FF6B00]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Percentage Counter */}
          <div className="mt-4 flex items-center justify-between w-full text-xs font-mono text-neutral-400">
            <span>INITIALIZING EXPERIENCE</span>
            <span className="text-[#FF6B00] font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
