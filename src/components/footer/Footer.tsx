"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles, Send, Globe } from "lucide-react";
import JkLogo from "@/components/ui/JkLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#040406] text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF8A26]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Callout Typography */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Ready To Scale Your Business?
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-none">
              LET&apos;S BUILD SOMETHING{" "}
              <span className="text-gradient-pure-orange">AMAZING.</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl">
              Turn your digital presence into a 24/7 revenue-generating machine. Let&apos;s discuss your goals today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_45px_rgba(255,107,0,0.7)] transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              data-cursor-text="Start"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20JK%20Digital,%20I'd%20like%20to%20schedule%20a%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl font-heading font-semibold text-sm uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-center flex items-center justify-center gap-2"
              data-cursor-text="Call"
            >
              <span>WhatsApp Strategy</span>
            </a>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10">
          {/* Column 1: Agency Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" data-cursor-text="JK">
              <JkLogo size="md" showText={true} />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Ahmedabad&apos;s premier high-performance digital marketing, custom Next.js development, and brand strategy agency. Engineering growth machines for forward-thinking brands.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Bodakdev, SG Highway, Ahmedabad, Gujarat 380054, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>hello@jkdigital.in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/services/website-development" className="hover:text-[#FF6B00] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-[#FF6B00] transition-colors">
                  Ecommerce Stores
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="hover:text-[#FF6B00] transition-colors">
                  SEO & Google Rankings
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="hover:text-[#FF6B00] transition-colors">
                  Google Ads (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services/brand-identity" className="hover:text-[#FF6B00] transition-colors">
                  Brand Identity & Systems
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="hover:text-[#FF6B00] transition-colors">
                  Local SEO & Maps 3-Pack
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/portfolio" className="hover:text-[#FF6B00] transition-colors">
                  Portfolio & Bento Work
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#FF6B00] transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF6B00] transition-colors">
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#FF6B00] transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FF6B00] transition-colors">
                  Growth Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:text-[#FF6B00] transition-colors flex items-center gap-1 text-[#FF6B00]">
                  <span>Free Marketing Audit</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Growth Newsletter
            </h4>
            <p className="text-xs text-neutral-400 mb-3">
              Get monthly actionable strategies on SEO updates, Google Ads hacks, and high-converting web design.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to JK Digital Growth Insights!");
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your work email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#FF6B00] text-black font-semibold text-xs flex items-center justify-center hover:bg-[#FF8A26] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-neutral-500 block">
                No spam. Unsubscribe anytime.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Mandatory Techinite Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} JK Digital Solutions. All rights reserved. Built for 2026 & beyond.
          </div>

          {/* REQUIRED: Made by Techinite linking to www.techinite.com */}
          <div className="flex items-center gap-2 bg-white/[0.04] px-4 py-2 rounded-full border border-white/10 hover:border-[#FF6B00]/50 transition-colors">
            <span className="text-neutral-400">Made by</span>
            <a
              href="https://www.techinite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-heading font-bold text-white hover:text-[#FF6B00] transition-colors"
              title="Visit Techinite"
              data-cursor-text="Techinite"
            >
              <span className="text-gradient-pure-orange">Techinite</span>
              <Globe className="w-3.5 h-3.5 text-[#FF6B00] group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
