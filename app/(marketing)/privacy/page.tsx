import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TLC collects, uses, and protects information from visitors to this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-[75ch] px-6 py-32 sm:px-10 sm:py-40">
      <p className="mb-3 font-body text-xs font-semibold tracking-[0.3em] text-silver uppercase">
        Legal
      </p>
      <h1 className="type-display text-5xl sm:text-6xl">Privacy Policy</h1>
      <p className="mt-4 font-body text-sm text-silver-dim">
        Last updated: September 2026
      </p>

      <p className="mt-12 font-body leading-relaxed text-silver">
        This policy explains what information this website (
        {siteConfig.name}, referred to as &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects from visitors, how it&apos;s used, and the
        choices available to you. It applies only to this website, not to
        how {siteConfig.name} operates as a physical venue.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Information we collect
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        This site doesn&apos;t have a newsletter signup or account system.
        The information we do collect is:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-silver">
        <li>
          Job application details, if you apply through our{" "}
          <Link href="/careers" className="text-off-white hover:text-garnet-bright">
            Careers
          </Link>{" "}
          page: your name, email, phone number, the position you applied
          for, and anything you write in the message field.
        </li>
        <li>
          Information you choose to share if you contact us directly by
          phone or email (for example, your name, email address, or phone
          number, if you include it).
        </li>
        <li>
          Standard technical information collected automatically by our
          hosting provider, such as IP address, browser type, device type,
          and pages visited. This is common web server log data and is not
          used to identify you personally.
        </li>
      </ul>
      <p className="mt-3 font-body leading-relaxed text-silver">
        Job application data is used only to evaluate you for the position
        you applied to and to contact you about it. It&apos;s visible to
        {" "}{siteConfig.name} staff who manage hiring and is not shared
        with any other third party.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Cookies and tracking
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        This site does not currently use cookies, analytics tools, or
        advertising trackers. If that changes in the future (for example, if
        we add site analytics), this policy will be updated to reflect it.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        How we use information
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        Any information you share by contacting us is used only to respond
        to your inquiry, such as a booking or general question. We
        don&apos;t sell, rent, or share your information with third parties
        for marketing purposes.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Third-party links and services
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        This site links out to third-party services, including Instagram
        and Google Maps. If you interact with those services, their own
        privacy policies apply, not this one. We don&apos;t control and
        aren&apos;t responsible for how those third parties handle your
        information.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Children&apos;s privacy
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        This website is not directed to children under 13, and we
        don&apos;t knowingly collect information from children. Separately,
        {" "}
        {siteConfig.name} is a bar that serves alcohol; entry and service
        are subject to applicable age requirements and the venue&apos;s own
        policies, regardless of this website.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Data security
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        We take reasonable steps to protect information shared with us, but
        no method of transmission or storage over the internet is
        completely secure, and we can&apos;t guarantee absolute security.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Changes to this policy
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        We may update this policy from time to time. Changes will be posted
        on this page with an updated effective date.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">Contact us</h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        Questions about this policy can be sent to{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-off-white hover:text-garnet-bright"
        >
          {siteConfig.email}
        </a>{" "}
        or {siteConfig.phone}.
      </p>
    </div>
  );
}
