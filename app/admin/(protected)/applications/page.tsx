import { getApplications, getAllPositions } from "@/lib/db";
import { StatusSelect } from "./StatusSelect";

export const dynamic = "force-dynamic";

export default async function AdminApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ position?: string }>;
}) {
  const params = await searchParams;
  const positionId = params.position ? Number(params.position) : undefined;

  const [applications, positions] = await Promise.all([
    getApplications(positionId),
    getAllPositions(),
  ]);

  return (
    <div>
      <h1 className="type-display text-4xl sm:text-5xl">Applications</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/admin/applications"
          className={`rounded-full border px-5 py-2 font-body text-xs font-semibold tracking-[0.15em] uppercase ${
            !positionId
              ? "border-off-white text-off-white"
              : "border-off-white/30 text-silver hover:border-off-white"
          }`}
        >
          All
        </a>
        {positions.map((p) => (
          <a
            key={p.id}
            href={`/admin/applications?position=${p.id}`}
            className={`rounded-full border px-5 py-2 font-body text-xs font-semibold tracking-[0.15em] uppercase ${
              positionId === p.id
                ? "border-off-white text-off-white"
                : "border-off-white/30 text-silver hover:border-off-white"
            }`}
          >
            {p.title}
          </a>
        ))}
      </div>

      <div className="mt-10 divide-y divide-off-white/10">
        {applications.length === 0 && (
          <p className="py-6 font-body text-silver">No applications yet.</p>
        )}
        {applications.map((app) => (
          <div key={app.id} className="py-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="type-display text-2xl">{app.full_name}</p>
                <p className="mt-1 font-body text-sm text-silver">
                  {app.position_title ?? "Position removed"} ·{" "}
                  {new Date(app.created_at).toLocaleDateString()}
                </p>
              </div>
              <StatusSelect id={app.id} status={app.status} />
            </div>
            <div className="mt-4 grid gap-1 font-body text-sm text-off-white">
              <a href={`mailto:${app.email}`} className="hover:text-garnet-bright">
                {app.email}
              </a>
              {app.phone && (
                <a href={`tel:${app.phone}`} className="hover:text-garnet-bright">
                  {app.phone}
                </a>
              )}
            </div>
            {app.message && (
              <p className="mt-4 max-w-2xl font-body text-silver">
                {app.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
