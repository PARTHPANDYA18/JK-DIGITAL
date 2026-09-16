"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, CheckCircle2, Trophy, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const sampleKeywords = [
  { keyword: "best dental implant clinic ahmedabad", initialRank: 48, currentRank: 1, volume: "4,400/mo" },
  { keyword: "luxury 4 bhk apartments sg highway", initialRank: 62, currentRank: 1, volume: "6,600/mo" },
  { keyword: "fine dining restaurant bodakdev", initialRank: 35, currentRank: 2, volume: "8,100/mo" },
  { keyword: "industrial machinery exporters gujarat", initialRank: 78, currentRank: 1, volume: "3,200/mo" },
];

const technicalChecklist = [
  { name: "Core Web Vitals LCP < 1.2s", status: "Passed", score: "99/100" },
  { name: "Schema.org Rich Snippet Entities", status: "Active", score: "100%" },
  { name: "Canonical URL & Indexing Integrity", status: "Zero Errors", score: "100%" },
  { name: "Topical Content Cluster Map", status: "Complete", score: "45 Nodes" },
];

export default function SeoRankingSection() {
  const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-t border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#FF6B00]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Organic Search Dominance
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            WE DON&apos;T HOPE FOR RANKINGS. <span className="text-gradient-pure-orange">WE ENGINEER #1.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Experience the compounding power of technical SEO, topical authority clusters, and authoritative digital PR backlinks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Keyword Ranking Tracker */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#FF6B00]" />
                  <span className="font-heading font-bold text-base text-white">
                    Live Client Search Positions (SERP)
                  </span>
                </div>
                <span className="text-xs font-mono text-[#FF8A26] bg-[#FF8A26]/10 px-2.5 py-1 rounded-full">
                  15,000+ Page 1 Positions
                </span>
              </div>

              <div className="space-y-4 pt-6">
                {sampleKeywords.map((item, idx) => {
                  const isSelected = activeKeywordIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      onClick={() => setActiveKeywordIndex(idx)}
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#FF6B00]/10 border-[#FF6B00]/60 shadow-[0_0_25px_rgba(255,107,0,0.15)]"
                          : "bg-white/[0.02] border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <Search className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span className="font-heading font-semibold text-sm text-white">
                            &quot;{item.keyword}&quot;
                          </span>
                        </div>
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <span className="text-[11px] font-mono text-neutral-400">
                            Search Vol: {item.volume}
                          </span>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold font-mono">
                            <span>#{item.currentRank} on Google</span>
                          </div>
                        </div>
                      </div>

                      {/* Rank Progression Bar */}
                      <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
                        <span className="text-[10px] font-mono">Day 1: #{item.initialRank}</span>
                        <div className="flex-1 bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-red-500 via-amber-500 to-green-500 h-full rounded-full"
                            style={{ width: "96%" }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-green-400 font-bold">Now: #{item.currentRank}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Technical SEO Health Scorecard */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 space-y-5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF8A26] block">
                Audit Checklist
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                Zero-Defect Technical Foundation
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Before publishing any content, we tune your site architecture to pass every Google Search Central guideline with flying colors.
              </p>

              <div className="space-y-3 pt-2">
                {technicalChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2 text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-mono font-bold text-green-400">
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/audit"
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Free SEO Keyword Audit</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF6B00]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
