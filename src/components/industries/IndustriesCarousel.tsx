"use client";

import { Sparkles, UtensilsCrossed, Stethoscope, Scale, Factory, GraduationCap, Building2, Rocket, Shirt, Hotel, Dumbbell, Sparkle } from "lucide-react";

const industries = [
  { name: "Restaurants & Bars", icon: UtensilsCrossed, stat: "340% Table Bookings", focus: "Local SEO & Foodie Reels" },
  { name: "Doctors & Clinics", icon: Stethoscope, stat: "210+ Monthly Calls", focus: "Google Maps 3-Pack & Schema" },
  { name: "Real Estate Developers", icon: Building2, stat: "₹82M Sales Closed", focus: "Google Search & Penthouse Ads" },
  { name: "Manufacturing & B2B", icon: Factory, stat: "45L+ Export Inquiries", focus: "Commercial SEO & Catalogues" },
  { name: "Law & Legal Firms", icon: Scale, stat: "High-Intent Consults", focus: "Local Visibility & Authority" },
  { name: "Startups & Tech", icon: Rocket, stat: "Next.js Web Apps", focus: "Investor Decks & Fast MVPs" },
  { name: "Fashion & D2C", icon: Shirt, stat: "9.2x Peak ROAS", focus: "Headless Shopify & Influencers" },
  { name: "Hotels & Luxury Resorts", icon: Hotel, stat: "Direct Room Bookings", focus: "OTA Bypass & 3D Walkthroughs" },
  { name: "Gyms & Fitness Centers", icon: Dumbbell, stat: "420+ New Members", focus: "Viral Reels & WhatsApp Funnels" },
  { name: "Beauty & Wellness Salons", icon: Sparkle, stat: "Weekly Sold Out", focus: "Appointment Automation" },
  { name: "Higher Education", icon: GraduationCap, stat: "Admissions Funnels", focus: "Lead Gen & Student Portals" },
];

export default function IndustriesCarousel() {
  return (
    <section className="relative py-24 bg-[#07070a] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Niche Industry Mastery
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white">
          TAILORED STRATEGIES FOR <span className="text-gradient-pure-orange">11 KEY SECTORS.</span>
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          We don&apos;t apply generic marketing. We know the exact buyer psychology and keywords that drive transactions in your niche.
        </p>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-4">
          {[...industries, ...industries].map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="w-72 shrink-0 p-6 rounded-2xl glass-panel border border-white/5 hover:border-[#FF6B00]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-all mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-[#FF6B00] transition-colors">
                  {ind.name}
                </h3>
                <span className="text-xs font-mono font-semibold text-[#FF8A26] block mt-1">
                  {ind.stat}
                </span>
                <p className="text-[11px] text-neutral-400 mt-2">
                  Focus: {ind.focus}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
