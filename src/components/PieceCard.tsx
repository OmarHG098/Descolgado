import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Piece } from "@/types/piece";
import { Ficha } from "@/components/Ficha";
import { urlFor } from "@/sanity/image";

const IMAGE_TONES = ["bg-stone", "bg-sage", "bg-clay", "bg-slate", "bg-ochre", "bg-moss"];

function toneFor(id: string) {
  const hash = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return IMAGE_TONES[hash % IMAGE_TONES.length];
}

function PieceFrame({
  piece,
  aspect,
  imageWidth,
  imageHeight,
  sizes,
  priority = false,
  children,
}: {
  piece: Piece;
  aspect: string;
  imageWidth: number;
  imageHeight: number;
  sizes: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  const imageUrl = piece.mainImage
    ? urlFor(piece.mainImage).width(imageWidth).height(imageHeight).url()
    : null;

  return (
    <div className={`editorial-image relative ${aspect} ${imageUrl ? "" : toneFor(piece._id)}`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={piece.title}
          fill
          {...(priority ? { priority: true } : { loading: "lazy" })}
          sizes={sizes}
          className="object-cover"
        />
      )}
      <span className="image-mark">DESCOLGADO</span>
      {children}
    </div>
  );
}

export function PieceCard({
  piece,
  variant,
}: {
  piece: Piece;
  variant: "hero" | "grid" | "list";
}) {
  if (variant === "list") {
    return (
      <Link href={`/piezas/${piece.slug}`} className="group border-ink/40 block border-b py-7">
        <article className="grid gap-5 sm:grid-cols-[minmax(220px,34%)_1fr] sm:items-start">
          <PieceFrame
            piece={piece}
            aspect="aspect-[16/9]"
            imageWidth={480}
            imageHeight={270}
            sizes="(min-width: 640px) 34vw, 100vw"
          />
          <div>
            <p className="font-grotesque text-accent text-[10px] uppercase tracking-[0.18em]">
              Pieza{piece.ficha?.date ? ` · ${piece.ficha.date}` : ""}
            </p>
            <h2 className="mt-2 max-w-xl font-serif text-2xl font-semibold leading-tight group-hover:underline sm:text-3xl">
              {piece.title}
            </h2>
            {piece.ficha && <Ficha ficha={piece.ficha} className="mt-3 max-w-lg text-base" />}
          </div>
        </article>
      </Link>
    );
  }

  const isHero = variant === "hero";

  return (
    <Link href={`/piezas/${piece.slug}`} className="group block">
      <article>
        <PieceFrame
          piece={piece}
          aspect={isHero ? "aspect-[16/8]" : "aspect-[4/3]"}
          imageWidth={isHero ? 1200 : 600}
          imageHeight={isHero ? 675 : 450}
          sizes={isHero ? "100vw" : "(min-width: 768px) 33vw, 100vw"}
          priority={isHero}
        >
          {isHero && (
            <div className="bg-ink/90 text-paper absolute inset-x-0 bottom-0 px-4 py-5 text-center sm:px-10">
              <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
                {piece.title}
              </h1>
            </div>
          )}
        </PieceFrame>
        {!isHero && (
          <>
            <p className="font-grotesque text-accent mt-3 text-[10px] uppercase tracking-[0.18em]">
              Pieza
            </p>
            <h2 className="mt-1 font-serif text-2xl font-semibold leading-tight group-hover:underline">
              {piece.title}
            </h2>
          </>
        )}
        {piece.ficha && <Ficha ficha={piece.ficha} className="mt-2" />}
      </article>
    </Link>
  );
}
