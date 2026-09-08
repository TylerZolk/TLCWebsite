import Image from "next/image";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { HorizontalScroller } from "@/components/HorizontalScroller";
import { siteConfig } from "@/lib/data/site";
import type { GalleryItem } from "@/lib/data/gallery";

export function SocialCarousel({ items }: { items: GalleryItem[] }) {
  return (
    <HorizontalScroller>
      {items.map((item) => (
        <a
          key={item.id}
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="group relative aspect-square w-[62vw] max-w-[280px] shrink-0 snap-start overflow-hidden sm:w-[260px]"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 62vw, 260px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
            <InstagramIcon size={28} strokeWidth={1.5} className="text-off-white" />
          </div>
        </a>
      ))}
    </HorizontalScroller>
  );
}
