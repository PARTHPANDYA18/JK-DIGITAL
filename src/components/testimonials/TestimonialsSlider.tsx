"use client";

import { useState } from "react";
import { Star, Sparkles, CheckCircle2, Play, X } from "lucide-react";
import { testimonialsData, type Testimonial } from "@/data/testimonialsData";

export default function TestimonialsSlider() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section id="testimonials" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#FF6B00]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          5-Star Client Feedback
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
          TRUSTED BY GUJARAT&apos;S <span className="text-gradient-pure-orange">GROWTH LEADERS.</span>
        </h2>
        <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
          Real business owners, real revenue transformations. Read verified Google reviews from clients who scaled with JK Digital Solutions.
        </p>
      </div>

      {/* Infinite Track of Review Cards */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-stretch gap-6 py-4">
          {[...testimonialsData, ...testimonialsData].map((test, idx) => (
            <div
              key={idx}
              className="w-80 sm:w-96 shrink-0 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-[#FF6B00]/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Top Google Review Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Verified Google
                  </span>
                </div>

                {/* Highlight Tag */}
                {test.statHighlight && (
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono font-bold text-[#FF8A26] mb-3">
                    ★ {test.statHighlight}
                  </div>
                )}

                {/* Review Body */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">
                  &quot;{test.text}&quot;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8A26] to-[#FF6B00] flex items-center justify-center text-black font-heading font-black text-xs shadow-md">
                    {test.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-xs text-white">
                      {test.name}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {test.role}, {test.company}
                    </span>
                    <span className="text-[9px] text-neutral-500">
                      {test.location}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideo(test)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FF6B00] text-neutral-400 hover:text-black flex items-center justify-center transition-all border border-white/10"
                  title="Watch Video Review"
                  data-cursor-text="Play"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Testimonial Modal Preview */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-xl w-full rounded-3xl glass-panel p-6 border border-white/20 shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00] flex items-center justify-center text-[#FF6B00] mx-auto shadow-[0_0_30px_#FF6B00]">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                {selectedVideo.name}&apos;s Video Testimonial
              </h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                Discover how JK Digital Solutions generated {selectedVideo.statHighlight} for {selectedVideo.company}.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 italic">
                &quot;{selectedVideo.text}&quot;
              </div>
              <a
                href="https://wa.me/918401296111?text=Hi,%20I%20saw%20your%20client%20case%20studies%20and%20want%20similar%20growth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-[#FF6B00] text-black font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Schedule A Growth Call Like This
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
