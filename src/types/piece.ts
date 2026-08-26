import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

export type Ficha = {
  summary: string;
  date: string; // ISO "YYYY-MM-DD"
};

export type Piece = {
  _id: string;
  title: string;
  slug: string;
  // Not required on the Sanity schema itself, only its inner fields are —
  // real documents can have no ficha at all.
  ficha?: Ficha;
  mainImage?: SanityImageSource;
};

// Full document, fetched only on the piece detail page (feed cards don't
// need the Portable Text body).
export type PieceDetail = Piece & {
  body?: PortableTextBlock[];
};
