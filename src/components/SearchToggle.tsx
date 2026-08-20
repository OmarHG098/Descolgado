"use client";

import { useState } from "react";

export function SearchToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {open && (
        <input
          type="search"
          name="q"
          placeholder="Buscar piezas..."
          autoFocus
          className="font-body border-ink/20 bg-paper px-3 py-1.5 text-sm"
        />
      )}
      <button
        type={open ? "submit" : "button"}
        onClick={() => setOpen(true)}
        aria-label="Buscar"
        className="text-ink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}
