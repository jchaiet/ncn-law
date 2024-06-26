import {DocumentTextIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const contentBlockType = defineType({
  name: 'contentBlock',
  type: 'object',
  title: 'Content Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: "block" }]
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required()
        }
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Content Block',
        media: image || DocumentTextIcon,
      }
    },
  },
})