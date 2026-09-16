import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowLeft, ArrowUpRight, Quote, MessageCircle } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudiesData.find((c) => c.slug === slug);

  if (!cs) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${cs.title} | Case Study`,
    description: cs.subtitle,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = caseStudiesData.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Back Link */}
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all case studies</span>
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30">
            {cs.industry}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            Client: {cs.client}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white">
          {cs.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-300">
          {cs.subtitle}
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
        <Image
          src={cs.heroImage}
          alt={cs.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Verified Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl glass-panel border border-[#FF6B00]/30 mb-12 shadow-xl">
        {cs.metrics.map((m, idx) => (
          <div key={idx} className="flex flex-col text-center p-3">
            <span className="font-heading font-black text-3xl sm:text-4xl text-gradient-pure-orange">
              {m.value}
            </span>
            <span className="font-bold text-sm text-white mt-1">
              {m.label}
            </span>
            <span className="text-xs text-neutral-400 font-mono mt-0.5">
              {m.change}
            </span>
          </div>
        ))}
      </div>

      {/* Deep Dive Story Content */}
      <div className="space-y-12 text-neutral-300 leading-relaxed">
        {/* The Challenge */}
        <section className="p-8 rounded-3xl glass-panel border border-white/10">
          <h2 className="font-heading font-bold text-2xl text-white mb-4 flex items-center gap-2">
            <span className="text-[#FF6B00]">01.</span> The Challenge & Core Bottleneck
          </h2>
          <p className="text-base text-neutral-300">
            {cs.problem}
          </p>
        </section>

        {/* The Strategy */}
        <section className="p-8 rounded-3xl glass-panel border border-white/10">
          <h2 className="font-heading font-bold text-2xl text-white mb-4 flex items-center gap-2">
            <span className="text-[#FF6B00]">02.</span> The Growth Engineering Strategy
          </h2>
          <p className="text-base text-neutral-300 mb-6">
            {cs.strategy}
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF8A26] mb-3">
            Execution Roadmap:
          </h4>
          <div className="space-y-2.5">
            {cs.execution.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="p-8 rounded-3xl glass-panel border border-white/10">
          <h2 className="font-heading font-bold text-2xl text-white mb-4 flex items-center gap-2">
            <span className="text-[#FF6B00]">03.</span> The Verified Outcome
          </h2>
          <p className="text-base text-neutral-300">
            {cs.outcome}
          </p>
        </section>

        {/* Testimonial Quote */}
        <div className="p-8 rounded-3xl glass-panel border border-amber-500/30 bg-amber-500/[0.02] relative">
          <Quote className="w-10 h-10 text-[#FF6B00]/40 absolute top-6 right-6" />
          <p className="text-lg italic text-neutral-200 mb-6 relative z-10">
            &quot;{cs.testimonial.quote}&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] text-black font-black flex items-center justify-center font-heading">
              {cs.testimonial.author[0]}
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                {cs.testimonial.author}
              </h4>
              <span className="text-xs text-neutral-400">
                {cs.testimonial.role}, {cs.testimonial.company}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="pt-8 text-center space-y-4">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Ready to achieve similar revenue acceleration?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] transition-all flex items-center gap-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20JK%20Digital,%20I%20read%20your%20case%20study%20and%20want%20to%20discuss%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl glass-panel border border-white/10 text-white font-heading font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
