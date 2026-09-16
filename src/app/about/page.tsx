import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck, Trophy, MapPin } from "lucide-react";
import { teamData, companyValues } from "@/data/teamData";

export const metadata: Metadata = {
  title: "About JK Digital Solutions | Ahmedabad Growth Agency",
  description: "Learn about JK Digital Solutions, our founder story, mission, core values, and the elite team engineering digital growth machines.",
};

const agencyStats = [
  { value: "8+", label: "Years in Business" },
  { value: "500+", label: "Projects Delivered" },
  { value: "₹48M+", label: "Client Revenue Generated" },
  { value: "97%", label: "Client Retention Rate" },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Who We Are
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          ENGINEERING LUXURY & <span className="text-gradient-pure-orange">PREDICTABLE REVENUE.</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg">
          Headquartered in Ahmedabad, Gujarat, JK Digital Solutions is a modern agency built for ambitious business leaders who refuse to settle for generic templates.
        </p>
      </div>

      {/* Founder Story Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-6 relative h-80 sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="JK Digital Headquarters in Ahmedabad"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
            <span className="text-xs font-mono font-bold text-[#FF6B00] block mb-0.5">
              AHMEDABAD HEADQUARTERS
            </span>
            <p className="text-xs text-neutral-300">
              Bodakdev, SG Highway — The innovation corridor of Gujarat.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A26]">
            Our Founding Vision
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Born From A Frustration With Mediocrity
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            In 2018, we observed a massive disconnect in the digital marketing industry. Traditional agencies were selling slow, template-heavy WordPress sites and delivering monthly vanity reports filled with &quot;impressions&quot; and &quot;clicks&quot; while business owners saw zero actual sales growth.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We created <strong className="text-white">JK Digital Solutions</strong> to bridge that gap. By combining cutting-edge engineering (Next.js, React, WebGL) with laser-targeted buyer acquisition (Google Search Ads, Technical SEO, WhatsApp Automation), we transform digital channels into predictable profit centers.
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
            <Trophy className="w-8 h-8 text-[#FF6B00] shrink-0" />
            <div>
              <h4 className="font-heading font-bold text-white text-sm">Certified Google Partner</h4>
              <p className="text-xs text-neutral-400">Strict adherence to highest quality standards and verified ROAS.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Numbers Bar */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-[#FF6B00]/30 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24 shadow-2xl">
        {agencyStats.map((st, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl sm:text-5xl text-gradient-pure-orange">
              {st.value}
            </span>
            <span className="mt-2 text-xs font-medium text-neutral-300 uppercase tracking-wider">
              {st.label}
            </span>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] block mb-2">
            The Philosophy
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            The Principles That Guide Every Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyValues.map((val, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#FF6B00]/50 transition-all"
            >
              <span className="text-xs font-mono font-bold text-[#FF6B00] px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
                VALUE {val.number}
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Team Section */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] block mb-2">
            The Specialists
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Meet the Growth Engineers
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Engineers, creative directors, and ad scientists dedicated to scaling your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl glass-panel overflow-hidden border border-white/10 hover:border-[#FF6B00]/60 transition-all group shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#FF6B00] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#FF8A26] block">
                    {member.role}
                  </span>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>{member.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
