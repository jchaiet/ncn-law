import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const carouselType = defineType({
  name: "carousel",
  type: 'object',
  title: "Carousel",
  fields: [
    defineField({
      title: "Variation",
      name: 'variation',
      type: 'string',
      initialValue: "standard",
      options: {
        list: [
          { "title": "Link", "value": "link" },
          { "title": "Card", "value": "card" },
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
    {
      name: 'cards',
      type: 'array',
      hidden: ({ parent }: { parent: any }) => parent?.variation !== 'card',
      of: [
        {
          type: "card",
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'links',
      type: 'array',
      hidden: ({ parent }: { parent: any }) => parent?.variation !== 'link',
      of: [
        {
          type: "link",
        }
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
        subtitle: 'Carousel',
        media: image || DocumentTextIcon,
      }
    },
  },
});