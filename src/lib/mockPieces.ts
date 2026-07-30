import type { Piece } from "@/types/piece";

// Pre-sorted newest-first. Real data will instead use GROQ `order(ficha.date desc)`.
export const mockPieces: Piece[] = [
  {
    _id: "mock-1",
    title: "El ruido que queda cuando apagás todo",
    slug: "el-ruido-que-queda",
    ficha: {
      summary:
        "Una crónica sobre el silencio impuesto y lo que florece en sus grietas.",
      date: "2026-07-20",
    },
  },
  {
    _id: "mock-2",
    title: "Retratos de una ciudad que no duerme",
    slug: "retratos-de-una-ciudad",
    ficha: {
      summary: "Fotografía callejera y notas sueltas de una noche larga.",
      date: "2026-07-12",
    },
  },
  {
    _id: "mock-3",
    title: "Cartas que nunca se enviaron",
    slug: "cartas-que-nunca-se-enviaron",
    ficha: {
      summary: "Fragmentos epistolares recuperados de un cajón olvidado.",
      date: "2026-07-05",
    },
  },
  {
    _id: "mock-4",
    title: "La estética del desorden",
    slug: "la-estetica-del-desorden",
    ficha: {
      summary: "Un ensayo visual sobre el caos como forma de composición.",
      date: "2026-06-28",
    },
  },
  {
    _id: "mock-5",
    title: "Notas desde la sala de espera",
    slug: "notas-desde-la-sala-de-espera",
    ficha: {
      summary: "Observaciones mínimas sobre el tiempo muerto compartido.",
      date: "2026-06-19",
    },
  },
  {
    _id: "mock-6",
    title: "Objetos que sobreviven a sus dueños",
    slug: "objetos-que-sobreviven",
    ficha: {
      summary: "Una serie sobre lo material y lo que insiste en quedarse.",
      date: "2026-06-10",
    },
  },
  {
    _id: "mock-7",
    title: "Diario de un verano interrumpido",
    slug: "diario-de-un-verano-interrumpido",
    ficha: {
      summary: "Entradas breves de una temporada que no terminó como debía.",
      date: "2026-05-30",
    },
  },
];
