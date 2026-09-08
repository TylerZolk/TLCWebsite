import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ParallaxImage } from "@/components/ParallaxImage";
import { MagneticButton } from "@/components/MagneticButton";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Bookings",
  description: "Book TLC for private events, organization nights, DJ sets, and special occasions.",
};

const bookingOptions = [
  {
    label: "PRIVATE EVENTS",
    copy: "Birthdays, celebrations, and nights that call for your own room.",
    image: "/photos/gallery/DSC08125.jpg",
  },
  {
    label: "ORGANIZATION EVENTS",
    copy: "Greek life, student orgs, and company nights out. We'll build it around your group.",
    image: "/photos/hero/DSC08564.jpg",
  },
  {
    label: "DJ / PROMOTER EVENTS",
    copy: "Bring your own lineup and we'll bring the room. Let's talk sound and staging.",
    image: "/photos/hero/DSC08705.jpg",
  },
  {
    label: "SPECIAL EVENTS",
    copy: "Anything outside the box. Reach out and we'll figure it out together.",
    image: "/photos/hero/DSC08530.jpg",
  },
];

export default function BookingsPage() {
  return (
    <>
      <Hero
        images={["/photos/hero/DSC08540.jpg"]}
        kicker="Private Events"
        lines={["MAKE TLC", "YOURS."]}
        sub="Private events, organizations, parties, and special events."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["BOOKING", "OPTIONS"]} className="mb-16" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12">
          {bookingOptions.map((option, i) => (
            <div
              key={option.label}
              className={`relative flex min-h-[55vh] items-center overflow-hidden sm:min-h-[60vh] ${
                i % 2 === 0 ? "sm:col-span-7" : "sm:col-span-5"
              }`}
            >
              <ParallaxImage
                src={option.image}
                alt={option.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 42vw"
                strength={40}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              <div
                className={`relative z-10 w-full px-6 sm:px-8 ${
                  i % 2 === 1 ? "flex justify-end text-right" : ""
                }`}
              >
                <div className="max-w-sm">
                  <p className="type-display text-[11vw] leading-[0.86] sm:text-[4vw]">
                    {option.label}
                  </p>
                  <p className="mt-3 font-body text-base text-off-white">
                    {option.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 text-center sm:px-10">
          <SectionHeading
            lines={["GET IN", "TOUCH"]}
            align="center"
            className="mb-10"
          />
          <p className="mx-auto max-w-md font-body text-lg text-silver">
            Call or email us directly and we&apos;ll get your date locked in.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <MagneticButton
              href={`tel:${siteConfig.bookingPhone.replace(/[^\d+]/g, "")}`}
              variant="solid"
            >
              {siteConfig.bookingPhone}
            </MagneticButton>
            <MagneticButton href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
