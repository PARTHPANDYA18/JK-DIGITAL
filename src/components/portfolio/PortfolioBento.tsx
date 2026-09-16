"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2, SlidersHorizontal, Eye } from "lucide-react";
import { portfolioData, type PortfolioProject } from "@/data/portfolioData";
import BeforeAfterSlider from "./BeforeAfterSlider";

const categories = ["All", "Website", "SEO", "Ads", "Branding", "Social Media"];

export default function PortfolioBento() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeBeforeAfterProject, setActiveBeforeAfterProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FF6B00]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF8A26]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Proven Case Archive
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
              ENGINEERED FOR <span className="text-gradient-pure-orange">IMPACT.</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl">
              Explore our curated portfolio of bespoke Next.js web applications, revenue-generating Google Ads, and category-dominating SEO campaigns.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-[#FF6B00] text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                    : "bg-white/5 text-neutral-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`${project.bentoSpan || "col-span-12 lg:col-span-6"} group relative rounded-3xl glass-panel overflow-hidden border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-400 hover:shadow-[0_20px_50px_rgba(255,107,0,0.2)] flex flex-col justify-between`}
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={project.afterImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-black/30" />

                {/* Top Floating Category and Year Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FF6B00]/90 text-black font-mono font-black text-xs">
                    {project.year}
                  </span>
                </div>

                {/* Before/After Trigger button */}
                <button
                  onClick={() => setActiveBeforeAfterProject(project)}
                  className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 hover:bg-[#FF6B00] hover:text-black transition-colors z-20 cursor-pointer shadow-lg"
                  data-cursor-text="Compare"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Before vs After</span>
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-bold text-[#FF8A26] uppercase tracking-wider mb-1">
                    {project.client}
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#FF6B00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-neutral-300 uppercase tracking-wide">
                    {project.tagline}
                  </p>

                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {project.solution}
                  </p>

                  {/* Results Highlights */}
                  <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-3 gap-2">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex flex-col">
                        <span className="font-heading font-black text-base sm:text-lg text-gradient-pure-orange">
                          {res.value}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider truncate">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[10px] font-mono text-neutral-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Verified Transformation
                  </span>
                  <Link
                    href={`/case-studies`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF6B00] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Before / After Slider Comparison */}
        <AnimatePresence>
          {activeBeforeAfterProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            >
              <div className="max-w-3xl w-full relative">
                <button
                  onClick={() => setActiveBeforeAfterProject(null)}
                  className="absolute -top-12 right-0 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 text-xs font-bold transition-colors"
                >
                  ✕ Close Comparison
                </button>
                <BeforeAfterSlider
                  beforeImage={activeBeforeAfterProject.beforeImage}
                  afterImage={activeBeforeAfterProject.afterImage}
                  title={`${activeBeforeAfterProject.title} — Redesign Transformation`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
