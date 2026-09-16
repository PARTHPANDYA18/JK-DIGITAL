"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Tablet, Smartphone, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const devices = [
  {
    id: "laptop",
    label: "MacBook Pro 16\"",
    icon: Laptop,
    specs: "3024 x 1964 Retina | 120Hz ProMotion",
    previewUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    headline: "Ultra-Wide Desktop Canvas",
    desc: "Spacious typography, cinematic video reels, and interactive 3D hero canvasses that captivate enterprise clients.",
  },
  {
    id: "tablet",
    label: "iPad Pro 12.9\"",
    icon: Tablet,
    specs: "2732 x 2048 Liquid Retina | Touch Optimized",
    previewUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    headline: "Fluid Tablet Adaptability",
    desc: "Adaptive bento layouts and gesture-friendly interfaces ensuring seamless navigation on the move.",
  },
  {
    id: "phone",
    label: "iPhone 16 Pro Max",
    icon: Smartphone,
    specs: "Super Retina XDR | 60fps Native Performance",
    previewUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    headline: "Thumb-First Mobile Funnel",
    desc: "Sticky WhatsApp CTAs, 1-tap dialers, and sub-second page loads capturing over 75% of your mobile traffic.",
  },
];

export default function DeviceMockupShowcase() {
  const [selectedDevice, setSelectedDevice] = useState("laptop");
  const current = devices.find((d) => d.id === selectedDevice) || devices[0];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-y border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FF6B00]/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Responsive Excellence
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            FLAWLESS ACROSS <span className="text-gradient-pure-orange">EVERY SCREEN.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            We don&apos;t just scale down desktop layouts. Every viewport is engineered with dedicated interactions for maximum conversion velocity.
          </p>

          {/* Device Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 mt-8 gap-2">
            {devices.map((dev) => {
              const Icon = dev.icon;
              const isSelected = selectedDevice === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setSelectedDevice(dev.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                    isSelected
                      ? "bg-[#FF6B00] text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  data-cursor-text="Device"
                >
                  <Icon className="w-4 h-4" />
                  <span>{dev.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Mockup Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Device Frame */}
          <div className="lg:col-span-8 flex justify-center">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-3xl rounded-3xl p-3 sm:p-5 glass-panel border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] perspective-1000 group hover:rotate-1 transition-transform duration-500"
            >
              {/* Device Window Bar */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400">
                  https://jkdigital.in/live-preview
                </div>
                <div className="w-12 text-right text-[10px] font-mono text-neutral-500">
                  SSL
                </div>
              </div>

              {/* Screen Preview Container */}
              <div className="relative h-72 sm:h-96 md:h-[420px] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={current.previewUrl}
                  alt={current.headline}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Live Floating Metric inside screen */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#FF6B00]/40 text-xs font-bold text-white flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Lighthouse Performance: 99/100</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-[#FF6B00] text-black font-bold text-xs shadow-lg">
                    60fps Smooth Motion
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Device Specs & Features */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A26]">
                {current.specs}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                {current.headline}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>Zero Layout Shift (CLS: 0.001) for smooth visual stability</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>Dynamic image downscaling serving optimal WebP & AVIF byte sizes</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>Cross-browser certified across Chrome, Safari, Firefox, Edge</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                  Average Load Time
                </span>
                <span className="font-heading font-black text-xl text-[#FF6B00]">
                  0.74 Seconds
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                  Core Web Vitals
                </span>
                <span className="font-heading font-black text-xl text-green-400">
                  100% Passed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
