"use client";

import { useTransition } from "react";
import { updateApplicationStatus } from "./actions";
import type { ApplicationStatus } from "@/lib/db";

const STATUSES: ApplicationStatus[] = ["new", "reviewed", "rejected", "hired"];

export function StatusSelect({
  id,
  status,
}: {
  id: number;
  status: ApplicationStatus;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={isPending}
      onChange={(e) => {
        const next = e.target.value as ApplicationStatus;
        startTransition(() => {
          updateApplicationStatus(id, next);
        });
      }}
      className="border border-off-white/30 bg-black px-3 py-2 font-body text-xs font-semibold tracking-[0.15em] text-off-white uppercase focus:border-garnet-bright focus:outline-none disabled:opacity-60"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s} className="bg-black">
          {s}
        </option>
      ))}
    </select>
  );
}
