import { DocumentTextIcon } from '@sanity/icons'
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
      of: [{
        type: "block",
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean'
                }
              ]
            },
            {
              name: 'internalLink',
              type: 'object',
              title: 'Internal link',
              fields: [
                {
                  name: 'reference',
                  type: 'reference',
                  title: 'Reference',
                  to: [
                    { type: 'page' },
                    // other types you may want to link to
                  ]
                }
              ]
            }
          ]
        }
      }]
    }),
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'string',
      initialValue: "blue",
      options: {
        list: [
          { "title": "Blue", "value": "blue" },
          { "title": "Grey", "value": "grey" },
          { "title": "White", "value": "white" },
        ],
      }
    }),
    defineField({
      title: 'Orientation',
      name: 'orientation',
      type: 'string',
      initialValue: "standard",
      options: {
        list: [
          { "title": "Standard", "value": "standard" },
          { "title": "Heading Left", "value": "heading-left" },
        ],
      }
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
        subtitle: 'Content Block',
        media: image || DocumentTextIcon,
      }
    },
  },
})