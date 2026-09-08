import Image from "next/image";
import { Music2 } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import type { DJItem } from "@/lib/data/djs";

export function DJCard({ dj }: { dj: DJItem }) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden" data-cursor-hover>
      <Image
        src={dj.image}
        alt={dj.name}
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="type-display text-3xl">{dj.name}</p>

        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 font-body text-sm text-silver">{dj.bio}</p>
            <div className="mt-4 flex flex-col gap-1 font-body text-xs tracking-[0.15em] text-off-white uppercase">
              <a
                href={`https://www.instagram.com/${dj.instagram.replace("@", "")}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-garnet-bright"
              >
                <InstagramIcon size={14} strokeWidth={1.5} />
                {dj.instagram}
              </a>
              {dj.soundcloud && (
                <span className="inline-flex items-center gap-2">
                  <Music2 size={14} strokeWidth={1.5} />
                  {dj.soundcloud}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
