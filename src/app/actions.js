"use server";

import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export async function addGuest(formData) {
  const name = formData.get("name");
  const message = formData.get("message");

  if (!name || !message) return;

  const filePath = path.join(process.cwd(), "data", "guestbook.json");

  const file = await fs.readFile(filePath, "utf8");
  const guests = JSON.parse(file);

  const newGuest = {
    id: Date.now(),
    name,
    message,
  };

  guests.unshift(newGuest);

  await fs.writeFile(filePath, JSON.stringify(guests, null, 2));

  revalidatePath("/");
}