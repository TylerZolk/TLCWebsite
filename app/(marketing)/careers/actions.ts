"use server";

import { redirect } from "next/navigation";
import { createApplication } from "@/lib/db";

export async function submitApplication(formData: FormData) {
  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const positionId = formData.get("positionId")?.toString() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!fullName || !email || !positionId) {
    redirect("/careers?error=missing#apply");
  }

  await createApplication({
    positionId: Number(positionId),
    fullName,
    email,
    phone: phone || null,
    message: message || null,
  });

  redirect("/careers?submitted=true");
}
