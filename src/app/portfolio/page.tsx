import { Metadata } from "next";
import PortfolioBento from "@/components/portfolio/PortfolioBento";

export const metadata: Metadata = {
  title: "Agency Portfolio & Work Showcase",
  description: "Explore our verified client case studies, custom Next.js builds, Google Ads campaigns, and SEO ranking transformations.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <PortfolioBento />
    </div>
  );
}
