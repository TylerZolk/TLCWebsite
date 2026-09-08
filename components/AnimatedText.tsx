"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { type ElementType } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  lines: string[];
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Line-by-line reveal: each line is masked in an overflow-hidden box and
 * slides up into place. Used for the oversized editorial headlines.
 */
export function AnimatedText({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const prefersReduced = useReducedMotion();

  const transition: Transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  };

  if (prefersReduced) {
    return (
      <Tag className={cn("type-display", className)}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={cn("type-display", className)}>
      {/*
        The viewport trigger lives on this untransformed wrapper rather than
        the sliding inner span: the inner span's own `y` transform pushes it
        outside its overflow-hidden parent, which would make it permanently
        "not intersecting" if it were the observed element. Framer Motion
        propagates the hidden/visible variant state down to the children.
      */}
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              variants={{ hidden: { y: "110%" }, visible: { y: "0%" } }}
              transition={{ ...transition, delay: delay + i * 0.08 }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
