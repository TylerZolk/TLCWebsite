import Link from "next/link";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { AnimatedText } from "@/components/AnimatedText";
import { siteConfig } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-off-white/10 bg-black pt-24">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <AnimatedText
          lines={["TLC IS THE", "PLACE."]}
          className="text-[16vw] leading-[0.85] sm:text-[10vw] lg:text-[8vw]"
        />

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-off-white/10 py-14 text-sm sm:grid-cols-4">
          <div>
            <p className="mb-3 font-body text-xs tracking-[0.3em] text-silver uppercase">
              Address
            </p>
            <p className="font-body text-off-white">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
          </div>

          <div>
            <p className="mb-3 font-body text-xs tracking-[0.3em] text-silver uppercase">
              Hours
            </p>
            <ul className="space-y-1 font-body text-off-white">
              {siteConfig.hours.map((h) => (
                <li key={h.label}>
                  <span className="text-silver">{h.label}</span> {h.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-body text-xs tracking-[0.3em] text-silver uppercase">
              Contact
            </p>
            <ul className="space-y-1 font-body text-off-white">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-garnet-bright"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-garnet-bright"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-garnet-bright"
                >
                  <InstagramIcon size={14} strokeWidth={1.5} />
                  {siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-body text-xs tracking-[0.3em] text-silver uppercase">
              Bookings
            </p>
            <ul className="space-y-1 font-body text-off-white">
              <li>
                <a
                  href={`tel:${siteConfig.bookingPhone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-garnet-bright"
                >
                  {siteConfig.bookingPhone}
                </a>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-garnet-bright">
                  Make TLC yours →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="select-none border-t border-off-white/10 py-4">
        <p className="type-display text-center text-[22vw] leading-none text-off-white/5 sm:text-[16vw]">
          TLC
        </p>
      </div>

      <div className="border-t border-off-white/10 px-6 py-6 sm:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-silver-dim">
            © {new Date().getFullYear()} {siteConfig.name}. Columbia, SC.
            Must be 21+ to consume alcohol. Please drink responsibly.
          </p>
          <div className="flex gap-5 font-body text-xs text-silver-dim">
            <Link href="/careers" className="hover:text-off-white">
              Careers
            </Link>
            <Link href="/privacy" className="hover:text-off-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-off-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
