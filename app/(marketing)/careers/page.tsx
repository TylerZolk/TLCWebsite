import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { getOpenPositions } from "@/lib/db";
import { siteConfig } from "@/lib/data/site";
import { toListItems } from "@/lib/utils";
import { submitApplication } from "./actions";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the team at TLC. See open positions and apply.",
};

export const dynamic = "force-dynamic";

const fieldClasses =
  "w-full border-b border-off-white/30 bg-transparent py-3 font-body text-lg text-off-white placeholder:text-silver-dim focus:border-garnet-bright focus:outline-none";
const labelClasses =
  "mb-2 block font-body text-xs font-semibold tracking-[0.25em] text-silver uppercase";

export default async function CareersPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string; position?: string }>;
}) {
  const params = await searchParams;
  const positions = await getOpenPositions();
  const submitted = params.submitted === "true";
  const preselected = params.position ? Number(params.position) : undefined;

  return (
    <>
      <Hero
        images={["/photos/hero/DSC08502.jpg"]}
        kicker="Join The Team"
        lines={["WORK", "AT TLC"]}
        sub="We're always looking for people who love the room as much as we do."
      />

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["OPEN", "POSITIONS"]} className="mb-14" />

          {positions.length === 0 ? (
            <p className="font-body text-silver">
              No open positions right now. Check back soon, or follow us on
              Instagram for updates.
            </p>
          ) : (
            <div className="divide-y divide-off-white/10 border-t border-off-white/10">
              {positions.map((position) => {
                const responsibilities = toListItems(position.responsibilities);
                const requirements = toListItems(position.requirements);

                return (
                  <div
                    key={position.id}
                    className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="max-w-xl">
                      <p className="type-display text-3xl sm:text-4xl">
                        {position.title}
                      </p>
                      <p className="mt-2 font-body text-sm text-silver">
                        {[
                          position.department,
                          position.location,
                          position.employment_type,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                      {position.description && (
                        <p className="mt-4 font-body text-off-white">
                          {position.description}
                        </p>
                      )}
                      {responsibilities.length > 0 && (
                        <div className="mt-5">
                          <p className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase">
                            Responsibilities
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 font-body text-off-white">
                            {responsibilities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {requirements.length > 0 && (
                        <div className="mt-5">
                          <p className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase">
                            Requirements
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 font-body text-off-white">
                            {requirements.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <a
                      href={`/careers?position=${position.id}#apply`}
                      className="shrink-0 rounded-full border border-off-white/30 px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:border-off-white"
                    >
                      Apply
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section id="apply" className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <SectionHeading lines={["APPLY", "NOW"]} className="mb-14" />

          {submitted ? (
            <div className="py-12">
              <p className="type-display text-4xl">APPLICATION RECEIVED.</p>
              <p className="mt-4 font-body text-silver">
                Thanks for applying. We&apos;ll reach out if it&apos;s a fit.
              </p>
            </div>
          ) : positions.length === 0 ? (
            <p className="font-body text-silver">
              There&apos;s nothing open to apply for right now.
            </p>
          ) : (
            <form action={submitApplication} className="max-w-2xl space-y-8">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                <div>
                  <label className={labelClasses} htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="positionId">
                    Position
                  </label>
                  <select
                    id="positionId"
                    name="positionId"
                    required
                    defaultValue={preselected ?? ""}
                    className={`${fieldClasses} appearance-none`}
                  >
                    <option value="" disabled className="bg-black">
                      Select a position
                    </option>
                    {positions.map((p) => (
                      <option key={p.id} value={p.id} className="bg-black">
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClasses} htmlFor="message">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Availability, experience, why TLC..."
                  className={`${fieldClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-garnet px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:bg-garnet-bright"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="pb-28 sm:pb-36">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <div className="max-w-2xl border-t border-off-white/10 pt-10 font-body text-sm text-silver-dim">
            <p>
              {siteConfig.name} is an equal opportunity employer. All
              applicants are considered without regard to race, color,
              religion, sex, sexual orientation, gender identity, national
              origin, age, disability, or any other status protected by
              applicable law.
            </p>
            <p className="mt-4">
              Applicants must be legally authorized to work in the United
              States. Some positions involve serving alcohol and require
              meeting the minimum age set by South Carolina law for that
              role.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
