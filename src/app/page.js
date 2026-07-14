import { promises as fs } from "fs";
import path from "path";

import GuestForm from "../../components/GuestForm";
import GuestList from "../../components/GuestList";

export default async function Home() {
  const filePath = path.join(process.cwd(), "data", "guestbook.json");

  const file = await fs.readFile(filePath, "utf8");

  const guests = JSON.parse(file);

  return (
    <main style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>Interactive Guestbook</h1>

      <GuestForm />

      <GuestList guests={guests} />
    </main>
  );
}