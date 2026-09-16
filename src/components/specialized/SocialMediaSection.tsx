"use client";

import Image from "next/image";
import { Sparkles, Heart, MessageCircle, Play, Eye, Share2 } from "lucide-react";

const socialPosts = [
  {
    type: "Reel",
    views: "840K",
    likes: "42.5K",
    title: "Behind-The-Scenes: Michelin Kitchen Prep",
    client: "Aurora Luxury Dining",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "Carousel",
    views: "320K",
    likes: "18.2K",
    title: "5 Real Estate Myths Debunked in 2026",
    client: "Shivalik Realty",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "Reel",
    views: "1.2M",
    likes: "89.1K",
    title: "30-Day High Intensity Strength Protocol",
    client: "Pulse Conditioning",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "Reel",
    views: "540K",
    likes: "31.4K",
    title: "The Skincare Ingredient Dermatologists Swear By",
    client: "Velvet Botanics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
  },
];

export default function SocialMediaSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Viral Short-Form & Video Editing
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            SCROLL-STOPPING <span className="text-gradient-pure-orange">CULTURE-FIRST CONTENT.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            We produce cinematic Reels, aesthetic carousels, and high-retention video edits designed to turn passive scrollers into passionate brand buyers.
          </p>
        </div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-300 shadow-xl"
            >
              {/* Media Container */}
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                    {post.type}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6B00]/90 text-black font-mono font-bold text-[11px]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{post.views}</span>
                  </div>
                </div>

                {/* Center Play Button for Reels */}
                {post.type === "Reel" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-black transition-all shadow-xl">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#FF8A26] tracking-wider block mb-1">
                    {post.client}
                  </span>
                  <h4 className="font-heading font-bold text-sm leading-snug line-clamp-2">
                    {post.title}
                  </h4>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Viral Hook</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
