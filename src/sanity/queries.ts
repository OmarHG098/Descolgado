import { getClient } from './client'
import type { Piece, PieceDetail } from '@/types/piece'

const FICHA_PROJECTION = `ficha { summary, date }`

export async function getPieceBySlug(slug: string): Promise<PieceDetail | null> {
  return getClient().fetch(
    `*[_type == "piece" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      mainImage,
      body,
      ${FICHA_PROJECTION}
    }`,
    { slug },
  )
}

// Newest-to-oldest, for the piece detail page's sidebar.
export async function getAllPieces(): Promise<Piece[]> {
  return getClient().fetch(
    `*[_type == "piece"] | order(ficha.date desc){
      _id,
      title,
      "slug": slug.current,
      mainImage,
      ${FICHA_PROJECTION}
    }`,
  )
}

export async function searchPieces(term: string): Promise<Piece[]> {
  return getClient().fetch(
    `*[_type == "piece" && (title match $term || ficha.summary match $term)] | order(ficha.date desc){
      _id,
      title,
      "slug": slug.current,
      mainImage,
      ${FICHA_PROJECTION}
    }`,
    { term: `${term}*` },
  )
}
