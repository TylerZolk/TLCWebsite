"use server";

import { revalidatePath } from "next/cache";
import { setApplicationStatus, type ApplicationStatus } from "@/lib/db";

export async function updateApplicationStatus(
  id: number,
  status: ApplicationStatus,
) {
  await setApplicationStatus(id, status);
  revalidatePath("/admin/applications");
}
