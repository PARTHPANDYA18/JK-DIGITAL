"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-interactive]");
      const customCursorEl = target.closest("[data-cursor-text]") as HTMLElement | null;

      if (customCursorEl) {
        const text = customCursorEl.getAttribute("data-cursor-text") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full text-[10px] font-semibold tracking-wider uppercase text-white shadow-lg transition-colors"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorText ? 76 : isHovered ? 44 : 14,
        height: cursorText ? 76 : isHovered ? 44 : 14,
        backgroundColor: cursorText
          ? "rgba(255, 107, 0, 0.95)"
          : isHovered
          ? "rgba(255, 107, 0, 0.25)"
          : "rgba(255, 107, 0, 0.85)",
        borderColor: isHovered ? "rgba(255, 138, 38, 0.9)" : "transparent",
        borderWidth: isHovered ? 1.5 : 0,
        boxShadow: isHovered
          ? "0 0 25px rgba(255, 107, 0, 0.6)"
          : "0 0 10px rgba(255, 107, 0, 0.4)",
        backdropFilter: isHovered ? "blur(4px)" : "none",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="text-center font-bold tracking-widest text-[11px] text-white select-none px-1"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
