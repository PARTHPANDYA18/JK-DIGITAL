export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  linkedin: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Jiten Khatri",
    role: "Founder & Managing Director",
    specialty: "Growth Strategy & Agency Vision",
    bio: "8+ years scaling businesses across Gujarat and India. Passionate about engineering digital systems that turn ad spend into predictable revenue.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "team-2",
    name: "Parth Sharma",
    role: "Head of Engineering & Motion",
    specialty: "Next.js, 3D Canvas, Creative Tech",
    bio: "Obsessed with creating web experiences that look like art and perform like Formula 1 cars. Specializes in modern reactive web architectures.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "team-3",
    name: "Ananya Desai",
    role: "SEO & Content Architecture Lead",
    specialty: "Technical SEO & Entity Graph",
    bio: "Has ranked over 15,000 keywords on Page 1 of Google. Deep expertise in algorithm updates and programmatic content architectures.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "team-4",
    name: "Rohan Varma",
    role: "Senior Paid Media Strategist",
    specialty: "Google Search, PMax & Meta Ads",
    bio: "Managed over ₹12 Crore in profitable ad spend. Master of negative keyword mining, landing page conversion psychology, and scaling ROAS.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  }
];

export const companyValues = [
  {
    number: "01",
    title: "Relentless ROI Focus",
    desc: "We don't measure success by vanity impressions. We measure success by your bank account: qualified leads, booked appointments, and closed sales."
  },
  {
    number: "02",
    title: "Obsession with Speed",
    desc: "From 60fps animations to 24-hour turnaround on emergency ad updates, we value your time and execute with surgical precision."
  },
  {
    number: "03",
    title: "100% Radical Transparency",
    desc: "Live dashboards with zero smoke and mirrors. You see every rupee spent and every lead generated in real-time."
  },
  {
    number: "04",
    title: "Engineering Luxury",
    desc: "We refuse to build generic websites. Every pixel, transition, and brand visual is designed to make your competitors feel obsolete."
  }
];
