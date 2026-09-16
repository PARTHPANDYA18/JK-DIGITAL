export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Website" | "SEO" | "Ads" | "Branding" | "Social Media" | "Video";
  year: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  accentColor: string;
  featured: boolean;
  bentoSpan?: string; // Tailwind grid span
  beforeImage: string;
  afterImage: string;
  liveUrl?: string;
  tags: string[];
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "proj-1",
    slug: "aurora-luxury-dining",
    title: "Aurora Fine Dining & Lounge",
    client: "Aurora Hospitality Group",
    category: "Website",
    year: "2025",
    tagline: "300% Reservation Surge via Cinematic Digital Storytelling",
    challenge: "The client operated a Michelin-standard culinary restaurant in Ahmedabad but had a slow WordPress template that failed to convey luxury, resulting in high bounce rates and low table bookings.",
    solution: "Engineered a bespoke Next.js 15 web experience with dark luxury aesthetics, ambient video backgrounds, smooth table reservation flow, and integrated WhatsApp concierge.",
    results: [
      { label: "Online Table Reservations", value: "+340%" },
      { label: "Page Load Time", value: "0.6s" },
      { label: "Average Session Duration", value: "4m 12s" }
    ],
    accentColor: "#FF6B00",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-8",
    beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=70",
    afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://aurora-lounge.example.com",
    tags: ["Next.js", "Framer Motion", "Table Reservation API", "Luxury UI"]
  },
  {
    id: "proj-2",
    slug: "shivalik-estates-leads",
    title: "Shivalik Signature Estates",
    client: "Shivalik Realty",
    category: "Ads",
    year: "2025",
    tagline: "₹82M Property Sales Generated from High-Intent Google Ads",
    challenge: "High cost-per-lead (₹4,200+) on standard Facebook ads with a 70% rate of non-contactable, low-budget prospects for luxury penthouses.",
    solution: "Switched to high-intent Google Search & PMax campaigns with strict geographic targeting, dynamic negative keyword filters, and a high-converting single-property landing page.",
    results: [
      { label: "Qualified Luxury Leads", value: "680+" },
      { label: "Cost Per Qualified Lead", value: "₹840 (-79%)" },
      { label: "Gross Property Bookings", value: "₹82M" }
    ],
    accentColor: "#FF8A26",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-4",
    beforeImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=70",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://shivalik-estates.example.com",
    tags: ["Google Ads", "Landing Page CRO", "Real Estate PPC"]
  },
  {
    id: "proj-3",
    slug: "dr-mehta-dental-seo",
    title: "Dr. Mehta Advanced Dentistry",
    client: "Dr. Mehta Healthcare",
    category: "SEO",
    year: "2025",
    tagline: "Rank #1 on Google for 42+ High-Ticket Dental Keywords",
    challenge: "The dental practice was invisible on Google Maps and organic search, losing premium cosmetic dentistry and implant patients to corporate clinic chains.",
    solution: "Full-scale technical overhaul, Local 3-Pack geo-targeting, schema markup for medical clinics, and authoritative medical content addressing dental implant procedures.",
    results: [
      { label: "Organic Monthly Patients", value: "+480%" },
      { label: "Top 3 Google Rankings", value: "42 Keywords" },
      { label: "Monthly Phone Enquiries", value: "210+ Calls" }
    ],
    accentColor: "#FF6B00",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-4",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=70",
    afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    tags: ["Local SEO", "Google Maps 3-Pack", "Medical Schema"]
  },
  {
    id: "proj-4",
    slug: "velvet-botanics-ecommerce",
    title: "Velvet Botanics Luxury Skincare",
    client: "Velvet Botanics D2C",
    category: "Website",
    year: "2025",
    tagline: "Headless D2C Store Delivering 9.2x ROAS & 1.2s Checkout",
    challenge: "Previous Shopify store had a clunky checkout process, 6-second mobile load time, and an average bounce rate exceeding 68%.",
    solution: "Constructed a custom headless Next.js Commerce storefront with Instant Search, 1-click Razorpay checkout, bundle upsells, and automated cart abandonment recovery.",
    results: [
      { label: "Mobile Conversion Rate", value: "4.8% (+112%)" },
      { label: "Average Order Value", value: "+38%" },
      { label: "Checkout Velocity", value: "1.2s" }
    ],
    accentColor: "#FF8A26",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-8",
    beforeImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=70",
    afterImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    tags: ["Headless Shopify", "Next.js Commerce", "D2C Scaling"]
  },
  {
    id: "proj-5",
    slug: "zenith-apparel-branding",
    title: "Zenith Activewear",
    client: "Zenith Performance Co.",
    category: "Branding",
    year: "2025",
    tagline: "Rebranding a Premium Activewear Label for Pan-India Expansion",
    challenge: "The brand suffered from a generic aesthetic that blended in with low-cost gym wear, preventing them from charging premium athletic apparel margins.",
    solution: "Created an aggressive, sleek brand identity including custom geometric typography, packaging boxes, athletic lookbooks, and high-energy motion graphic guidelines.",
    results: [
      { label: "Retail Wholesale Inquiries", value: "+210%" },
      { label: "Average Price Point Lift", value: "₹1,499 → ₹2,899" },
      { label: "Social Following Growth", value: "65,000+" }
    ],
    accentColor: "#FF6B00",
    featured: false,
    bentoSpan: "col-span-12 lg:col-span-6",
    beforeImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=70",
    afterImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Identity Design", "Packaging", "Brand Bible"]
  },
  {
    id: "proj-6",
    slug: "pulse-fitness-social",
    title: "Pulse Strength & Conditioning",
    client: "Pulse Gym Network",
    category: "Social Media",
    year: "2025",
    tagline: "Viral Reels Strategy Delivering 1.8M Views & 420 Member Signups",
    challenge: "Struggling to stand out in a saturated fitness market relying on static photo posts with fewer than 200 views per post.",
    solution: "Engineered high-tempo transformation reels, trainer breakdown videos, trending audio hooks, and automated WhatsApp link-in-bio lead captures.",
    results: [
      { label: "Organic Reel Views", value: "1.8M+" },
      { label: "New Member Memberships", value: "420+" },
      { label: "Instagram Follower Gain", value: "18,400" }
    ],
    accentColor: "#FF8A26",
    featured: false,
    bentoSpan: "col-span-12 lg:col-span-6",
    beforeImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=70",
    afterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    tags: ["Viral Reels", "Short-Form Video", "Community Growth"]
  }
];
