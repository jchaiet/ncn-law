import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const imageGridType = defineType({
  name: "imageGrid",
  type: 'object',
  title: "Image Grid",
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
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        })
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
        subtitle: 'Image Grid',
        media: image || DocumentTextIcon,
      }
    },
  },
});