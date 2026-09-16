export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  tags: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    id: "post-1",
    slug: "seo-trends-2026-dominate-search",
    title: "SEO in 2026: Why Topical Authority & Page Experience Beat Backlink Spam",
    excerpt: "Search engines now penalize thin AI content and prioritize authentic human expertise, Core Web Vitals, and localized entity graph signals.",
    category: "SEO",
    readTime: "6 min read",
    publishedAt: "February 2026",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Jiten K.",
      role: "Founder & Chief Strategist",
      avatar: "JK"
    },
    content: `
      ## The Death of Old-School SEO Shortcuts

      In 2026, the search landscape has shifted radically. Mass-generated AI articles and low-quality directory backlinks no longer rank. Search engines like Google now evaluate the actual end-to-end user experience, including whether visitors immediately hit the back button or stay engaged.

      ### 1. Topical Authority Clusters
      Rather than writing one disjointed blog post per keyword, top-performing agencies build comprehensive topic clusters. A cornerstone guide linked strategically to 10 sub-topic deep dives tells search algorithms that your brand is an undisputed industry authority.

      ### 2. Core Web Vitals and Real-World Speed
      If your website takes more than 1.5 seconds to become interactive on 4G mobile networks, you are losing up to 40% of potential conversions before the page even finishes rendering. Modern frameworks like Next.js 15 App Router deliver instant page transitions that Google rewards directly.

      ### 3. Entity Optimization and Structured Schema
      Search engines think in entities: organizations, locations, services, and verified doctors or engineers. Implementing rich JSON-LD schema connects your digital footprint to the broader knowledge graph.
    `,
    tags: ["SEO", "Google Algorithm", "Core Web Vitals", "Topical Authority"]
  },
  {
    id: "post-2",
    slug: "google-ads-roas-scaling-guide",
    title: "How We Scale Google Ads to 8x ROAS Without Wasting Budget on Junk Clicks",
    excerpt: "The step-by-step framework we use at JK Digital to eliminate negative keyword bleed and capture ready-to-buy prospects.",
    category: "Paid Ads",
    readTime: "8 min read",
    publishedAt: "January 2026",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Parth S.",
      role: "Head of Performance Marketing",
      avatar: "PS"
    },
    content: `
      ## Why Most Google Ads Campaigns Burn Money

      The most common mistake business owners make with Google Ads is trusting Google's default 'smart' settings. Broad match keywords coupled with automated bidding without conversion value rules lead to paying ₹200 per click for users searching for job vacancies or free PDFs.

      ### 1. The Power of Intent Segmentation
      Group your campaigns by buyer temperature. Separate informational searches ('how does dental implant work') from commercial transactions ('best dental implant clinic near me').

      ### 2. Dedicated 60fps Landing Pages
      Sending paid ad traffic to your generic homepage drops conversion rates down to 1-2%. A bespoke landing page designed specifically around the searcher's exact query routinely converts at 8-15%.

      ### 3. Strict Negative Keyword Safeguards
      Before spending your first ₹10,000, build a fortress of negative keywords: words like 'free', 'pdf', 'jobs', 'salary', 'login', 'course', and 'meaning'.
    `,
    tags: ["Google Ads", "PPC", "ROAS", "Performance Marketing"]
  },
  {
    id: "post-3",
    slug: "why-modern-agencies-ditch-wordpress",
    title: "Why High-End Businesses Are Replacing Outdated WordPress with Next.js",
    excerpt: "Discover why global brands and premier agencies are migrating to React and Next.js for uncrackable security and lightning performance.",
    category: "Web Development",
    readTime: "5 min read",
    publishedAt: "January 2026",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Jiten K.",
      role: "Founder & Chief Strategist",
      avatar: "JK"
    },
    content: `
      ## The Hidden Cost of Outdated WordPress Stacks

      For decades, WordPress was the default choice for website creation. However, the modern digital landscape demands sub-second speeds, bespoke interactive animations, and bulletproof security that overloaded plugins simply cannot provide.

      ### 1. Plugin Bloat vs Clean Code
      A typical WordPress agency site stacks 25+ plugins for sliders, forms, caching, security, and SEO. Every plugin adds heavy JavaScript payloads, slows down server response, and opens vulnerabilities to automated bot attacks.

      ### 2. Edge CDN Rendering
      With Next.js App Router, pages are pre-compiled and served from global edge networks closest to the user. Whether a customer visits from Ahmedabad, Mumbai, London, or New York, the page arrives in milliseconds.

      ### 3. Cinematic Aesthetics
      Modern consumers are wowed by fluid micro-interactions, smooth Lenis scrolling, and 3D interactions. Next.js combined with Framer Motion allows us to craft award-winning experiences that leave a lasting impression.
    `,
    tags: ["Next.js", "WordPress vs React", "Speed", "Web Design"]
  }
];
