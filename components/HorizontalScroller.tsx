"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroller({
  children,
  className,
}: HorizontalScrollerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className={`no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-6 pb-4 sm:gap-6 sm:scroll-pl-10 ${className ?? ""}`}
      >
        {children}
      </div>

      <div className="mt-6 hidden items-center gap-3 md:flex">
        <button
          type="button"
          aria-label="Scroll left"
          data-cursor-hover
          onClick={() => scrollBy(-1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-off-white/30 text-off-white transition-colors hover:border-off-white"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          data-cursor-hover
          onClick={() => scrollBy(1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-off-white/30 text-off-white transition-colors hover:border-off-white"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
