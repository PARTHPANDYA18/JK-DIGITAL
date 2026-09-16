"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    subtitle: "Understanding Your Unit Economics",
    description:
      "We dive deep into your target customer profile, current customer acquisition cost (CAC), average order value (AOV), and competitors to locate untapped revenue gaps.",
    deliverables: ["Competitor SWOT Matrix", "Customer Persona Archetype", "Initial Revenue Audit"],
  },
  {
    step: "02",
    title: "Market & Keyword Intelligence",
    subtitle: "Reverse-Engineering Market Demand",
    description:
      "We analyze exact commercial keyword queries, competitor Google Ads bids, and trending short-form content to formulate a bulletproof plan.",
    deliverables: ["High-Intent Keyword Blueprint", "Ad Spy Competitor Report", "Information Architecture"],
  },
  {
    step: "03",
    title: "Full-Funnel Growth Strategy",
    subtitle: "Connecting the Dots for Conversions",
    description:
      "We design the entire customer journey: from the first click on Google or Instagram to the high-converting landing page, WhatsApp follow-up, and closed sale.",
    deliverables: ["Conversion Funnel Wireframe", "Ad Campaign Hierarchy", "Messaging & Offer Architecture"],
  },
  {
    step: "04",
    title: "Luxury UI/UX & Prototyping",
    subtitle: "Aesthetic Precision in Figma",
    description:
      "We design a state-of-the-art interface that makes your brand look like an undeniable industry leader. Every interaction is tested for micro-delight and conversion psychology.",
    deliverables: ["High-Fidelity Interactive Figma Prototype", "Design System & Component Library", "Motion Specs"],
  },
  {
    step: "05",
    title: "Next.js Full-Stack Engineering",
    subtitle: "High-Speed, 60fps Code",
    description:
      "We bring the designs to life using Next.js 15 App Router, React 19, Tailwind CSS, and Framer Motion. Zero lag, 98+ Lighthouse scores, and airtight security.",
    deliverables: ["Clean Modular Next.js Codebase", "Headless CMS Integration", "Lighthouse 98+ Certification"],
  },
  {
    step: "06",
    title: "Traffic & Ad Funnel Launch",
    subtitle: "Turn on the Lead Pipeline",
    description:
      "We launch laser-targeted Google Search & PMax ads, deploy technical SEO schema, and kick off viral short-form video distribution.",
    deliverables: ["Google Ads Live Setup", "GA4 & Meta Conversion API", "Local Maps 3-Pack Optimization"],
  },
  {
    step: "07",
    title: "Scale & Revenue Compounding",
    subtitle: "Continuous Optimization & Scaling",
    description:
      "We don't just launch and disappear. We monitor heatmaps, A/B test headlines, refine negative keywords, and scale budgets as profitability proves out.",
    deliverables: ["Bi-Weekly Optimization Sprints", "Live ROAS Dashboard", "Continuous A/B Experimentation"],
  },
];

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            7-Stage Methodology
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white">
            THE ENGINE BEHIND <span className="text-gradient-pure-orange">PREDICTABLE GROWTH.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            A battle-tested 7-stage roadmap refined across 500+ projects to guarantee maximum conversion and market leadership.
          </p>
        </div>

        {/* Step Selector Pills Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {steps.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`px-5 py-3 rounded-2xl shrink-0 flex items-center gap-2.5 transition-all text-xs font-heading font-bold tracking-wider ${
                activeStepIndex === idx
                  ? "bg-[#FF6B00] text-black shadow-[0_0_25px_rgba(255,107,0,0.5)] scale-105"
                  : "glass-panel text-neutral-400 hover:text-white border border-white/5"
              }`}
              data-cursor-text="Step"
            >
              <span className="font-mono text-sm opacity-80">{item.step}</span>
              <span className="truncate max-w-[130px]">{item.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Card */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#FF6B00]/30 shadow-[0_15px_60px_-15px_rgba(255,107,0,0.2)] max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Watermark Step Number */}
          <div className="absolute right-4 bottom-2 font-mono font-black text-8xl sm:text-9xl text-white/[0.03] select-none pointer-events-none">
            {activeStep.step}
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md bg-[#FF6B00]/20 text-[#FF6B00] font-mono text-xs font-bold tracking-widest uppercase">
                STAGE {activeStep.step} OF 07
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {activeStep.subtitle}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-4">
              {activeStep.title}
            </h3>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {activeStep.description}
            </p>

            {/* Deliverables Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF8A26] mb-3">
                Key Deliverables & Milestones:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeStep.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Step Nav */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="text-xs font-semibold text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
              >
                ← Previous Stage
              </button>

              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#FF8A26] disabled:opacity-30 transition-colors"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
