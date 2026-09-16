import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogPostsData } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Growth Insights & Engineering Blog",
  description: "Actionable playbooks on SEO, Google Ads ROAS scaling, Next.js web development, and digital marketing strategies from JK Digital Solutions.",
};

export default function BlogPage() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Growth Intelligence
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter text-white">
          THE PLAYBOOK FOR <span className="text-gradient-pure-orange">MARKET LEADERSHIP.</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg">
          Zero fluff. Actionable frameworks on technical SEO, high-ROAS PPC funnels, and modern Next.js development.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPostsData.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-3xl glass-panel overflow-hidden border border-white/10 hover:border-[#FF6B00]/60 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-xl text-white group-hover:text-[#FF6B00] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h2>

                <p className="mt-3 text-xs text-neutral-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#FF6B00] group-hover:text-[#FF8A26] transition-colors">
              <span>Read Article</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
