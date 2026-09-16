export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  avatar: string;
  text: string;
  projectType: string;
  verifiedGoogle: boolean;
  videoUrl?: string;
  statHighlight?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya Solanki",
    role: "Director",
    company: "Solanki Industrial Tools",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    avatar: "VS",
    text: "Before working with JK Digital Solutions, our website was a static brochure that brought zero inquiries. Within 60 days of launching the new site and Google Ads setup, we closed export orders worth over ₹45 Lakhs. Truly the best digital agency in Gujarat.",
    projectType: "Website & Google Ads",
    verifiedGoogle: true,
    statHighlight: "₹45L+ New Export Deals"
  },
  {
    id: "test-2",
    name: "Dr. Aniket Mehta",
    role: "Founder & Lead Surgeon",
    company: "Mehta Advanced Dental Care",
    location: "Bodakdev, Ahmedabad",
    rating: 5,
    avatar: "AM",
    text: "Their Local SEO and Google Maps optimization is extraordinary. We rank #1 across all of West Ahmedabad for dental implants. We went from struggling to fill weekend slots to being completely booked out 3 weeks in advance.",
    projectType: "Local SEO & Reputation",
    verifiedGoogle: true,
    statHighlight: "Rank #1 for 42+ Terms"
  },
  {
    id: "test-3",
    name: "Kavya Patel",
    role: "Managing Director",
    company: "Aurora Hospitality",
    location: "Sindhu Bhavan, Ahmedabad",
    rating: 5,
    avatar: "KP",
    text: "The aesthetic brilliance of our website gives our guests the exact Michelin-star luxury experience before they even step foot inside. Reservations jumped 340% in our first quarter. The custom WhatsApp concierge is a game changer.",
    projectType: "Next.js Web App & SMM",
    verifiedGoogle: true,
    statHighlight: "+340% Reservations"
  },
  {
    id: "test-4",
    name: "Rajesh Shivalik",
    role: "VP of Marketing",
    company: "Shivalik Realty",
    location: "Ahmedabad & Surat",
    rating: 5,
    avatar: "RS",
    text: "JK Digital's Google Ads targeting eliminated all junk leads. Every single lead coming through the custom landing page is a high-net-worth investor capable of buying 4 BHK apartments. Closed 14 premium units in record time.",
    projectType: "Google Ads & CRO",
    verifiedGoogle: true,
    statHighlight: "₹82 Cr Sales Closed"
  },
  {
    id: "test-5",
    name: "Pooja Singhania",
    role: "Founder",
    company: "Velvet Botanics D2C",
    location: "Mumbai, Maharashtra",
    rating: 5,
    avatar: "PS",
    text: "Migrating to a headless Next.js store engineered by JK Digital cut our page load time from 6.8s to 1.2s. Our mobile conversion rate immediately doubled. They are technical geniuses who genuinely care about client revenue.",
    projectType: "Ecommerce & D2C Growth",
    verifiedGoogle: true,
    statHighlight: "112% Conversion Lift"
  },
  {
    id: "test-6",
    name: "Devang Joshi",
    role: "CEO",
    company: "Zenith Activewear",
    location: "Surat, Gujarat",
    rating: 5,
    avatar: "DJ",
    text: "Their rebranding and social media reel strategy elevated our brand perception from a local gym-wear manufacturer to a pan-India lifestyle label. We were able to double our retail margins without losing a single customer.",
    projectType: "Branding & Motion Video",
    verifiedGoogle: true,
    statHighlight: "2x Profit Margins"
  }
];
