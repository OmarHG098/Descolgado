import Link from "next/link";
import { PieceCard } from "@/components/PieceCard";
import { mockPieces } from "@/lib/mockPieces";

export default function Home() {
  const [featured, ...pieces] = mockPieces;
  const gridPieces = pieces.slice(0, 3);
  const listPieces = pieces.slice(3);

  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 py-10 sm:px-8 sm:py-14">
      {featured ? (
        <>
          <section aria-labelledby="featured-heading">
            <p id="featured-heading" className="mb-4 border-b border-ink pb-2 font-grotesque text-[11px] uppercase tracking-[0.2em] text-accent">Pieza destacada</p>
            <PieceCard piece={featured} variant="hero" />
          </section>
          {gridPieces.length > 0 && <section className="mt-12 grid grid-cols-1 gap-8 border-t border-ink pt-7 sm:grid-cols-3">{gridPieces.map((piece) => <PieceCard key={piece._id} piece={piece} variant="grid" />)}</section>}
          {listPieces.length > 0 && <section className="mt-14 border-t border-ink pt-2">{listPieces.map((piece) => <PieceCard key={piece._id} piece={piece} variant="list" />)}</section>}
          <div className="mt-12 text-center"><Link href="/" className="inline-block bg-accent px-6 py-2 font-grotesque text-[11px] uppercase tracking-[0.2em] text-paper hover:bg-ink">Más piezas</Link></div>
        </>
      ) : <p className="font-serif text-lg">Aún no hay piezas. Cuelga una en <Link href="/studio" className="text-accent underline">/studio</Link>.</p>}
    </main>
  );
}
