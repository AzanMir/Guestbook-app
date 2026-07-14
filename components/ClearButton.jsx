"use client";

import { clearGuestbook } from "@/app/actions";

export default function ClearButton() {
  return (
    <button
      className="clearBtn"
      onClick={async () => {
        const ok = confirm(
          "Delete ALL guestbook messages?"
        );

        if (!ok) return;

        await clearGuestbook();
      }}
    >
      Clear Guestbook
    </button>
  );
}