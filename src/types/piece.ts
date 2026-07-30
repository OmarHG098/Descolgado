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
};
