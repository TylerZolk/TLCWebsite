import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedText } from "@/components/AnimatedText";
import { PhotoGallery } from "@/components/PhotoGallery";
import { MagneticButton } from "@/components/MagneticButton";
import { recentNights } from "@/lib/data/gallery";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "TLC Tuesday and Columbia's best Gamecock gameday bar, steps from Williams-Brice Stadium.",
};

const mapQuery = encodeURIComponent(
  `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
);

export default function AboutPage() {
  return (
    <>
      <Hero
        images={["/photos/hero/DSC08564.jpg"]}
        kicker="About TLC"
        lines={["THIS IS", "TLC."]}
        sub="A late-night bar built for Columbia, made for the nights you actually remember."
      />

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["THE", "STORY"]} className="mb-10" />
          <div className="max-w-[65ch]">
            <p className="font-body text-lg text-off-white sm:text-xl">
              TLC Tuesday is the reason Columbia plans its week around a
              Tuesday. It&apos;s the loudest room in town, running the same
              way every single week: resident DJs, a packed floor, and a
              crowd that shows up early and stays until last call.
            </p>
            <p className="mt-6 font-body text-silver">
              But game day is where TLC really lives. Steps from
              Williams-Brice Stadium, we&apos;re Columbia&apos;s home for
              Gamecock football, packed before kickoff and loud through the
              fourth quarter. Win or lose, this is where Gamecock fans watch
              the game.
            </p>
            <Link
              href="/gamedays"
              className="mt-4 inline-block font-body text-off-white hover:text-garnet-bright"
            >
              See gameday hours →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <AnimatedText
          lines={["NO TWO NIGHTS", "ARE THE SAME."]}
          className="text-center text-[13vw] leading-[0.86] sm:text-[7vw]"
        />
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["ON THE", "FLOOR"]} className="mb-14" />
          <PhotoGallery items={recentNights.slice(0, 6)} />
        </div>
      </section>

      <section className="py-20">
        <AnimatedText
          lines={["COME EARLY.", "STAY LATE."]}
          className="text-center text-[13vw] leading-[0.86] sm:text-[7vw]"
        />
      </section>

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading kicker="The Location" lines={["FIND", "US"]} className="mb-14" />
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <p className="font-body text-lg text-off-white">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
              <ul className="mt-8 space-y-1 font-body text-silver">
                {siteConfig.hours.map((h) => (
                  <li key={h.label}>
                    <span className="text-off-white">{h.label}</span> {h.value}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <MagneticButton
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                >
                  Get Directions
                </MagneticButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-off-white/10 sm:col-span-8">
              <iframe
                title="TLC location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
