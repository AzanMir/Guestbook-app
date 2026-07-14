import { addGuest } from "@/app/actions";

export default function GuestForm() {
  return (
    <form action={addGuest} style={{ marginBottom: "40px" }}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <textarea
        name="message"
        placeholder="Write your message..."
        required
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Leave Message
      </button>
    </form>
  );
}