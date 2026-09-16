"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronDown, CheckCircle2, Flame } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "120+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "97%", label: "Client Retention" },
];

const headlineFirstLine = ["WE", "DON'T", "BUILD", "WEBSITES."];
const headlineSecondLine = ["WE", "BUILD", "DIGITAL", "GROWTH", "MACHINES."];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Particle WebGL Canvas */}
      <ParticleBackground />

      {/* Ambient Gradient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#FF6B00]/15 via-[#FF8A26]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FF6B00]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center mt-6 sm:mt-12">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#FF6B00]/30 shadow-[0_0_20px_rgba(255,107,0,0.2)] mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F8F8F8]">
            Ahmedabad & Pan-India Growth Agency
          </span>
          <span className="text-[#FF6B00] font-bold text-xs">2026 Ready</span>
        </motion.div>

        {/* Staggered Headline */}
        <div className="flex flex-col items-center font-heading font-black tracking-tighter leading-[0.95] text-white">
          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {headlineFirstLine.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + idx * 0.08,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="inline-block text-neutral-300"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 mt-2 sm:mt-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            {headlineSecondLine.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.45 + idx * 0.08,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className={
                  word === "GROWTH" || word === "MACHINES."
                    ? "inline-block text-gradient-pure-orange font-black drop-shadow-[0_0_35px_rgba(255,107,0,0.4)]"
                    : "inline-block text-white"
                }
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-6 sm:mt-8 text-neutral-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed font-normal"
        >
          Helping businesses across <span className="text-white font-medium">Ahmedabad</span>, <span className="text-white font-medium">Gujarat</span>, and <span className="text-white font-medium">India</span> generate predictable revenue through custom Next.js Websites, SEO dominance, high-ROAS Google Ads, and luxury Brand Identity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] shadow-[0_0_35px_rgba(255,107,0,0.5)] hover:shadow-[0_0_55px_rgba(255,107,0,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            data-cursor-text="Launch"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/audit"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-semibold text-sm uppercase tracking-wider text-white glass-panel hover:bg-white/10 border border-white/10 hover:border-[#FF6B00]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            data-cursor-text="Audit"
          >
            <Sparkles className="w-4 h-4 text-[#FF6B00]" />
            <span>Get Free Marketing Audit</span>
          </Link>
        </motion.div>

        {/* Trust Highlight Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-6 flex items-center gap-4 text-xs text-neutral-400"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
            No Long-Term Lock-in
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#FF6B00]" />
            ROI Focused Deliverables
          </span>
        </motion.div>
      </div>

      {/* Animated Statistics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.25 }}
        className="relative z-10 max-w-6xl mx-auto w-full mt-16 sm:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight text-gradient-orange">
              {stat.value}
            </span>
            <span className="mt-1 text-xs sm:text-sm text-neutral-400 font-medium uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 flex flex-col items-center mt-8 text-neutral-500 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
        }}
      >
        <span className="text-[10px] tracking-widest uppercase mb-1">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#FF6B00]" />
      </motion.div>
    </section>
  );
}
