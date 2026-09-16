"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, Zap, ShieldCheck, BarChart3, Clock } from "lucide-react";

const comparisonData = [
  {
    feature: "Technology Stack",
    traditional: "Overloaded WordPress plugins, slow Elementor themes",
    jkDigital: "Next.js 15, React 19, Tailwind CSS, Edge CDN",
    advantage: "Sub-second load times & 99% Lighthouse score",
  },
  {
    feature: "Client Reporting",
    traditional: "Monthly vague PDF reports with vanity impression stats",
    jkDigital: "24/7 Live Dashboard tracking actual leads, CPL & ROAS",
    advantage: "100% financial transparency",
  },
  {
    feature: "Lead Qualification",
    traditional: "Unfiltered forms leading to spam and bogus inquiries",
    jkDigital: "Pre-qualified funnels with WhatsApp and OTP verification",
    advantage: "Higher closing rate for sales team",
  },
  {
    feature: "Speed & Execution",
    traditional: "3 to 5 months with endless revisions and communication delays",
    jkDigital: "Agile 2 to 4 week launch sprints with daily slack/WhatsApp updates",
    advantage: "Go to market 3x faster",
  },
  {
    feature: "Core Focus",
    traditional: "Selling generic packages and locking you into 12-month retainers",
    jkDigital: "Custom growth roadmaps engineered around your actual revenue goals",
    advantage: "Maximum measurable ROI",
  },
];

const pillars = [
  {
    icon: Clock,
    title: "24/7 Dedicated Support",
    desc: "Direct access to your dedicated account strategist via WhatsApp. Emergency updates handled within hours, not days.",
  },
  {
    icon: BarChart3,
    title: "Transparent Live Reporting",
    desc: "Real-time Google Looker Studio dashboard connected directly to Google Ads, GA4, and CRM pipelines.",
  },
  {
    icon: Zap,
    title: "Relentless ROI Focus",
    desc: "We prioritize bottom-line revenue over vanity likes. Every rupee of ad spend is engineered for maximum return.",
  },
  {
    icon: ShieldCheck,
    title: "Turnkey Fast Delivery",
    desc: "Production-ready web builds in 2 to 4 weeks. Fully tested across 40+ viewports and devices with zero code bloat.",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<"matrix" | "pillars">("matrix");

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-y border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF6B00]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Competitive Advantage
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white">
            WHY VISIONARY BRANDS CHOOSE <span className="text-gradient-pure-orange">JK DIGITAL.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            See the unmistakable difference between an outdated traditional agency and our modern growth engineering studio.
          </p>

          {/* Toggle buttons */}
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/10 mt-8">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === "matrix"
                  ? "bg-[#FF6B00] text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Side-By-Side Comparison
            </button>
            <button
              onClick={() => setActiveTab("pillars")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === "pillars"
                  ? "bg-[#FF6B00] text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Core Agency Pillars
            </button>
          </div>
        </div>

        {activeTab === "matrix" ? (
          /* Interactive Comparison Table */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-x-auto rounded-2xl border border-white/10 glass-panel shadow-2xl"
          >
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-5 font-heading text-xs font-bold uppercase tracking-wider text-neutral-400 w-1/4">
                    Key Factor
                  </th>
                  <th className="p-5 font-heading text-xs font-bold uppercase tracking-wider text-neutral-400 w-1/3">
                    Traditional Agencies
                  </th>
                  <th className="p-5 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B00] bg-[#FF6B00]/10 w-5/12">
                    JK Digital Solutions (2026)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-heading font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="p-5 text-neutral-400 flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="p-5 text-white bg-[#FF6B00]/5 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <div>
                          <p>{row.jkDigital}</p>
                          <span className="inline-block mt-1 text-[11px] text-[#FF8A26] font-semibold">
                            ★ {row.advantage}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          /* Feature Pillars Grid */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel p-8 border border-white/10 hover:border-[#FF6B00]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-all mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#FF6B00] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
