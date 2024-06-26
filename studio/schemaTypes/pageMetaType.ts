import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export const pageMetaType = defineType({
  name: "pageMeta",
  title: "Page Metadata",
  icon: DocumentsIcon,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      description: "Appears in the browser tab and search resuts",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      description: "Appears in the search results.",
      title: "Description",
      type: "string",
      validation: (rule) => rule.max(155)
    }),
    defineField({
      name: "path",
      title: "Path",
      description: "Used for the URL path.",
      type: "slug",
      options: {
        source: "title",
        isUnique: (value, context) => context.defaultIsUnique(value, context),
        slugify: (input: string) => input.toLocaleLowerCase().replace(/\s+/gu, "-").slice(0, 96)
      },
      validation: (rule) => rule.required()
    })
  ]
});