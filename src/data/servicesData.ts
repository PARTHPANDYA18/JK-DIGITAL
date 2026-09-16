export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  metrics: string;
  deliverables: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "website-development",
    title: "Custom Website Development",
    category: "Development",
    tagline: "Ultra-Fast, High-Converting Web Platforms",
    shortDesc: "We build bespoke digital platforms with Next.js, React, and cinematic animations engineered to turn visitors into paying clients.",
    fullDesc: "Your website is your 24/7 digital flagship. We combine cutting-edge tech stacks (Next.js 15, React 19, Tailwind CSS) with modern aesthetic storytelling, achieving sub-second load times and 98+ Lighthouse scores.",
    icon: "Code2",
    metrics: "Sub-second load time | 99% Lighthouse",
    deliverables: [
      "Custom Next.js & React Architecture",
      "Interactive 3D & Micro-Animations",
      "Headless CMS Integration",
      "Mobile-First Responsive Layouts",
      "Technical SEO & Schema Pre-Configured",
      "Conversion Funnel & Analytics Tracking"
    ],
    benefits: [
      { title: "Lightning Fast Speed", desc: "Built with static generation and edge CDN routing for instantaneous page loads." },
      { title: "Maximum Conversion UX", desc: "Strategically placed CTAs, magnetic forms, and frictionless customer paths." },
      { title: "Scalable Architecture", desc: "Future-proof codebase that easily expands as your business operations grow." }
    ],
    process: [
      { step: "01", title: "Discovery & Blueprint", desc: "We study your business model, competitors, and client psychology." },
      { step: "02", title: "Figma UI/UX Prototyping", desc: "Creating luxury, high-fidelity mockups with interactive states." },
      { step: "03", title: "Full-Stack Development", desc: "Pixel-perfect engineering with Next.js, Framer Motion, and TypeScript." },
      { step: "04", title: "Speed & SEO Audit", desc: "Rigorous testing across 40+ devices, browsers, and performance tools." },
      { step: "05", title: "Launch & Growth Sync", desc: "Seamless deployment with Google Analytics 4, Meta Pixel, and heatmaps." }
    ],
    faqs: [
      {
        question: "How long does a custom agency website take to build?",
        answer: "Typically 2 to 4 weeks depending on scope, custom animations, and integrations."
      },
      {
        question: "Will I be able to update content myself?",
        answer: "Yes, we integrate modern headless CMS or structured content modules that make editing text, projects, and images effortless."
      },
      {
        question: "Do you build on WordPress or custom code?",
        answer: "We specialize in modern Next.js/React applications for maximum speed, security, and prestige, but we also create custom headless WordPress when required."
      }
    ]
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    category: "Development",
    tagline: "Engineered For Multi-Million Dollar Sales Volume",
    shortDesc: "High-speed Shopify & custom headless ecommerce stores optimized for checkout speed, average order value, and repeat purchases.",
    fullDesc: "We build frictionless online stores designed for scale. From Shopify Plus to headless Next.js Commerce, we optimize every touchpoint from product page to one-click checkout.",
    icon: "ShoppingBag",
    metrics: "+42% Average Conversion Lift",
    deliverables: [
      "Custom Shopify & Next.js Storefronts",
      "1-Click Checkout & Payment Gateways",
      "Inventory & ERP System Sync",
      "Product Customizers & 3D Previews",
      "Abandoned Cart Recovery Automations",
      "Upsell & Cross-Sell Logic"
    ],
    benefits: [
      { title: "High AOV Architecture", desc: "In-cart recommendations and smart bundles that increase cart size." },
      { title: "Frictionless Checkout", desc: "Fast payment integrations including UPI, Razorpay, Stripe, and Apple Pay." },
      { title: "Global Scaling", desc: "Multi-currency, localization, and automated tax calculations." }
    ],
    process: [
      { step: "01", title: "Store Audit & Catalog Prep", desc: "Product categorization and merchandising architecture." },
      { step: "02", title: "High-Converting UI Design", desc: "Mobile-first shopping interface optimized for quick purchase." },
      { step: "03", title: "Development & Gateway Setup", desc: "Secure payment gateways and inventory webhooks." },
      { step: "04", title: "Conversion Optimization", desc: "A/B testing product pages and checkout flows." }
    ],
    faqs: [
      { question: "Can you migrate my existing WooCommerce store?", answer: "Yes, we handle complete data migration including products, customers, and order history without downtime." }
    ]
  },
  {
    id: "seo",
    slug: "seo-services",
    title: "SEO Services & Rank #1 Strategy",
    category: "Organic Growth",
    tagline: "Dominate Google Search and Capture High-Intent Traffic",
    shortDesc: "Data-driven Search Engine Optimization that puts your business at the top of Google for profitable search terms.",
    fullDesc: "Rankings mean nothing without qualified buyer traffic. Our full-funnel SEO strategy encompasses technical foundation, content topical authority, high-authority digital PR backlinks, and localized search intent.",
    icon: "Search",
    metrics: "15,000+ Keywords Ranked on Page 1",
    deliverables: [
      "Comprehensive Technical SEO Audit",
      "Topical Authority & Content Architecture",
      "White-Hat High Authority Backlinks",
      "Core Web Vitals Optimization",
      "Schema Markup & Rich Snippet Setup",
      "Competitor Gap Analysis & Rank Tracking"
    ],
    benefits: [
      { title: "High-Intent Inbound Leads", desc: "Reach customers who are actively searching with cash-in-hand." },
      { title: "Compounding Growth", desc: "Unlike paid ads, organic traffic keeps delivering month after month." },
      { title: "Brand Authority", desc: "Occupying #1 positions builds unmatched trust in your industry." }
    ],
    process: [
      { step: "01", title: "Technical Crawl & Remediation", desc: "Eliminating indexation errors, slow scripts, and crawl traps." },
      { step: "02", title: "Keyword Revenue Mapping", desc: "Targeting high-CPC commercial keywords over vanity terms." },
      { step: "03", title: "Content Engine Deployment", desc: "Publishing expert, structured content that satisfies Google Helpful Content." },
      { step: "04", title: "Authority Outreach", desc: "Securing contextual mentions in trusted industry publications." }
    ],
    faqs: [
      { question: "How long until we see SEO results?", answer: "Initial crawl indexing improvements happen in weeks; significant keyword rank jumps and traffic gains typically compound within 60 to 90 days." }
    ]
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads & PPC Management",
    category: "Paid Growth",
    tagline: "Laser-Targeted Ads Generating 5x to 12x ROAS",
    shortDesc: "Precision Google Search, Performance Max, and YouTube campaigns that capture high-intent buyers ready to purchase.",
    fullDesc: "Stop burning ad budget on low-quality clicks. As a certified Google Partner agency, we structure hyper-targeted Search, PMax, and remarketing campaigns combined with custom landing pages to maximize return on ad spend.",
    icon: "TrendingUp",
    metrics: "Average 6.8x Return on Ad Spend (ROAS)",
    deliverables: [
      "High-Intent Search Campaign Setup",
      "Performance Max & Shopping Campaigns",
      "High-Converting Dedicated Landing Pages",
      "Negative Keyword Mining & Budget Guardrails",
      "Advanced Conversion Tracking (GA4 & GTM)",
      "A/B Split Testing Copy & Creatives"
    ],
    benefits: [
      { title: "Immediate Qualified Inquiries", desc: "Start receiving calls and form submissions within 48 hours of launch." },
      { title: "Zero Wasted Spend", desc: "Aggressive negative keyword filtering ensures you only pay for true buyers." },
      { title: "Transparent ROI Dashboard", desc: "Live dashboard tracking your exact Cost Per Acquisition (CPA) and ROAS." }
    ],
    process: [
      { step: "01", title: "Audience & Competitor Intelligence", desc: "Spying on competitor ad copy, bids, and landing pages." },
      { step: "02", title: "Campaign Architecture", desc: "Single-intent ad groups with exact and phrase match precision." },
      { step: "03", title: "Landing Page Optimization", desc: "Custom fast landing pages with matching ad message scent." },
      { step: "04", title: "Algorithmic Bid Scaling", desc: "Smart bidding strategies dialed in for maximum conversion value." }
    ],
    faqs: [
      { question: "What minimum ad budget is recommended?", answer: "We work with businesses investing from ₹25,000/month up to enterprise scale of ₹25,00,000+/month." }
    ]
  },
  {
    id: "social-media",
    slug: "social-media-marketing",
    title: "Social Media Marketing (SMM)",
    category: "Social",
    tagline: "Viral Creative Strategy & Community Growth",
    shortDesc: "Transform your Instagram, LinkedIn, and Meta channels into client-generating engines with viral Reels, aesthetic carousels, and paid ads.",
    fullDesc: "Modern social media demands culture-first creative. We engineer scroll-stopping video content, high-aesthetic graphic carousels, and precision Meta ad funnels that turn passive scrollers into passionate brand advocates.",
    icon: "Share2",
    metrics: "+3.2M Organic Impressions Generated",
    deliverables: [
      "Content Strategy & Monthly Content Calendar",
      "Viral Short-Form Reels Production & Editing",
      "High-End Graphic Design Carousels",
      "Meta Ads (Instagram & Facebook Lead Gen)",
      "Influencer & Creator Collaborations",
      "Community Engagement & DM Funneling"
    ],
    benefits: [
      { title: "Brand Prestige", desc: "A top-tier aesthetic profile establishes instant credibility." },
      { title: "Direct WhatsApp & DM Leads", desc: "Automated direct message funnels that capture prospect contact details." },
      { title: "Organic Reach Amplification", desc: "Algorithm-optimized hooks and trending audio curation." }
    ],
    process: [
      { step: "01", title: "Brand Voice & Visual Grid Direction", desc: "Defining color moodboards, typography, and content pillars." },
      { step: "02", title: "Scripting & Production", desc: "Hook-focused video scripts designed to hold 80%+ retention." },
      { step: "03", title: "Publishing & Community Management", desc: "Strategic posting schedules and instant comment engagement." }
    ],
    faqs: [
      { question: "Do you film the videos or do we send footage?", answer: "Both! We can direct on-site shoots across Ahmedabad/Gujarat or edit your raw footage into cinematic high-retention content." }
    ]
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    title: "Brand Identity & Design System",
    category: "Design",
    tagline: "Distinctive Visual Identities That Command Premium Pricing",
    shortDesc: "Logos, color systems, typography, packaging, and brand guidelines crafted to position you as the premium choice.",
    fullDesc: "A great brand allows you to charge 3x more than competitors. We create comprehensive visual identities that exude luxury, confidence, and modern sophistication across every physical and digital touchpoint.",
    icon: "Palette",
    metrics: "100% Custom Tailored Branding",
    deliverables: [
      "Custom Logo Suite (Primary, Secondary, Submark)",
      "Color Palette & Typography System",
      "Comprehensive Brand Guidelines Book",
      "Stationery & Business Card Design",
      "Packaging & Merchandise Design",
      "Social Media Kit & Presentation Decks"
    ],
    benefits: [
      { title: "Command Premium Rates", desc: "High-end visual identity builds immediate perceived value." },
      { title: "Cohesive Omnichannel Presence", desc: "Unified brand look across website, social, print, and office." },
      { title: "Timeless Longevity", desc: "Designs built on timeless design principles, not fleeting fads." }
    ],
    process: [
      { step: "01", title: "Brand Archetype & Positioning", desc: "Finding your unique voice in the market." },
      { step: "02", title: "Concept Sketches & Vectors", desc: "Iterating through bold visual ideas and geometric symbols." },
      { step: "03", title: "Refinement & Brand Bible", desc: "Delivering vector source files and usage guidelines." }
    ],
    faqs: [
      { question: "What files do I receive?", answer: "Complete vector packages (AI, EPS, SVG, PDF) and web exports (PNG, WebP, favicon pack)." }
    ]
  },
  {
    id: "video-editing",
    slug: "video-editing",
    title: "Video Editing & Motion Graphics",
    category: "Creative",
    tagline: "High-Retention Visual Storytelling That Keeps Eyes Glued",
    shortDesc: "Fast-paced YouTube videos, cinematic brand commercials, and high-retention vertical Reels edited to perfection.",
    fullDesc: "Retention is the #1 metric that matters in modern media. We blend sound design, 3D kinetic typography, smooth pacing, and color grading to create videos that hook audiences within the first 3 seconds.",
    icon: "Video",
    metrics: "Average 78% Viewer Retention Rate",
    deliverables: [
      "High-Retention Reels & TikTok Editing",
      "Corporate Brand Films & Explainer Videos",
      "Kinetic Typography & 2D/3D Motion Graphics",
      "Sound Design & SFX Mastering",
      "Cinematic Color Grading",
      "Podcast & Long-Form YouTube Editing"
    ],
    benefits: [
      { title: "Scroll-Stopping Hooks", desc: "Engaging sound effects and visual transitions that stop thumb scroll." },
      { title: "Elevated Production Value", desc: "Gives your business the visual polish of a multimillion-dollar brand." }
    ],
    process: [
      { step: "01", title: "Footage Ingestion & Rough Cut", desc: "Selecting golden takes and trimming dead air." },
      { step: "02", title: "Motion Graphics & Captions", desc: "Dynamic animated text, zooms, and B-roll overlays." },
      { step: "03", title: "Audio Mastering & Delivery", desc: "Equalizing voice clarity and matching beats to SFX." }
    ],
    faqs: [
      { question: "What software do you use?", answer: "Adobe Premiere Pro, After Effects, DaVinci Resolve, and Blender for 3D elements." }
    ]
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & Creatives",
    category: "Design",
    tagline: "Eye-Catching Marketing Creatives That Drive Clicks",
    shortDesc: "High-converting ad banners, billboard designs, brochures, pitch decks, and digital assets tailored for maximum impact.",
    fullDesc: "Every piece of marketing collateral must tell a story. We engineer striking graphic assets that adhere strictly to your brand aesthetic while driving measurable audience action.",
    icon: "Sparkles",
    metrics: "5000+ Creatives Produced",
    deliverables: [
      "Paid Ad Banners (Meta, Google Display, LinkedIn)",
      "Corporate Brochures & Annual Reports",
      "Pitch Decks & Investor Presentations",
      "Exhibition & OOH Billboard Designs",
      "Custom Digital Illustrations & Infographics"
    ],
    benefits: [
      { title: "Fast Turnaround", desc: "Rapid 24-48 hour delivery for ad campaigns and collateral." },
      { title: "Higher Ad Click-Throughs", desc: "Designed around psychological contrast and clarity." }
    ],
    process: [
      { step: "01", title: "Creative Brief", desc: "Aligning on goals, target audience, and dimensions." },
      { step: "02", title: "Design Exploration", desc: "Presenting multiple aesthetic variants." },
      { step: "03", title: "Final Polish & Delivery", desc: "Print-ready CMYK and optimized RGB digital assets." }
    ],
    faqs: [
      { question: "Can you deliver source files?", answer: "Yes, fully organized Figma, Photoshop, or Illustrator files are included." }
    ]
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO & Google Maps 3-Pack",
    category: "Organic Growth",
    tagline: "The #1 Choice for Local Customers in Your City",
    shortDesc: "Dominate Google Maps and local search results across Ahmedabad, Gujarat, and target cities to generate daily walk-ins and phone calls.",
    fullDesc: "When customers nearby search 'best clinic near me' or 'top real estate agency Ahmedabad', your business must be in the Google 3-Pack. We optimize your Google Business Profile (GBP), citations, and geo-targeted keywords to secure consistent local phone calls.",
    icon: "MapPin",
    metrics: "Top 3 Ranking in Local Google Maps",
    deliverables: [
      "Google Business Profile (GBP) Full Optimization",
      "Local Citation Building & NAP Consistency",
      "Geo-Targeted Landing Pages",
      "Review Generation & Reputation Management Strategy",
      "Local Schema Markup (LocalBusiness, GeoCoordinates)",
      "Google Maps Rank Tracking Grid"
    ],
    benefits: [
      { title: "Direct Phone Inquiries", desc: "Customers call directly from Google Maps with zero friction." },
      { title: "Hyper-Local Dominance", desc: "Capture customers within a 5km - 25km radius of your physical locations." }
    ],
    process: [
      { step: "01", title: "GBP Audit & Geo-Grid Mapping", desc: "Pinpointing ranking weaknesses block by block." },
      { step: "02", title: "Citation Cleanup & Expansion", desc: "Fixing mismatched phone numbers and addresses across 100+ directories." },
      { step: "03", title: "Local Link & Review Engine", desc: "Acquiring local press links and automating review invites." }
    ],
    faqs: [
      { question: "Is Local SEO suitable for multi-location businesses?", answer: "Yes, we handle single clinics or 50+ retail store branches with dedicated localized pages." }
    ]
  },
  {
    id: "business-automation",
    slug: "business-automation",
    title: "Business & WhatsApp Automation",
    category: "Automation",
    tagline: "Automate Inquiries, CRM Routing & Customer Follow-Ups",
    shortDesc: "Eliminate manual lead leakage with automated WhatsApp chatbots, CRM integrations, and instant lead notification workflows.",
    fullDesc: "Speed to lead is everything. Responding to a lead in under 60 seconds increases conversion rates by 391%. We build automated WhatsApp API workflows, CRM pipelines, and webhook triggers that qualify prospects and book meetings automatically.",
    icon: "Zap",
    metrics: "Instant Sub-60s Lead Response Time",
    deliverables: [
      "Official WhatsApp Business Cloud API Integration",
      "Automated Lead Qualification Chatbots",
      "CRM Integration (HubSpot, Zoho, LeadSquared)",
      "Instant WhatsApp Notifications for Sales Teams",
      "Automated Review Request Drips",
      "Custom Zapier & Make.com Automation Workflows"
    ],
    benefits: [
      { title: "Zero Lead Drop-Off", desc: "Every lead receives an instant personalized WhatsApp greeting." },
      { title: "Save 20+ Hours Per Week", desc: "Routine questions and appointment scheduling are handled hands-free." },
      { title: "Higher Show-Up Rates", desc: "Automated meeting reminders sent 24 hours and 1 hour before calls." }
    ],
    process: [
      { step: "01", title: "Workflow Mapping", desc: "Identifying manual bottlenecks in your lead capture journey." },
      { step: "02", title: "API & Webhook Hookup", desc: "Connecting website forms, Meta ads, and WhatsApp to your CRM." },
      { step: "03", title: "Live Simulation & Launch", desc: "Testing all edge cases to guarantee 100% reliable execution." }
    ],
    faqs: [
      { question: "Do we need the green tick for WhatsApp API?", answer: "You can use official WhatsApp Cloud API right away; we also guide you through the Green Tick verification process." }
    ]
  }
];
