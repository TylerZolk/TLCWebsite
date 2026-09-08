import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { DJCard } from "@/components/DJCard";
import { PhotoGallery } from "@/components/PhotoGallery";
import { residentDJs } from "@/lib/data/djs";
import { tuesdayArchive } from "@/lib/data/gallery";
import { tuesdayFlyers } from "@/lib/data/flyers";

export const metadata: Metadata = {
  title: "TLC Tuesday",
  description: "TLC Tuesday, Columbia's signature weekly night. Every Tuesday.",
};

export default function TLCTuesdayPage() {
  return (
    <>
      <Hero
        images={["/photos/hero/DSC08705.jpg"]}
        kicker="Every Tuesday"
        lines={["TLC", "TUESDAY"]}
        ctas={[{ label: "See This Week", href: "#lineup", variant: "solid" }]}
      />

      <section id="lineup" className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["TUESDAY", "FLYERS"]} className="mb-14" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tuesdayFlyers.map((flyer) => (
              <Image
                key={flyer.src}
                src={flyer.src}
                alt={flyer.alt}
                width={flyer.width}
                height={flyer.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["RESIDENT", "DJs"]} className="mb-14" />
          <div className="grid gap-6 sm:grid-cols-2">
            {residentDJs.map((dj) => (
              <DJCard key={dj.slug} dj={dj} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading
            kicker="TLC Tuesday Archive"
            lines={["YOU HAD TO", "BE THERE."]}
            className="mb-14"
          />
          <PhotoGallery items={tuesdayArchive} />
        </div>
      </section>
    </>
  );
}
