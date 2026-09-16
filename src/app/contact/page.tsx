import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Strategy Session",
  description: "Schedule a 20-minute growth consultation with JK Digital Solutions. Located in Bodakdev, SG Highway, Ahmedabad, Gujarat.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
