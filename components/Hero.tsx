"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";

interface HeroCta {
  label: string;
  href: string;
  variant?: "solid" | "outline";
}

interface HeroVideo {
  src: string;
  poster: string;
}

interface HeroProps {
  images?: string[];
  video?: HeroVideo;
  kicker?: string;
  lines: string[];
  sub?: string;
  note?: string;
  ctas?: HeroCta[];
  parallax?: boolean;
}

export function Hero({
  images = [],
  video,
  kicker,
  lines,
  sub,
  note,
  ctas,
  parallax = false,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const flatY = useTransform(() => 0);
  const flatScale = useTransform(() => 1);
  const y = parallax && !prefersReduced ? rawY : flatY;
  const scale = prefersReduced ? flatScale : rawScale;

  useEffect(() => {
    if (video || images.length < 2 || prefersReduced) return;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % images.length);
    }, 5500);
    return () => clearInterval(id);
  }, [video, images.length, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-black"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        {video ? (
          prefersReduced ? (
            <Image
              src={video.poster}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={video.poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          )
        ) : (
          images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-1000 ease-out"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-garnet/20" />

      <motion.div
        style={{ y }}
        className="relative z-10 px-6 pb-20 sm:px-10 sm:pb-28"
      >
        {kicker && (
          <p className="mb-4 font-body text-xs font-semibold tracking-[0.3em] text-silver uppercase">
            {kicker}
          </p>
        )}

        <AnimatedText
          lines={lines}
          className="text-[20vw] leading-[0.82] sm:text-[13vw] lg:text-[10vw]"
        />

        {sub && (
          <p className="mt-6 max-w-xl font-body text-lg text-off-white sm:text-xl">
            {sub}
          </p>
        )}
        {note && (
          <p className="mt-2 font-body text-sm text-silver">{note}</p>
        )}

        {ctas && ctas.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <MagneticButton
                key={cta.href}
                href={cta.href}
                variant={cta.variant ?? "outline"}
              >
                {cta.label}
              </MagneticButton>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
