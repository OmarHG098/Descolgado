import { defineField, defineType } from 'sanity'

export const piece = defineType({
  name: 'piece',
  title: 'Piece',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    // Max 1-2 images per Piece (free-tier storage constraint) — enforced in the
    // editor UI later; webp conversion/lazy-loading are handled at render time.
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ficha',
      title: 'Ficha',
      type: 'object',
      description: "The Piece's technical data sheet — fields will expand later.",
      fields: [
        defineField({ name: 'summary', title: 'Summary', type: 'text' }),
        defineField({ name: 'date', title: 'Date', type: 'date' }),
      ],
    }),
  ],
})
