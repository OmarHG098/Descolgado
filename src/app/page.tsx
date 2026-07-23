import { getClient } from "@/sanity/client";

type Piece = {
  title: string;
  slug: string;
  ficha: { summary?: string; date?: string } | null;
};

const PIECE_QUERY = `*[_type == "piece"][0]{ title, "slug": slug.current, ficha }`;

export default async function Home() {
  let piece: Piece | null = null;
  try {
    piece = await getClient().fetch<Piece | null>(PIECE_QUERY);
  } catch {
    // No Sanity project configured yet (empty NEXT_PUBLIC_SANITY_PROJECT_ID) — fall through to empty state.
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-8 py-32">
      {piece ? (
        <article className="max-w-xl text-center">
          <h1 className="font-grotesque text-3xl font-semibold">
            {piece.title}
          </h1>
          {piece.ficha?.summary && (
            <p className="font-body mt-4 text-lg text-descolgado-ink/80">
              {piece.ficha.summary}
            </p>
          )}
        </article>
      ) : (
        <p className="font-body text-lg">
          Aún no hay piezas. Cuelga una en{" "}
          <a href="/studio" className="text-descolgado-red underline">
            /studio
          </a>
          .
        </p>
      )}
    </main>
  );
}
