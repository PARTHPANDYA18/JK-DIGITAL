"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import JkLogo from "@/components/ui/JkLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at very top
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling DOWN -> Hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> Show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -110,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none"
      >
        <nav className="pointer-events-auto w-full rounded-2xl glass-nav px-4 py-3 sm:px-6 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer"
            data-cursor-text="JK"
          >
            <JkLogo size="sm" showText={true} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  data-cursor-text="Go"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/audit"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
              data-cursor-text="Audit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Get Free Audit</span>
            </Link>

            <a
              href="https://wa.me/918401296111?text=Hi%20JK%20Digital,%20I%20am%20interested%20in%20scaling%20my%20business%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-black bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all flex items-center gap-1.5 active:scale-95"
              data-cursor-text="Chat"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#FF6B00] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Slide-Over Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 xl:hidden rounded-2xl glass-nav p-6 border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-medium tracking-wide transition-colors border-b border-white/5 ${
                    pathname === link.href ? "text-[#FF6B00] font-bold" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                <Link
                  href="/audit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                  Get Free Audit
                </Link>
                <a
                  href="https://wa.me/918401296111?text=Hi%20JK%20Digital,%20I%20am%20interested%20in%20scaling%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-[#FF8A26] to-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
