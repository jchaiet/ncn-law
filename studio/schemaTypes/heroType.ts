import {DocumentTextIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: 'object',
  title: "Hero",
  fields: [
    defineField({
      name: 'includeLogo',
      title: "Include logo",
      type: 'boolean',
    }),
    defineField({
      name: 'isHome',
      title: "Is this the home page?",
      type: 'boolean',
    }),
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
      ]
    })
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
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    },
  },
})