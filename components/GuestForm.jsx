import { addGuest } from "@/app/actions";

export default function GuestForm() {
  return (
    <form action={addGuest} className="guestForm">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <textarea
        name="message"
        placeholder="Write something nice..."
        rows="5"
        required
      />

      <button type="submit">
        Leave Message
      </button>

    </form>
  );
}