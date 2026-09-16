import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowUpRight, ArrowLeft, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | JK Digital Solutions`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Back Link */}
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all services</span>
      </Link>

      {/* Hero */}
      <div className="mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 inline-block mb-3">
          {service.category}
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          {service.title}
        </h1>
        <p className="mt-2 text-base font-semibold uppercase tracking-wider text-[#FF8A26]">
          {service.tagline}
        </p>
        <p className="mt-6 text-neutral-300 text-lg leading-relaxed max-w-3xl">
          {service.fullDesc}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] transition-all flex items-center gap-2"
          >
            <span>Request Service Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/919876543210?text=Hi%20JK%20Digital,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl glass-panel border border-white/10 text-white font-heading font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Deliverables Grid */}
      <div className="py-12 border-t border-white/10">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
          Everything Included in This Solution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-panel border border-white/5 flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0" />
              <span className="text-sm text-neutral-200">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Benefits */}
      <div className="py-12 border-t border-white/10">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
          Why This Transforms Your Revenue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.benefits.map((b, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/5">
              <span className="text-xs font-mono font-bold text-[#FF6B00] block mb-2">
                0{idx + 1}.
              </span>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{b.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Execution Process */}
      <div className="py-12 border-t border-white/10">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
          Step-by-Step Implementation Sprints
        </h2>
        <div className="space-y-4">
          {service.process.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] font-mono font-black text-sm flex items-center justify-center shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">{p.title}</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 border-t border-white/10">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {service.faqs.map((f, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/5">
              <h3 className="font-heading font-bold text-base text-white mb-2">{f.question}</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
