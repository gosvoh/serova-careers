"use server";

import { revalidatePath } from "next/cache";

export default async function contactSubmitAction(_: any, formData: FormData) {
  console.log("ContactSubmitAction", formData);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/");

  return { status: 200 };
}
