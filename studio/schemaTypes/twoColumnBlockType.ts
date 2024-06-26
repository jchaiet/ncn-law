import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const twoColumnBlockType = defineType({
  name: 'twoColumnBlock',
  type: 'object',
  title: 'Two Column Block',
  fields: [
    defineField({
      title: 'Text Position',
      name: 'textPosition',
      type: 'string',
      initialValue: "start",
      options: {
        list: [
          { "title": "Start", "value": "start" },
          { "title": "End", "value": "end" },
        ],
      }
    }),
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
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Two Column Block',
        media: image || DocumentTextIcon,
      }
    },
  },
})