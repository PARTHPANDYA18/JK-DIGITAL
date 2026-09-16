export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  heroImage: string;
  metrics: { value: string; label: string; change: string }[];
  problem: string;
  strategy: string;
  execution: string[];
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "aurora-fine-dining",
    title: "Scaling Ahmedabad's Premier Luxury Dining Experience",
    subtitle: "How a Next.js cinematic web app sparked a 340% increase in weekly table reservations.",
    client: "Aurora Hospitality",
    industry: "Fine Dining & Hospitality",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { value: "+340%", label: "Online Reservations", change: "Within 45 Days" },
      { value: "0.58s", label: "Page Load Time", change: "Down from 5.2s" },
      { value: "₹2.4M", label: "Direct Beverage Revenue", change: "First Quarter" }
    ],
    problem: "Aurora operated a prestigious culinary establishment, but their previous site was built on an overloaded generic template. Prospective patrons suffered 5-second delays, broken mobile booking calendars, and zero sense of the restaurant's opulent ambiance.",
    strategy: "JK Digital rebuilt the entire digital presence from scratch using Next.js 15 and Framer Motion. We incorporated ambient video reels of the master chef in action, built an instant one-tap table reservation wizard connected to WhatsApp Business API, and optimized for local food blogger searches.",
    execution: [
      "Custom responsive design with dark gold and obsidian color palette.",
      "Ambient WebGL video background with zero battery drain on mobile.",
      "Integrated WhatsApp concierge for VIP booth and birthday event bookings.",
      "Local SEO dominance for 'fine dining Ahmedabad' and 'luxury candle light dinner'."
    ],
    outcome: "Within 6 weeks of launch, weekend reservations were fully booked 14 days in advance. Organic mobile traffic surged by 280%, while page speed score hit a flawless 99 on Google Lighthouse.",
    testimonial: {
      quote: "JK Digital transformed our digital presence completely. Our patrons constantly compliment the elegance of our website, and our reservations have never been higher.",
      author: "Kavya Patel",
      role: "Managing Director",
      company: "Aurora Hospitality"
    }
  },
  {
    id: "cs-2",
    slug: "shivalik-signature-estates",
    title: "Generating ₹82 Crore in Luxury Property Sales via Laser PPC",
    subtitle: "How hyper-targeted Google Search & PMax campaigns drove high-net-worth real estate buyers.",
    client: "Shivalik Realty Group",
    industry: "Real Estate & Luxury Housing",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { value: "₹82 Cr", label: "Property Sales Closed", change: "In 6 Months" },
      { value: "-79%", label: "Cost Per Lead", change: "₹4,200 to ₹840" },
      { value: "680+", label: "Verified Buyer Inquiries", change: "100% Phone Verified" }
    ],
    problem: "The client was spending ₹3.5 Lakhs per month on broad social ads and receiving hundreds of bogus leads—people looking for cheap rentals or dialing wrong numbers, wasting the sales team's time.",
    strategy: "We shifted focus strictly to high-intent Google Search terms like '4 BHK luxury apartments Ahmedabad' and 'buy penthouse near SG Highway'. We coupled this with a lightning-fast dedicated landing page with interactive floor plans and OTP phone verification.",
    execution: [
      "Eliminated 1,400+ wasteful negative keywords (e.g., 'rent', 'cheap', 'jobs').",
      "Created a dedicated 60fps landing page with virtual tour preview.",
      "Built instant CRM auto-dialer routing leads to senior sales managers in <2 minutes.",
      "Retargeted website visitors with exclusive drone walkthrough video ads."
    ],
    outcome: "Sales team productivity tripled because every lead was qualified and financially capable. 14 luxury units were booked within 180 days directly attributed to JK Digital's campaigns.",
    testimonial: {
      quote: "The quality of leads is night and day compared to other agencies. JK Digital understands how affluent buyers search and make decisions.",
      author: "Rajesh Shivalik",
      role: "Head of Marketing",
      company: "Shivalik Realty"
    }
  },
  {
    id: "cs-3",
    slug: "dr-mehta-healthcare-seo",
    title: "Dominating Organic Search for 42+ High-Ticket Healthcare Keywords",
    subtitle: "From page 6 obscurity to Google Page 1 top rankings for advanced implant dentistry.",
    client: "Dr. Mehta Dental & Implantology",
    industry: "Healthcare & Specialized Clinics",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { value: "#1", label: "Google Maps Rank", change: "Across 15km Radius" },
      { value: "+480%", label: "Organic Monthly Patients", change: "In 90 Days" },
      { value: "210+", label: "Direct Phone Inquiries", change: "Every Month" }
    ],
    problem: "Corporate hospital chains with massive advertising budgets were monopolizing patient appointments, while Dr. Mehta's highly reputable clinic had almost zero organic search visibility.",
    strategy: "Deployed our proprietary Local SEO 3-Pack Growth Engine. We created in-depth clinical patient guides, structured medical schema, optimized Google Business Profile, and built high-trust local media citations.",
    execution: [
      "Comprehensive medical entity schema linking Dr. Mehta's credentials and dental certifications.",
      "Built localized neighborhood landing pages for high-income catchment areas.",
      "Automated post-treatment 5-star Google review collection via SMS and WhatsApp.",
      "Core Web Vitals remediation ensuring instant load on patient mobile devices."
    ],
    outcome: "The clinic now occupies rank #1 to #3 for 42 high-value cosmetic and implant dental search terms, filling the appointment schedule 3 weeks ahead without ongoing pay-per-click spend.",
    testimonial: {
      quote: "We don't need to pay for continuous ads anymore. Google organic traffic and Maps now provide the majority of our new patient consultations every day.",
      author: "Dr. Aniket Mehta",
      role: "Chief Dental Surgeon",
      company: "Dr. Mehta Dental"
    }
  },
  {
    id: "cs-4",
    slug: "velvet-botanics-scaling",
    title: "112% Conversion Rate Surge for High-End D2C Skincare",
    subtitle: "Replacing a slow Shopify theme with headless Next.js Commerce architecture.",
    client: "Velvet Botanics",
    industry: "Ecommerce & D2C Beauty",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { value: "+112%", label: "Conversion Rate", change: "2.2% to 4.8%" },
      { value: "9.2x", label: "Peak Festival ROAS", change: "Diwali Campaign" },
      { value: "1.2s", label: "Mobile Checkout Velocity", change: "Down from 6.8s" }
    ],
    problem: "High drop-off rates on mobile product pages due to bloated app scripts, slow image rendering, and a cumbersome multi-step checkout form.",
    strategy: "Designed and engineered a custom Headless Next.js Commerce frontend backed by Shopify's robust inventory engine, featuring slide-out quick-add carts and smart bundle offers.",
    execution: [
      "Dynamic image optimization serving WebP and AVIF next-gen formats.",
      "One-click UPI / Card checkout integration eliminating cart hesitation.",
      "Interactive skincare routine quiz guiding shoppers to the ideal product set.",
      "Automated personalized abandoned-cart recovery sequences on WhatsApp."
    ],
    outcome: "Velvet Botanics doubled their monthly recurring revenue while reducing their server and app plugin costs significantly.",
    testimonial: {
      quote: "JK Digital's headless approach transformed our store into an absolute conversion powerhouse. Our mobile sales numbers speak for themselves.",
      author: "Aanya Shah",
      role: "Co-Founder",
      company: "Velvet Botanics"
    }
  }
];
