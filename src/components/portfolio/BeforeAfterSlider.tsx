"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Old WordPress Website",
  afterLabel = "JK Digital Growth Engine (2026)",
  title = "Interactive Redesign Transformation",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="w-full rounded-2xl glass-panel p-6 border border-white/10 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF6B00] flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Visual Proof
          </span>
          <h4 className="font-heading font-bold text-base text-white">{title}</h4>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <MoveHorizontal className="w-4 h-4 text-[#FF6B00]" />
          <span>Drag slider to compare</span>
        </div>
      </div>

      <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden select-none border border-white/10">
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#FF6B00]/40 text-xs font-bold text-[#FF8A26]">
            {afterLabel}
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-[#FF6B00] shadow-[0_0_15px_#FF6B00]"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full min-w-[700px] sm:min-w-[900px]">
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover filter grayscale contrast-125"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-medium text-neutral-300">
            {beforeLabel}
          </div>
        </div>

        {/* Range Slider Control overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Comparison slider"
        />

        {/* Divider Handle Marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF6B00] text-black flex items-center justify-center pointer-events-none shadow-[0_0_20px_#FF6B00] z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <MoveHorizontal className="w-4 h-4 text-black font-bold" />
        </div>
      </div>
    </div>
  );
}
