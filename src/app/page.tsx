import HeroSection from "@/components/hero/HeroSection";
import TrustBar from "@/components/marquee/TrustBar";
import ServicesSection from "@/components/services/ServicesSection";
import WhyChooseUs from "@/components/comparison/WhyChooseUs";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import PortfolioBento from "@/components/portfolio/PortfolioBento";
import DeviceMockupShowcase from "@/components/showcase/DeviceMockupShowcase";
import GoogleAdsSection from "@/components/specialized/GoogleAdsSection";
import SeoRankingSection from "@/components/specialized/SeoRankingSection";
import SocialMediaSection from "@/components/specialized/SocialMediaSection";
import IndustriesCarousel from "@/components/industries/IndustriesCarousel";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import FaqSection from "@/components/faq/FaqSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 01. Cinematic Fullscreen Hero with Canvas Particles */}
      <HeroSection />

      {/* 02. Continuous Partner & Technology Trust Marquee */}
      <TrustBar />

      {/* 03. 10 High-Impact Core Agency Services */}
      <ServicesSection />

      {/* 04. Traditional Agency vs JK Digital Interactive Matrix */}
      <WhyChooseUs />

      {/* 05. 7-Stage Growth Engineering Methodology */}
      <ProcessTimeline />

      {/* 06. Bento Grid Portfolio & Before/After Transformation Slider */}
      <PortfolioBento />

      {/* 07. Responsive 3D Device Showcase (Laptop, Tablet, Phone) */}
      <DeviceMockupShowcase />

      {/* 08. Google Ads & Live ROAS Revenue Simulator */}
      <GoogleAdsSection />

      {/* 09. SEO Rank #1 Tracker & Technical Audit Scorecard */}
      <SeoRankingSection />

      {/* 10. Social Media & Viral Reels Video Editing */}
      <SocialMediaSection />

      {/* 11. Industries We Serve (11 Niches) Carousel */}
      <IndustriesCarousel />

      {/* 12. Verified Google 5-Star Reviews & Video Testimonials */}
      <TestimonialsSlider />

      {/* 13. Animated FAQ Accordion */}
      <FaqSection />

      {/* 14. Lead-Generating Glassmorphism Contact Form */}
      <ContactSection />
    </div>
  );
}
