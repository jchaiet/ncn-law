import {DocumentTextIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  type: 'object',
  title: "Banner",
  fields: [
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'string',
      initialValue: "blue",
      options: {
        list: [
          { "title": "Blue", "value": "blue" },
          { "title": "Grey", "value": "grey" },
        ],
      }
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
        subtitle: 'Banner',
        media: image || DocumentTextIcon,
      }
    },
  },
})