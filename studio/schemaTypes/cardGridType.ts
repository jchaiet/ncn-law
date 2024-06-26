import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const cardGridType = defineType({
  name: "cardGrid",
  type: 'object',
  title: "Card Grid",
  fields: [
    defineField({
      name: 'heading',
      type: 'string'
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [
        { type: "block" },
        { type: "break" }
      ]
    }),
    {
      name: 'items',
      type: 'array',
      of: [
        { type: "card" }
      ],
      options: {
        layout: 'grid'
      }
    }
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Card Grid',
        media: image || DocumentTextIcon,
      }
    },
  },
});