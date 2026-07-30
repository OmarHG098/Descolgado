export type Ficha = {
  summary: string;
  date: string; // ISO "YYYY-MM-DD"
};

export type Piece = {
  _id: string;
  title: string;
  slug: string;
  ficha: Ficha;
};
