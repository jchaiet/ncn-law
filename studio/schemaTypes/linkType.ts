import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'heading',
      type: 'string'
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
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Link',
      }
    },
  },
});