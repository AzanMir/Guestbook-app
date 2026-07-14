import { promises as fs } from "fs";
import path from "path";

import GuestForm from "../../components/GuestForm";
import GuestList from "../../components/GuestList";
import ClearButton from "../../components/ClearButton";

export default async function Home() {
  const filePath = path.join(process.cwd(), "data", "guestbook.json");
  const file = await fs.readFile(filePath, "utf8");
  const guests = JSON.parse(file);

  return (
    <main className="container">
      <div className="guestbook">
        <h1>📖 Interactive Guestbook</h1>

        <p className="subtitle">Leave a message for everyone to see.</p>

        <GuestForm />
        <ClearButton />
        <GuestList guests={guests} />
      </div>
    </main>
  );
}
