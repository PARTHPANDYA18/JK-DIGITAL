import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloating from "@/components/whatsapp/WhatsAppFloating";
import CustomCursor from "@/components/cursor/CustomCursor";
import Preloader from "@/components/preloader/Preloader";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jkdigital.in"),
  title: {
    default: "JK Digital Solutions | We Build Digital Growth Machines",
    template: "%s | JK Digital Solutions",
  },
  description:
    "Ahmedabad's premier high-performance digital marketing, custom Next.js web development, SEO, and Google Ads agency. Driving measurable revenue across Gujarat and India.",
  keywords: [
    "Digital Marketing Agency Ahmedabad",
    "Website Development Gujarat",
    "Next.js Development Agency",
    "Google Ads Management Ahmedabad",
    "Local SEO 3-Pack Services",
    "Ecommerce Development India",
    "Brand Identity Design",
    "JK Digital Solutions",
  ],
  authors: [{ name: "JK Digital Solutions" }],
  creator: "JK Digital Solutions",
  publisher: "JK Digital Solutions",
  icons: {
    icon: "/logo-white.png",
    shortcut: "/logo-white.png",
    apple: "/logo-white.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jkdigital.in",
    title: "JK Digital Solutions | We Build Digital Growth Machines",
    description:
      "Premier digital marketing, custom Next.js development, SEO, and Google Ads agency in Ahmedabad, Gujarat.",
    siteName: "JK Digital Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "JK Digital Solutions Digital Growth Machines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Digital Solutions | We Build Digital Growth Machines",
    description:
      "Premier digital marketing, custom Next.js development, SEO, and Google Ads agency in Ahmedabad, Gujarat.",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F8F8F8] selection:bg-[#FF6B00] selection:text-black">
        {/* SEO Structured Data */}
        <JsonLd />

        {/* Global Cinematic Elements */}
        <div className="noise-overlay" aria-hidden="true" />
        <Preloader />
        <CustomCursor />

        <SmoothScrollProvider>
          {/* Header Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1">{children}</main>

          {/* Floating WhatsApp Quick Action */}
          <WhatsAppFloating />

          {/* Agency Footer with Techinite Attribution */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
