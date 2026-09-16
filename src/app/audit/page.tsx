"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, CheckCircle2, ShieldCheck, ArrowUpRight, Zap, Globe, Search } from "lucide-react";
import Link from "next/link";

export default function AuditPage() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetGoal, setTargetGoal] = useState("Leads & Phone Inquiries");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      setIsComplete(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#FF6B00", "#FF8A26", "#ffffff", "#10B981"],
      });
    }, 1500);
  };

  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Free 24-Hour Analysis
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          GET YOUR FREE 2026 <span className="text-gradient-pure-orange">GROWTH & SEO AUDIT.</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto">
          We manually inspect your site speed, Google search visibility, competitor ad keywords, and conversion leakage—completely free with zero obligation.
        </p>
      </div>

      {/* Audit Form or Results Box */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#FF6B00]/40 shadow-2xl relative">
        {isComplete ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400 mx-auto shadow-[0_0_35px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              AUDIT QUEUED SUCCESSFULLY!
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Our Chief Technical Strategist is running speed crawls and competitor gap analyses for <span className="text-[#FF6B00] font-bold">{websiteUrl || businessName}</span>.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 max-w-lg mx-auto text-left space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF8A26] uppercase tracking-wider block">
                What to expect in your report:
              </span>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Google Lighthouse Speed & Core Web Vitals breakdown</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Top 10 missed high-intent keywords your competitors rank for</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Mobile conversion leakage and WhatsApp funnels recommendation</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918401296111?text=Hi%20JK%20Digital,%20I%20just%20submitted%20my%20audit%20request%20and%20want%20to%20speed%20up%20review."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FF6B00] text-black font-bold text-xs uppercase tracking-wider"
              >
                Fast-Track on WhatsApp
              </a>
              <Link
                href="/"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleStartAudit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Website URL *
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <input
                    type="url"
                    required
                    placeholder="https://yourwebsite.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Business / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Diagnostics"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Work Email (To Send PDF Audit) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  WhatsApp Number (For Direct Delivery) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 84012 96111"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                Primary Revenue Goal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {["Leads & Phone Inquiries", "Rank #1 on Google", "Scale Ecommerce Revenue"].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setTargetGoal(g)}
                    className={`p-3 rounded-xl text-xs font-medium border transition-all ${
                      targetGoal === g
                        ? "bg-[#FF6B00] text-black font-bold border-[#FF6B00]"
                        : "bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(255,107,0,0.4)] hover:shadow-[0_0_50px_rgba(255,107,0,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              data-cursor-text="Audit"
            >
              {isAnalyzing ? (
                <span>Generating Comprehensive Audit...</span>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Generate Free Growth Audit Report</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
