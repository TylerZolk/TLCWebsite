"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

const aspectByOrientation: Record<GalleryItem["orientation"], string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function PhotoGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 gap-4 sm:columns-3 sm:gap-5">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 break-inside-avoid sm:mb-5"
        >
          <div
            className={cn(
              "relative w-full overflow-hidden",
              aspectByOrientation[item.orientation],
            )}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
