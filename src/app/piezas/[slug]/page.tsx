import Image from "next/image";
import { notFound } from "next/navigation";
import { Ficha } from "@/components/Ficha";
import { PieceBody } from "@/components/PieceBody";
import { PieceSidebar } from "@/components/PieceSidebar";
import { getAllPieces, getPieceBySlug } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export async function generateStaticParams() {
  const pieces = await getAllPieces();
  return pieces.map((piece) => ({ slug: piece.slug }));
}

export default async function PiezaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [piece, allPieces] = await Promise.all([
    getPieceBySlug(slug),
    getAllPieces(),
  ]);

  if (!piece) {
    notFound();
  }

  const imageUrl = piece.mainImage
    ? urlFor(piece.mainImage).width(1200).height(675).url()
    : null;

  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <div className="flex flex-1 flex-col px-4 py-8 sm:px-8">
        <article className="mx-auto w-full max-w-3xl">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={piece.title}
              width={1200}
              height={675}
              className="mb-8 h-auto w-full"
              loading="lazy"
            />
          )}

          <h1 className="font-grotesque mb-4 text-3xl font-semibold md:text-4xl">
            {piece.title}
          </h1>

          {piece.ficha && <Ficha ficha={piece.ficha} className="mb-8" />}

          {piece.body && <PieceBody body={piece.body} />}
        </article>
      </div>

      <PieceSidebar pieces={allPieces} currentSlug={piece.slug} />
    </div>
  );
}
