import Link from "next/link";
import type { Piece } from "@/types/piece";
import { Ficha } from "@/components/Ficha";

export function PieceCard({
  piece,
  variant,
}: {
  piece: Piece;
  variant: "hero" | "grid";
}) {
  const isHero = variant === "hero";

  return (
    <Link href={`/piezas/${piece.slug}`} className="group block">
      <article>
        <div
          className={`bg-gradient-to-br from-descolgado-gray to-descolgado-gray/60 ${
            isHero ? "aspect-[16/9]" : "aspect-[4/5]"
          }`}
        />
        <h2
          className={`font-grotesque mt-4 font-semibold group-hover:underline ${
            isHero ? "text-3xl md:text-4xl" : "text-xl"
          }`}
        >
          {piece.title}
        </h2>
        {piece.ficha && <Ficha ficha={piece.ficha} className="mt-2" />}
      </article>
    </Link>
  );
}
