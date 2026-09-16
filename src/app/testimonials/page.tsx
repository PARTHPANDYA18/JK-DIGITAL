import { Metadata } from "next";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import { Sparkles, Star, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";

export const metadata: Metadata = {
  title: "Client Testimonials & Google Reviews",
  description: "Verified 5-star Google reviews and client video testimonials from founders who scaled their revenue with JK Digital Solutions.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Verified Client Satisfaction
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          PROVEN TRUST & <span className="text-gradient-pure-orange">5-STAR REVIEWS.</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg">
          We pride ourselves on our 97% client retention rate and multi-million rupee revenue transformations across Gujarat and India.
        </p>
      </div>

      {/* Grid of Verified Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {testimonialsData.map((test) => (
          <div
            key={test.id}
            className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-[#FF6B00]/50 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Google Verified
                </span>
              </div>

              {test.statHighlight && (
                <div className="inline-block px-3 py-1 rounded-md bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-bold text-[#FF8A26] mb-4">
                  ★ {test.statHighlight}
                </div>
              )}

              <p className="text-neutral-300 text-sm leading-relaxed italic">
                &quot;{test.text}&quot;
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8A26] to-[#FF6B00] flex items-center justify-center text-black font-heading font-black text-xs">
                {test.avatar}
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">
                  {test.name}
                </h4>
                <span className="text-xs text-neutral-400 block">
                  {test.role}, {test.company}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {test.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite slider */}
      <TestimonialsSlider />
    </div>
  );
}
