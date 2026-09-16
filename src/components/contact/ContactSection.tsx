"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Send, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const budgetOptions = [
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000+",
];

const serviceOptions = [
  "Website Development",
  "SEO & Google Maps",
  "Google Ads (PPC)",
  "Ecommerce Store",
  "Social Media & Reels",
  "Brand Identity & Logo",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    budget: budgetOptions[1],
    services: ["Website Development"],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== srv)
          : [...prev.services, srv],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF6B00", "#FF8A26", "#ffffff", "#10B981"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF6B00]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Agency Contact & Assurance */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Talk Growth
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
                READY TO BUILD YOUR <span className="text-gradient-pure-orange">GROWTH MACHINE?</span>
              </h2>
              <p className="mt-4 text-neutral-300 text-base leading-relaxed">
                Schedule a zero-obligation 20-minute growth consultation. We evaluate your current website, traffic, and ad leaks, then present a custom roadmap.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-medium">Direct Growth Line</span>
                  <p className="font-heading font-bold text-white text-base">+91 98765 43210</p>
                  <span className="text-[11px] text-[#FF8A26]">Mon - Sat: 9:30 AM to 8:00 PM</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-medium">Official Inquiry Email</span>
                  <p className="font-heading font-bold text-white text-base">hello@jkdigital.in</p>
                  <span className="text-[11px] text-neutral-400">Guaranteed response in &lt;2 hours</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-medium">Headquarters</span>
                  <p className="font-heading font-bold text-white text-sm">Bodakdev, SG Highway</p>
                  <span className="text-[11px] text-neutral-400">Ahmedabad, Gujarat 380054, India</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20JK%20Digital,%20I%20am%20interested%20in%20scaling%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
                data-cursor-text="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Prefer WhatsApp? Click to message directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Converting Glass Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl relative">
              {isSuccess ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400 mx-auto shadow-[0_0_35px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    INQUIRY RECEIVED!
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#FF6B00] font-semibold">{formData.name}</span>. Our Managing Director and Lead Strategist are reviewing your requirements. We will contact you via WhatsApp and phone within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        business: "",
                        budget: budgetOptions[1],
                        services: ["Website Development"],
                        message: "",
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Patel Healthcare"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Needed Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((srv) => {
                        const selected = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                              selected
                                ? "bg-[#FF6B00]/20 border-[#FF6B00] text-white font-semibold"
                                : "bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white"
                            }`}
                          >
                            {selected ? "✓ " : "+ "}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                      Estimated Monthly / Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.budget === b
                              ? "bg-[#FF6B00] text-black font-bold border-[#FF6B00]"
                              : "bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Tell Us About Your Project & Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Current challenges, website links, or target growth numbers..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(255,107,0,0.4)] hover:shadow-[0_0_50px_rgba(255,107,0,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    data-cursor-text="Submit"
                  >
                    {isSubmitting ? (
                      <span>Submitting Proposal...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get Proposal & Strategy Call</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-500 text-center">
                    <span>🔒 100% Privacy Protected</span>
                    <span>•</span>
                    <span>⚡ 2-Hour SLA Response</span>
                    <span>•</span>
                    <span>🤝 Zero Sales Pressure</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
