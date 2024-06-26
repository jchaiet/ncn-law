import { defineField, defineType } from "sanity";

export const breakType = defineType({
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      title: "Break style",
      options: {
        list: [
          { title: "HR", value: "hr" },
        ]
      }
    })
  ]
});