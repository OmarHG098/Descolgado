import { PieceCard } from "@/components/PieceCard";
import { searchPieces } from "@/sanity/queries";

export default async function BuscarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const pieces = query ? await searchPieces(query) : [];

  return (
    <main className="flex flex-1 flex-col px-4 py-8 sm:px-8">
      <h1 className="font-grotesque mb-8 text-2xl font-semibold">
        {query ? `Resultados para "${query}"` : "Buscar piezas"}
      </h1>

      {!query && (
        <p className="font-body text-lg">
          Escribí una palabra clave en el buscador de arriba.
        </p>
      )}

      {query && pieces.length === 0 && (
        <p className="font-body text-lg">
          No se encontraron piezas para &quot;{query}&quot;.
        </p>
      )}

      {pieces.length > 0 && (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pieces.map((piece) => (
            <PieceCard key={piece._id} piece={piece} variant="grid" />
          ))}
        </section>
      )}
    </main>
  );
}
