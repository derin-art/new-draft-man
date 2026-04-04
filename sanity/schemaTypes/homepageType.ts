// schemas/singletonLinks.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "singletonLinks",
  title: "Singleton Links",
  type: "document",

  fields: [
    // Texts
    defineField({
      name: "text1",
      title: "Text 1",
      type: "string",
    }),
    defineField({
      name: "text2",
      title: "Text 2",
      type: "string",
    }),
    defineField({
      name: "text3",
      title: "Text 3",
      type: "string",
    }),
    defineField({
      name: "text4",
      title: "Text 4",
      type: "string",
    }),

    // Links
    defineField({
      name: "link1",
      title: "Link 1 (X / Twitter)",
      type: "url",
    }),
    defineField({
      name: "link2",
      title: "Link 2 (Behance)",
      type: "url",
    }),
    defineField({
      name: "link3",
      title: "Link 3 (Instagram)",
      type: "url",
    }),
    defineField({
      name: "link4",
      title: "Link 4 (LinkedIn)",
      type: "url",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Singleton Links Config",
      };
    },
  },
});
