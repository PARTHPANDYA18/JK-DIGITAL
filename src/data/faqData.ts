export interface FAQItem {
  id: string;
  category: "General" | "Web Development" | "SEO & Ads" | "Pricing & Process";
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What makes JK Digital Solutions different from typical digital marketing agencies?",
    answer: "Most agencies sell generic cookie-cutter templates, outsource their work, and report vanity metrics like 'impressions' and 'likes'. At JK Digital Solutions, we engineer full-funnel digital growth machines. We build custom Next.js websites that load in under 1 second, paired with high-intent Google Ads and technical SEO campaigns that directly generate verified phone calls and revenue."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Where is JK Digital Solutions located, and do you work with clients outside Ahmedabad?",
    answer: "Our headquarters is located in Ahmedabad, Gujarat. While we love meeting local clients in person, over 40% of our client base spans across Mumbai, Delhi, Bangalore, the UK, USA, and Dubai. All reporting, sprint updates, and strategy reviews are conducted smoothly via Google Meet and dedicated WhatsApp channels."
  },
  {
    id: "faq-3",
    category: "Web Development",
    question: "Why do you use Next.js and React instead of WordPress or Elementor?",
    answer: "WordPress and Elementor websites are plagued by heavy plugin bloat, sluggish 5+ second load times, security vulnerabilities, and generic templates. We build custom Next.js 15 web applications to guarantee 98+ Google Lighthouse scores, instant page transitions, bespoke 3D micro-interactions, and zero vulnerability to brute-force attacks."
  },
  {
    id: "faq-4",
    category: "Web Development",
    question: "How long does a website project take from kick-off to live launch?",
    answer: "A bespoke agency website or high-converting landing page is typically designed, developed, tested, and launched in 2 to 4 weeks. For large-scale headless ecommerce platforms or complex CRM integrations, timelines range between 4 to 6 weeks."
  },
  {
    id: "faq-5",
    category: "SEO & Ads",
    question: "How fast can we expect results from Google Ads vs SEO?",
    answer: "With our certified Google Ads management, you can start receiving qualified calls and lead inquiries within 48 to 72 hours of launching your campaign. For organic SEO and Google Maps 3-Pack rankings, momentum starts building within 30 days, with dominant page-1 rankings compounding between 60 to 90 days."
  },
  {
    id: "faq-6",
    category: "SEO & Ads",
    question: "Do you provide transparent reporting so we know where our ad budget went?",
    answer: "Absolutely. We despise vanity reports. You receive access to a 24/7 real-time dashboard linking your ad spend directly to verified leads, Cost Per Lead (CPL), and Return on Ad Spend (ROAS). In addition, we conduct bi-weekly strategy calls to review optimization milestones."
  },
  {
    id: "faq-7",
    category: "Pricing & Process",
    question: "What are your engagement models and pricing structure?",
    answer: "We offer tailored sprint packages based on your growth stage: from high-converting custom website builds to monthly growth retainers for SEO, Google Ads, and Social Media Marketing. Contact us for a free audit and custom proposal."
  },
  {
    id: "faq-8",
    category: "Pricing & Process",
    question: "What is required to get started with JK Digital?",
    answer: "Simply click 'Get Free Audit' or message us on WhatsApp. We schedule a 20-minute discovery call to evaluate your current digital presence, identify bottlenecks, and present a clear growth roadmap with zero obligation."
  }
];
