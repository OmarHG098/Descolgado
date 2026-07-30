"use client";

import { useState } from "react";
import Link from "next/link";
import type { Piece } from "@/types/piece";

const DATE_FORMATTER = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function PieceSidebar({
  pieces,
  currentSlug,
}: {
  pieces: Piece[];
  currentSlug: string;
}) {
  const [filter, setFilter] = useState("");

  const others = pieces.filter((piece) => piece.slug !== currentSlug);
  const query = filter.trim().toLowerCase();
  const filtered = query
    ? others.filter((piece) => piece.title.toLowerCase().includes(query))
    : others;

  return (
    <aside className="bg-descolgado-brown/30 flex flex-col gap-4 p-4 sm:p-6">
      <label className="font-grotesque flex flex-col gap-1 text-sm">
        Filtrar piezas
        <input
          type="search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Buscar por título..."
          className="border-descolgado-ink/30 bg-descolgado-gray font-body px-3 py-2 text-base"
        />
      </label>

      <ol className="flex flex-col gap-3">
        {filtered.map((piece) => (
          <li key={piece._id}>
            <Link
              href={`/piezas/${piece.slug}`}
              className="font-grotesque block hover:underline"
            >
              {piece.title}
            </Link>
            {piece.ficha && (
              <time
                dateTime={piece.ficha.date}
                className="font-body text-descolgado-ink/60 text-xs"
              >
                {DATE_FORMATTER.format(new Date(piece.ficha.date))}
              </time>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="font-body text-descolgado-ink/60 text-sm">
            Sin resultados.
          </li>
        )}
      </ol>
    </aside>
  );
}
