import { getAllPositions } from "@/lib/db";
import { addPosition, togglePosition, removePosition } from "./actions";

export const dynamic = "force-dynamic";

const fieldClasses =
  "w-full border-b border-off-white/30 bg-transparent py-3 font-body text-off-white placeholder:text-silver-dim focus:border-garnet-bright focus:outline-none";
const labelClasses =
  "mb-2 block font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase";

export default async function AdminPositionsPage() {
  const positions = await getAllPositions();

  return (
    <div>
      <h1 className="type-display text-4xl sm:text-5xl">Positions</h1>

      <section className="mt-12 border-t border-off-white/10 pt-8">
        <h2 className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase">
          Add A Position
        </h2>
        <form action={addPosition} className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor="title">
              Title
            </label>
            <input id="title" name="title" required className={fieldClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="department">
              Department
            </label>
            <input
              id="department"
              name="department"
              placeholder="e.g. Bar, Kitchen, Security"
              className={fieldClasses}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="location">
              Location
            </label>
            <input
              id="location"
              name="location"
              placeholder="Optional"
              className={fieldClasses}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="employmentType">
              Employment Type
            </label>
            <input
              id="employmentType"
              name="employmentType"
              placeholder="e.g. Part-time"
              className={fieldClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder="A short overview of the role."
              className={`${fieldClasses} resize-none`}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="responsibilities">
              Responsibilities
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              rows={4}
              placeholder={"One per line, e.g.\nGreet and serve guests\nRun food and drinks\nKeep the bar stocked"}
              className={`${fieldClasses} resize-none`}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="requirements">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={4}
              placeholder={"One per line, e.g.\nMust be 18+\nNights and weekends availability\nPrior bar/restaurant experience a plus"}
              className={`${fieldClasses} resize-none`}
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-garnet px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:bg-garnet-bright"
            >
              Add Position
            </button>
          </div>
        </form>
      </section>

      <section className="mt-16">
        <h2 className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase">
          All Positions
        </h2>
        <div className="mt-6 divide-y divide-off-white/10">
          {positions.length === 0 && (
            <p className="py-6 font-body text-silver">
              No positions yet. Add one above.
            </p>
          )}
          {positions.map((position) => (
            <div
              key={position.id}
              className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="type-display text-2xl">{position.title}</p>
                <p className="mt-1 font-body text-sm text-silver">
                  {[position.department, position.location, position.employment_type]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`font-body text-xs font-semibold tracking-[0.2em] uppercase ${
                    position.status === "open" ? "text-off-white" : "text-silver-dim"
                  }`}
                >
                  {position.status}
                </span>
                <form
                  action={togglePosition.bind(
                    null,
                    position.id,
                    position.status === "open" ? "closed" : "open",
                  )}
                >
                  <button
                    type="submit"
                    className="rounded-full border border-off-white/30 px-5 py-2 font-body text-xs font-semibold tracking-[0.15em] uppercase hover:border-off-white"
                  >
                    {position.status === "open" ? "Close" : "Reopen"}
                  </button>
                </form>
                <form action={removePosition.bind(null, position.id)}>
                  <button
                    type="submit"
                    className="font-body text-xs font-semibold tracking-[0.15em] text-silver-dim uppercase hover:text-garnet-bright"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
