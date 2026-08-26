import Link from "next/link";
import { PieceCard } from "@/components/PieceCard";
import { getAllPieces } from "@/sanity/queries";

export default async function Home() {
  const pieces = await getAllPieces();
  const [featured, ...rest] = pieces;
  const gridPieces = rest.slice(0, 3);
  const listPieces = rest.slice(3);

  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-4 py-8 sm:px-8 sm:py-14">
      {featured ? (
        <>
          <section aria-labelledby="featured-heading">
            <p
              id="featured-heading"
              className="border-ink text-accent font-grotesque mb-4 border-b pb-2 text-[11px] uppercase tracking-[0.2em]"
            >
              Pieza destacada
            </p>
            <PieceCard piece={featured} variant="hero" />
          </section>

          {gridPieces.length > 0 && (
            <section className="border-ink mt-12 grid grid-cols-1 gap-8 border-t pt-7 sm:grid-cols-3">
              {gridPieces.map((piece) => (
                <PieceCard key={piece._id} piece={piece} variant="grid" />
              ))}
            </section>
          )}

          {listPieces.length > 0 && (
            <section className="border-ink mt-14 border-t pt-2">
              {listPieces.map((piece) => (
                <PieceCard key={piece._id} piece={piece} variant="list" />
              ))}
            </section>
          )}
        </>
      ) : (
        <p className="font-body text-lg">
          Aún no hay piezas. Cuelga una en{" "}
          <Link href="/studio" className="text-accent underline">
            /studio
          </Link>
          .
        </p>
      )}
    </main>
  );
}
