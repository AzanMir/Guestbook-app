"use server";

import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const filePath = path.join(process.cwd(), "data", "guestbook.json");

// ADD GUEST
export async function addGuest(formData) {
  const name = formData.get("name");
  const message = formData.get("message");

  if (!name || !message) return;

  const file = await fs.readFile(filePath, "utf8");
  const guests = JSON.parse(file);

  guests.unshift({
    id: Date.now(),
    name,
    message,
  });

  await fs.writeFile(filePath, JSON.stringify(guests, null, 2));

  revalidatePath("/");
}

// DELETE ONE
export async function deleteGuest(id) {
  const file = await fs.readFile(filePath, "utf8");
  let guests = JSON.parse(file);

  guests = guests.filter((guest) => guest.id !== id);

  await fs.writeFile(filePath, JSON.stringify(guests, null, 2));

  revalidatePath("/");
}

// DELETE ALL
export async function clearGuestbook() {
  await fs.writeFile(filePath, JSON.stringify([], null, 2));

  revalidatePath("/");
}