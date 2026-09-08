"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  sizes?: string;
  fill?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className,
  strength = 50,
  sizes = "(max-width: 640px) 100vw, 50vw",
  fill = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const flatY = useTransform(() => 0);
  const y = prefersReduced ? flatY : rawY;

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden",
        fill ? "absolute inset-0" : "relative",
        className,
      )}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[12%] -bottom-[12%]">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}
