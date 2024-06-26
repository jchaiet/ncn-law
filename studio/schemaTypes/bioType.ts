import { defineField, defineType } from "sanity";
import { UserIcon } from '@sanity/icons'

export const bioType = defineType({
  name: 'bio',
  type: 'object',
  title: 'Bio',
  fields: [
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
    }),
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'position',
      type: 'string'
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [
        { type: "block" }
      ]
    }),
    defineField({
      title: "Destination",
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Bio',
        media: UserIcon,
      }
    },
  },
});