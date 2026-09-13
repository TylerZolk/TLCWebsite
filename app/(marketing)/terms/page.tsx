import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply to using the TLC website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-[75ch] px-6 py-32 sm:px-10 sm:py-40">
      <p className="mb-3 font-body text-xs font-semibold tracking-[0.3em] text-silver uppercase">
        Legal
      </p>
      <h1 className="type-display text-5xl sm:text-6xl">Terms of Use</h1>
      <p className="mt-4 font-body text-sm text-silver-dim">
        Last updated: September 2026
      </p>

      <p className="mt-12 font-body leading-relaxed text-silver">
        These terms govern your use of this website. By using this site, you
        agree to them. This site is informational and doesn&apos;t process
        payments, sell alcohol, or take reservations online.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Age and alcohol service
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        {siteConfig.name} is a bar that serves alcohol. Entry, service, and
        age requirements are set by the venue and applicable law, and are
        enforced at the door, not through this website. Content on this
        site, including event promotion, is intended for audiences of
        legal drinking age. Please drink responsibly.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Accuracy of information
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        We try to keep hours, events, and lineups up to date, but they can
        change without notice. Always confirm event details directly with
        us before making plans around them.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Intellectual property
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        The {siteConfig.name} name, logo, and the photography and content on
        this site are owned by {siteConfig.name} or used with permission.
        Don&apos;t reproduce, distribute, or use them without our written
        consent.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Third-party links
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        This site links to third-party services such as Instagram and
        Google Maps. We aren&apos;t responsible for the content, accuracy,
        or practices of those third parties.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Accessibility
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        We want this site to be usable by as many people as possible. If
        you run into an accessibility barrier, let us know at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-off-white hover:text-garnet-bright"
        >
          {siteConfig.email}
        </a>{" "}
        and we&apos;ll do our best to address it.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Disclaimer and limitation of liability
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        This site is provided &quot;as is&quot; without warranties of any
        kind. To the fullest extent permitted by law, {siteConfig.name} is
        not liable for any damages arising from your use of this site or
        reliance on its content.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Governing law
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        These terms are governed by the laws of the State of South
        Carolina, without regard to conflict-of-law principles.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">
        Changes to these terms
      </h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        We may update these terms from time to time. Changes will be posted
        on this page with an updated effective date.
      </p>

      <h2 className="type-display mt-10 text-2xl sm:text-3xl">Contact us</h2>
      <p className="mt-3 font-body leading-relaxed text-silver">
        Questions about these terms can be sent to{" "}
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
