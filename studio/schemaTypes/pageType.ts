import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string"
    }),
    defineField({
      name: "metadata",
      title: "Metadata",
      type: "pageMeta",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero"
        }),
        defineArrayMember({
          name: "contentBlock",
          type: "contentBlock"
        }),
        defineArrayMember({
          name: "twoColumnBlock",
          type: "twoColumnBlock"
        }),
        defineArrayMember({
          name: "imageGrid",
          type: "imageGrid"
        }),
        defineArrayMember({
          name: "cardGrid",
          type: "cardGrid"
        }),
        defineArrayMember({
          name: "bioGrid",
          type: "bioGrid"
        }),
        defineArrayMember({
          name: "carousel",
          type: "carousel"
        }),
        defineArrayMember({
          name: "bio",
          type: "bio"
        }),
        defineArrayMember({
          name: "banner",
          type: "banner"
        }),
        defineArrayMember({
          name: "contact",
          type: "contact"
        }),
      ]
    })
  ]
})