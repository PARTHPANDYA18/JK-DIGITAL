import Image from "next/image";
import { cn } from "@/lib/utils";

interface JkLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "dark" | "badge";
}

export default function JkLogo({
  className,
  size = "md",
  showText = true,
  variant = "dark",
}: JkLogoProps) {
  // Dimensions mapping
  const sizeMap = {
    sm: { width: 36, height: 31, boxH: "h-9", textClass: "text-sm" },
    md: { width: 48, height: 41, boxH: "h-11", textClass: "text-base" },
    lg: { width: 68, height: 58, boxH: "h-14", textClass: "text-xl" },
    xl: { width: 110, height: 94, boxH: "h-24", textClass: "text-2xl" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-2xl bg-white p-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.15)] border border-white/20 transition-transform group-hover:scale-105",
          currentSize.boxH,
          className
        )}
      >
        <Image
          src="/logo-original.png"
          alt="JK Digital Solutions"
          width={currentSize.width}
          height={currentSize.height}
          className="object-contain h-full w-auto"
          priority
        />
      </div>
    );
  }

  // Dark variant: white letters + original red on transparent background
  return (
    <div className={cn("inline-flex items-center gap-2.5 group", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center transition-transform group-hover:scale-105",
          currentSize.boxH
        )}
      >
        <Image
          src="/logo-white.png"
          alt="JK Digital Solutions Logo"
          width={currentSize.width}
          height={currentSize.height}
          className="object-contain h-full w-auto drop-shadow-[0_0_12px_rgba(255,107,0,0.3)]"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-black tracking-tight text-white flex items-center gap-1",
              currentSize.textClass
            )}
          >
            JK DIGITAL
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] animate-pulse" />
          </span>
          <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium mt-0.5">
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
