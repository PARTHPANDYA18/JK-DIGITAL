"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const whatsappUrl =
    "https://wa.me/919876543210?text=Hello%20JK%20Digital%20Solutions,%20I%20am%20looking%20for%20a%20high-performance%20website%20and%20marketing%20growth%20strategy.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:flex mr-3 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-semibold text-white shadow-xl pointer-events-none border border-white/10"
      >
        <span>Chat with Growth Expert</span>
      </motion.div>

      {/* Floating Button with Pulse Halo */}
      <div className="relative">
        {/* Neon Orange Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#FF6B00] opacity-40 blur-md animate-ping" />
        <span className="absolute -inset-2 rounded-full bg-[#FF8A26]/20 blur-lg animate-pulse" />

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-shadow cursor-pointer"
          aria-label="Contact JK Digital on WhatsApp"
          data-cursor-text="WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white text-white" />
        </motion.a>
      </div>
    </div>
  );
}
