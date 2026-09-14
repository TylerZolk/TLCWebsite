"use server";

import { revalidatePath } from "next/cache";
import {
  createPosition,
  deletePosition,
  setPositionStatus,
} from "@/lib/db";

export async function addPosition(formData: FormData) {
  const title = formData.get("title")?.toString().trim() ?? "";
  const department = formData.get("department")?.toString().trim() || null;
  const location = formData.get("location")?.toString().trim() || null;
  const employmentType =
    formData.get("employmentType")?.toString().trim() || null;
  const description = formData.get("description")?.toString().trim() || null;
  const responsibilities =
    formData.get("responsibilities")?.toString().trim() || null;
  const requirements =
    formData.get("requirements")?.toString().trim() || null;

  if (!title) return;

  await createPosition({
    title,
    department,
    location,
    employmentType,
    description,
    responsibilities,
    requirements,
  });
  revalidatePath("/admin/positions");
  revalidatePath("/careers");
}

// The extra `FormData` param on these two isn't used, but form actions bound
// with .bind() still receive it as the final argument at call time.
export async function togglePosition(
  id: number,
  nextStatus: "open" | "closed",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: FormData,
) {
  await setPositionStatus(id, nextStatus);
  revalidatePath("/admin/positions");
  revalidatePath("/careers");
}

export async function removePosition(
  id: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: FormData,
) {
  await deletePosition(id);
  revalidatePath("/admin/positions");
  revalidatePath("/careers");
}
