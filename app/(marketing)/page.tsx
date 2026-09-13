import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SocialCarousel } from "@/components/SocialCarousel";
import { ParallaxImage } from "@/components/ParallaxImage";
import { AnimatedText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";
import { recentNights } from "@/lib/data/gallery";
import { siteConfig } from "@/lib/data/site";

export default function HomePage() {
  return (
    <>
      <Hero
        video={{
          src: "/videos/home-hero.mp4",
          poster: "/videos/home-hero-poster.jpg",
        }}
        lines={["TLC"]}
        sub="COLUMBIA NIGHTS START HERE."
        ctas={[
          { label: "View Events", href: "/tlc-tuesday" },
          { label: "Book TLC", href: "/bookings", variant: "solid" },
        ]}
        parallax
      />

      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <ParallaxImage
          src="/photos/gallery/DSC08129.jpg"
          alt="TLC Tuesday"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative z-10 w-full px-6 pb-20 sm:px-10 sm:pb-28">
          <AnimatedText
            lines={["TLC", "TUESDAY"]}
            className="text-[18vw] leading-[0.84] sm:text-[11vw] lg:text-[9vw]"
          />
          <p className="mt-6 max-w-md font-body text-lg text-off-white">
            Tuesday nights belong to TLC.
          </p>
          <div className="mt-8">
            <MagneticButton href="/tlc-tuesday" variant="solid">
              Enter TLC Tuesday
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-28 sm:py-40">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-12 sm:gap-6">
            <ParallaxImage
              src="/photos/hero/DSC08451.jpg"
              alt="Cold drinks at TLC"
              className="aspect-[4/5] sm:col-span-7"
              strength={40}
            />
            <div className="flex items-center sm:col-span-5 sm:-mt-16">
              <AnimatedText
                lines={["COLD", "DRINKS."]}
                className="text-[16vw] leading-[0.84] sm:text-[7vw]"
              />
            </div>
          </div>

          <div className="mt-[-2rem] grid gap-8 sm:mt-[-6rem] sm:grid-cols-12 sm:gap-6">
            <div className="order-2 flex items-center sm:order-1 sm:col-span-5 sm:col-start-1 sm:mt-20">
              <AnimatedText
                lines={["LOUD", "MUSIC."]}
                className="text-[16vw] leading-[0.84] sm:text-[7vw]"
              />
            </div>
            <ParallaxImage
              src="/photos/gallery/DSC08332-Enhanced-NR.jpg"
              alt="Loud music at TLC"
              className="order-1 aspect-[4/5] sm:order-2 sm:col-span-6 sm:col-start-7"
              strength={40}
            />
          </div>

          <div className="mt-[-2rem] flex justify-center sm:mt-[-4rem]">
            <AnimatedText
              lines={["LATE", "NIGHTS."]}
              className="text-center text-[18vw] leading-[0.84] sm:text-[9vw]"
            />
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["RECENT", "NIGHTS"]} className="mb-14" />
          <PhotoGallery items={recentNights} />
          <div className="mt-12 flex justify-center">
            <MagneticButton
              href={siteConfig.instagram.url}
              variant="outline"
            >
              View More On Instagram
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading kicker="Follow Along" lines={["SEE YOU", "TONIGHT."]} className="mb-14" />
        </div>
        <div className="pl-6 sm:pl-10">
          <SocialCarousel items={recentNights} />
        </div>
      </section>
    </>
  );
}
