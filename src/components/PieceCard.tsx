import Link from "next/link";
import type { Piece } from "@/types/piece";
import { Ficha } from "@/components/Ficha";

const imageTones = ["bg-stone", "bg-sage", "bg-clay", "bg-slate", "bg-ochre", "bg-moss"];

export function PieceCard({ piece, variant }: { piece: Piece; variant: "hero" | "grid" | "list" }) {
  const tone = imageTones[Number(piece._id.replace("mock-", "")) % imageTones.length];
  if (variant === "list") return <Link href={`/piezas/${piece.slug}`} className="group block border-b border-ink/40 py-7"><article className="grid gap-5 sm:grid-cols-[minmax(220px,34%)_1fr] sm:items-start"><div className={`editorial-image aspect-[16/9] ${tone}`}><span className="image-mark">DESCOLGADO</span></div><div><p className="font-grotesque text-[10px] uppercase tracking-[0.18em] text-accent">Pieza · {piece.ficha?.date}</p><h2 className="mt-2 max-w-xl font-serif text-2xl font-semibold leading-tight group-hover:underline sm:text-3xl">{piece.title}</h2>{piece.ficha && <Ficha ficha={piece.ficha} className="mt-3 max-w-lg text-base" />}</div></article></Link>;
  const isHero = variant === "hero";
  return <Link href={`/piezas/${piece.slug}`} className="group block"><article><div className={`editorial-image relative ${tone} ${isHero ? "aspect-[16/8]" : "aspect-[4/3]"}`}><span className="image-mark">DESCOLGADO</span>{isHero && <div className="absolute inset-x-0 bottom-0 bg-ink/90 px-5 py-5 text-center sm:px-10"><h1 className="font-serif text-3xl font-semibold leading-tight text-paper sm:text-5xl">{piece.title}</h1></div>}</div>{!isHero && <><p className="mt-3 font-grotesque text-[10px] uppercase tracking-[0.18em] text-accent">Pieza</p><h2 className="mt-1 font-serif text-2xl font-semibold leading-tight group-hover:underline">{piece.title}</h2></>}</article></Link>;
}
