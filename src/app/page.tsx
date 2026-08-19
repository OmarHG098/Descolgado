import Link from "next/link";
import { PieceCard } from "@/components/PieceCard";
import { mockPieces } from "@/lib/mockPieces";

export default function Home() {
  const [newest, ...rest] = mockPieces;

  return (
    <main className="flex flex-1 flex-col px-4 py-8 sm:px-8">
      {newest ? (
        <>
          <section className="mb-12">
            <PieceCard piece={newest} variant="hero" />
          </section>

          {rest.length > 0 && (
            <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {rest.map((piece) => (
                <PieceCard key={piece._id} piece={piece} variant="grid" />
              ))}
            </section>
          )}
        </>
      ) : (
        <p className="font-body text-lg">
          Aún no hay piezas. Cuelga una en{" "}
          <Link href="/studio" className="text-descolgado-red underline">
            /studio
          </Link>
          .
        </p>
      )}
    </main>
  );
}
