import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | JK Digital Solutions",
  description: "Privacy policy and data protection commitments of JK Digital Solutions.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full text-neutral-300">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white mb-6">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm leading-relaxed glass-panel p-8 rounded-3xl border border-white/10">
        <p>
          At JK Digital Solutions, we respect your privacy and are committed to protecting the personal information you share with us when inquiring about our digital marketing, SEO, and web development services.
        </p>

        <h3 className="font-heading font-bold text-lg text-white">1. Information Collection</h3>
        <p>
          We collect information you provide directly via our contact and audit forms (such as your name, business email, phone number, and project budget) exclusively to evaluate your requirements and deliver tailored proposals.
        </p>

        <h3 className="font-heading font-bold text-lg text-white">2. Confidentiality Guarantee</h3>
        <p>
          We never sell, rent, or trade your contact or business metrics with any third parties. All project blueprints and discussions remain strictly confidential.
        </p>

        <h3 className="font-heading font-bold text-lg text-white">3. Contact Us</h3>
        <p>
          For questions regarding this policy, contact our compliance officer at hello@jkdigital.in.
        </p>
      </div>
    </div>
  );
}
