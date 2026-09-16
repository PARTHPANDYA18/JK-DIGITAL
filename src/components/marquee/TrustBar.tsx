"use client";

import { Sparkles } from "lucide-react";

const partners = [
  { name: "Google Partner", badge: "Certified Partner" },
  { name: "Meta Business", badge: "Marketing Partner" },
  { name: "Next.js", badge: "App Router Specialist" },
  { name: "Shopify Plus", badge: "Ecom Expert" },
  { name: "AWS Cloud", badge: "Edge Infrastructure" },
  { name: "React 19", badge: "Modern UI Core" },
  { name: "Tailwind CSS", badge: "Design System" },
  { name: "HubSpot", badge: "CRM Integrator" },
  { name: "Vercel", badge: "Global CDN" },
  { name: "Stripe & Razorpay", badge: "Payment Gateways" },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 bg-[#08080a] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center justify-center gap-2 text-center">
        <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Powered By Modern Enterprise Technologies & Certified Partnerships
        </span>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 py-2">
          {/* Double list for smooth seamless loop */}
          {[...partners, ...partners].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-panel border border-white/5 hover:border-[#FF6B00]/40 transition-all group shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-[#FF6B00] transition-colors">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
