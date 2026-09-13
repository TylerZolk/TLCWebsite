import Link from "next/link";
import { getAllPositions, getApplications } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [positions, applications] = await Promise.all([
    getAllPositions(),
    getApplications(),
  ]);

  const openCount = positions.filter((p) => p.status === "open").length;
  const newCount = applications.filter((a) => a.status === "new").length;

  return (
    <div>
      <h1 className="type-display text-4xl sm:text-5xl">Dashboard</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="border-t border-off-white/10 pt-6">
          <p className="font-body text-xs tracking-[0.2em] text-silver uppercase">
            Open Positions
          </p>
          <p className="type-display mt-2 text-5xl">{openCount}</p>
        </div>
        <div className="border-t border-off-white/10 pt-6">
          <p className="font-body text-xs tracking-[0.2em] text-silver uppercase">
            New Applications
          </p>
          <p className="type-display mt-2 text-5xl">{newCount}</p>
        </div>
        <div className="border-t border-off-white/10 pt-6">
          <p className="font-body text-xs tracking-[0.2em] text-silver uppercase">
            Total Applications
          </p>
          <p className="type-display mt-2 text-5xl">{applications.length}</p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/admin/positions"
          className="rounded-full border border-off-white/30 px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:border-off-white"
        >
          Manage Positions
        </Link>
        <Link
          href="/admin/applications"
          className="rounded-full bg-garnet px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:bg-garnet-bright"
        >
          Review Applications
        </Link>
      </div>
    </div>
  );
}
