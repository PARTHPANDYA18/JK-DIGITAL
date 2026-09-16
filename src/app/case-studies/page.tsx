import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

export const metadata: Metadata = {
  title: "Client Case Studies & ROI Breakdown",
  description: "In-depth case studies showing how JK Digital generated ₹82M in property sales, 340% dining reservations, and rank #1 SEO dominance.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Verified Business Impact
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          DATA-BACKED <span className="text-gradient-pure-orange">GROWTH STORIES.</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg">
          Unfiltered deep-dives into our problem-solving methodology, campaign architectures, and financial ROI for Gujarat&apos;s leading brands.
        </p>
      </div>

      {/* Case Studies Cards */}
      <div className="space-y-12">
        {caseStudiesData.map((cs) => (
          <div
            key={cs.id}
            className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 hover:border-[#FF6B00]/50 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl"
          >
            {/* Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={cs.heroImage}
                alt={cs.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white uppercase tracking-wider">
                {cs.industry}
              </div>
            </div>

            {/* Content & Metrics */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF8A26] uppercase tracking-wider">
                  Client: {cs.client}
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mt-1">
                  {cs.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-300">
                  {cs.subtitle}
                </p>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                {cs.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-heading font-black text-xl sm:text-2xl text-gradient-pure-orange">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-semibold text-white truncate">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-white">Challenge: </strong>
                  {cs.problem}
                </p>
                <p>
                  <strong className="text-white">Solution: </strong>
                  {cs.strategy}
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-white/5">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00] hover:text-[#FF8A26] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#FF6B00] hover:text-black text-xs font-bold text-neutral-300 transition-all"
                >
                  Replicate These Results
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
