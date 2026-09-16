"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, DollarSign, Target, ShieldAlert, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function GoogleAdsSection() {
  const [monthlyBudget, setMonthlyBudget] = useState(50000);
  const estimatedROAS = 6.8;
  const estimatedRevenue = Math.round(monthlyBudget * estimatedROAS);
  const estimatedLeads = Math.round(monthlyBudget / 420);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Orange Glow Radial */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#FF6B00]/15 to-[#FF8A26]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00]">
              <Sparkles className="w-3.5 h-3.5" />
              Certified Google Partner Agency
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
              STOP BURNING CASH ON JUNK CLICKS. <span className="text-gradient-pure-orange">SCALE PROFITABLE PPC.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              We structure hyper-targeted Google Search, Performance Max, and Remarketing campaigns that target high-intent buyers ready to purchase right now.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-white/10">
                <Target className="w-5 h-5 text-[#FF6B00] mb-2" />
                <h4 className="font-heading font-bold text-sm text-white">Negative Keyword Fortress</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  We block 1,500+ freebie and job seeker terms before you spend a single rupee.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10">
                <ShieldAlert className="w-5 h-5 text-[#FF6B00] mb-2" />
                <h4 className="font-heading font-bold text-sm text-white">High-Converting Landers</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Dedicated 60fps landing pages that convert 3x higher than standard homepages.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services/google-ads"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] transition-all group"
              >
                <span>Explore Google Ads Management</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive ROAS Simulator */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-[#FF6B00]/40 shadow-[0_20px_50px_rgba(255,107,0,0.2)]">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF6B00]">
                    Interactive Tool
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Google Ads Revenue Simulator
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00]">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* Slider Control */}
              <div className="py-6 border-b border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Monthly Ad Spend (INR)
                  </label>
                  <span className="font-heading font-black text-xl text-white">
                    ₹{monthlyBudget.toLocaleString("en-IN")}
                  </span>
                </div>

                <input
                  type="range"
                  min="25000"
                  max="500000"
                  step="5000"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full accent-[#FF6B00] cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />

                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>₹25,000</span>
                  <span>₹2,50,000</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>

              {/* Projected Returns Metrics */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Projected Pipeline Value
                  </span>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-gradient-pure-orange">
                    ₹{estimatedRevenue.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] text-neutral-400 block mt-1">
                    Based on verified 6.8x avg agency ROAS
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Estimated Inquiries
                  </span>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-white">
                    ~{estimatedLeads} Leads
                  </span>
                  <span className="text-[10px] text-neutral-400 block mt-1">
                    Verified phone & WhatsApp inquiries
                  </span>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-2">
                <Link
                  href="/audit"
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading font-semibold text-xs uppercase tracking-wider text-center block transition-colors"
                >
                  Get A Free Google Ads Audit & Forecast →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
