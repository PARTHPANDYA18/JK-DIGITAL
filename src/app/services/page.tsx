import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Explore our full suite of digital marketing, custom Next.js web development, SEO, Google Ads, and brand identity solutions.",
};

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          End-to-End Capabilities
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          GROWTH SERVICES FOR <span className="text-gradient-pure-orange">SERIOUS BRANDS.</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg">
          Every service is engineered around your unit economics and bottom-line revenue. Explore our dedicated blueprints below.
        </p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-[#FF6B00]/60 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {service.category}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {service.metrics}
                </span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-[#FF6B00] transition-colors">
                {service.title}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8A26] mt-1">
                {service.tagline}
              </p>

              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Included Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FF6B00] transition-colors"
              >
                <span>View Full Service Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#FF6B00] hover:text-black text-xs font-bold text-neutral-300 transition-all"
              >
                Book Sprints
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
