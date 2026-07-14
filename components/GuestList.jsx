export default function GuestList({ guests }) {
  if (guests.length === 0) {
    return <p>No messages yet.</p>;
  }

  return (
    <div>
      {guests.map((guest) => (
        <div
          key={guest.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{guest.name}</h3>

          <p>{guest.message}</p>
        </div>
      ))}
    </div>
  );
}