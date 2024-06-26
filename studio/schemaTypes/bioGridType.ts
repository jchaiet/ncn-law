import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const bioGridType = defineType({
  name: "bioGrid",
  type: 'object',
  title: "Bio Grid",
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
        { type: "bio" }
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
        subtitle: 'Bio Grid',
        media: image || DocumentTextIcon,
      }
    },
  },
});