"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  Search,
  TrendingUp,
  Share2,
  Palette,
  Video,
  Sparkles,
  MapPin,
  Zap,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  ShoppingBag,
  Search,
  TrendingUp,
  Share2,
  Palette,
  Video,
  Sparkles,
  MapPin,
  Zap,
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Development", "Organic Growth", "Paid Growth", "Design", "Social", "Creative", "Automation"];

  const filteredServices =
    activeCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF6B00]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF8A26]/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Capabilities
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
              HIGH-IMPACT <span className="text-gradient-pure-orange">GROWTH SERVICES.</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl">
              We engineer custom digital solutions that solve customer acquisition bottlenecks and command market authority.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00] hover:text-[#FF8A26] transition-colors self-start md:self-end group"
          >
            <span>View All Service Blueprints</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-[#FF6B00] text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                  : "bg-white/5 text-neutral-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-panel p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF6B00]/60 hover:shadow-[0_15px_40px_-10px_rgba(255,107,0,0.25)]"
                data-cursor-text="Explore"
              >
                {/* Subtle Card Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full blur-2xl group-hover:bg-[#FF6B00]/15 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF8A26]">
                    {service.tagline}
                  </p>

                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Bulletpoints */}
                  <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-400">
                    {service.metrics}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-black group-hover:bg-[#FF6B00] transition-all"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
