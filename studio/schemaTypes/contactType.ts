import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from '@sanity/icons'

export const contactType = defineType({
  name: 'contact',
  type: 'object',
  title: 'Contact',
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
      name: "receiver",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email",
            invert: false,
          }
        ),
    }),
    defineField({
      name: 'info',
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
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Contact',
        media: image || DocumentTextIcon,
      }
    },
  },
});