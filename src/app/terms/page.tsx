import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | JK Digital Solutions",
  description: "Terms and conditions of engagement with JK Digital Solutions.",
};

export default function TermsPage() {
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
        Terms of Service
      </h1>

      <div className="space-y-6 text-sm leading-relaxed glass-panel p-8 rounded-3xl border border-white/10">
        <p>
          By engaging JK Digital Solutions for custom software engineering, website development, search engine optimization, or paid advertising management, you agree to the following terms and guidelines.
        </p>

        <h3 className="font-heading font-bold text-lg text-white">1. Scope of Work & Sprints</h3>
        <p>
          All deliverables, sprint milestones, and timelines are clearly outlined in your customized project proposal and statement of work (SOW).
        </p>

        <h3 className="font-heading font-bold text-lg text-white">2. Ownership & Intellectual Property</h3>
        <p>
          Upon final payment settlement, 100% full ownership of custom code, design source files (Figma, vectors), and marketing campaign accounts transfers to you.
        </p>

        <h3 className="font-heading font-bold text-lg text-white">3. Performance & Collaboration</h3>
        <p>
          We commit to delivering industry-standard best practices, sub-second load times, and transparent reporting. Client agrees to provide timely feedback during active review sprints.
        </p>
      </div>
    </div>
  );
}
