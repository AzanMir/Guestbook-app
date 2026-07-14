"use client";

import { deleteGuest } from "@/app/actions";

export default function GuestList({ guests }) {
  const handleDelete = async (id) => {
    const ok = confirm("Delete this message?");

    if (!ok) return;

    await deleteGuest(id);
  };

  if (guests.length === 0) {
    return <p className="empty">No messages yet.</p>;
  }

  return (
    <div className="cards">
      {guests.map((guest) => (
        <div className="card" key={guest.id}>
          <div className="avatar">{guest.name.charAt(0).toUpperCase()}</div>

          <div className="content">
            <h3>{guest.name}</h3>
            <p>{guest.message}</p>

            <button
              className="deleteBtn"
              type="button"
              onClick={() => handleDelete(guest.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
