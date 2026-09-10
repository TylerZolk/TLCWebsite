import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Gamedays",
  description: "Gameday at TLC: live band before kickoff, DJ after the game, every Gamecock home game.",
};

const gamedaySchedule = [
  { kickoff: "Noon Kickoff", doors: "10:00 AM" },
  { kickoff: "4:00 PM Kickoff", doors: "11:00 AM" },
  { kickoff: "7:00 PM Kickoff", doors: "12:00 PM" },
];

export default function GamedaysPage() {
  return (
    <>
      <Hero
        images={["/photos/gallery/DSC08398.jpg"]}
        kicker="Every Home Game"
        lines={["GAMEDAY", "AT TLC"]}
        sub="Live band before kickoff. DJ after the game. We don't stop until you do."
      />

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 text-center sm:px-10">
          <AnimatedText
            lines={["BAND BEFORE.", "DJ AFTER."]}
            className="text-center text-[15vw] leading-[0.86] sm:text-[8vw]"
          />
          <p className="mx-auto mt-8 max-w-lg font-body text-lg text-silver">
            Every Gamecock home game, TLC opens early. A live band plays
            before kickoff to get the block loud, then our DJs take over
            the second the game ends and keep the room going until close.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["GAMEDAY", "HOURS"]} className="mb-14" />
          <div className="grid gap-8 sm:grid-cols-3">
            {gamedaySchedule.map((s) => (
              <div key={s.kickoff} className="border-t border-off-white/10 pt-6">
                <p className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase">
                  {s.kickoff}
                </p>
                <p className="type-display mt-2 text-4xl sm:text-5xl">
                  {s.doors}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-body text-silver">
            Kickoff times move around during the season, so gameday hours
            follow the schedule above. Follow along on Instagram for the
            lineup each week.
          </p>
          <div className="mt-8">
            <MagneticButton href={siteConfig.instagram.url}>
              {siteConfig.instagram.handle}
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
