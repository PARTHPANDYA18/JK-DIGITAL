import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, Calendar, Clock, Share2, ArrowUpRight } from "lucide-react";
import { blogPostsData } from "@/data/blogData";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | JK Digital Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all growth insights</span>
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30">
            {post.category}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            {post.readTime}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center justify-between py-4 border-y border-white/10 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FF6B00] text-black font-black flex items-center justify-center font-heading">
              {post.author.avatar}
            </div>
            <div>
              <span className="font-heading font-bold text-white block">
                {post.author.name}
              </span>
              <span>{post.author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.publishedAt}</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>

      {/* Content */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 font-medium text-white italic">
          Key Takeaway: {post.excerpt}
        </div>

        <div className="space-y-6 pt-4 border-t border-white/5">
          <h2 className="font-heading font-bold text-2xl text-white">
            1. The Foundation of High-Converting Growth
          </h2>
          <p>
            Traditional vanity metrics like &apos;reach&apos; and &apos;impressions&apos; don&apos;t pay payroll. In 2026, algorithmic systems reward authenticity, rapid edge loading speed, and direct customer resonance above all else.
          </p>

          <h2 className="font-heading font-bold text-2xl text-white">
            2. Eliminate Friction at the Buying Point
          </h2>
          <p>
            Whether targeting luxury real estate buyers or cosmetic dental patients, every step in the conversion funnel must be frictionless. Implementing automated WhatsApp triggers and OTP-verified inquiry forms converts up to 3x higher than standard contact pages.
          </p>

          <h2 className="font-heading font-bold text-2xl text-white">
            3. Continuous Testing & Optimization
          </h2>
          <p>
            Never rely on guesswork. Review heatmaps, optimize negative keyword lists weekly, and split-test headlines to lower customer acquisition costs.
          </p>
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-400"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-12 p-8 rounded-3xl glass-panel border border-[#FF6B00]/40 text-center space-y-4 shadow-xl">
        <h3 className="font-heading font-bold text-2xl text-white">
          Want JK Digital to execute this strategy for your business?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
          We build custom websites and performance ad funnels that generate measurable revenue.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF6B00] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,0,0.5)] hover:bg-[#FF8A26] transition-colors"
        >
          <span>Get Free Strategy Call</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
