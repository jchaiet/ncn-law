import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from '@sanity/icons'

export const cardType = defineType({
  name: 'card',
  type: 'object',
  title: 'Card',
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
    defineField({
      title: 'CTA Text',
      name: 'ctaText',
      type: 'string'
    }),
    defineField({
      title: "Destination",
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      title: 'CTA Style',
      name: 'ctaStyle',
      type: 'string',
      initialValue: "transparent",
      options: {
        list: [
          { "title": "Transparent", "value": "transparent" },
          { "title": "Blue", "value": "blue" },
        ],
      }
    }),
    defineField({
      title: 'CTA Icon',
      name: 'ctaIcon',
      type: 'string',
      initialValue: "arrow",
      options: {
        list: [
          { "title": "Arrow", "value": "arrow" },
        ],
      }
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Card',
      }
    },
  },
});