// schemas/singletonLinks.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "singletonLinks",
  title: "Singleton Links",
  type: "document",

  fieldsets: [
    { name: "texts", title: "📝 Text Content" },
    { name: "links", title: "🔗 Social & Navigation Links" },
  ],

  fields: [
    // Texts
    defineField({
      name: "text1",
      title: "Text 1 (Intro Text)",
      type: "string",
      fieldset: "texts",
    }),
    defineField({
      name: "text2",
      title: "Text 2 (About Us Text)",
      type: "string",
      fieldset: "texts",
    }),
    defineField({
      name: "text3",
      title: "Text 3 (Misc Text)",
      type: "string",
      fieldset: "texts",
    }),
    defineField({
      name: "text4",
      title: "Text 4 (Misc Text)",
      type: "string",
      fieldset: "texts",
    }),

    // Links
    defineField({
      name: "link1",
      title: "Link 1 (X / Twitter)",
      type: "url",
      fieldset: "links",
    }),
    defineField({
      name: "link2",
      title: "Link 2 (Behance)",
      type: "url",
      fieldset: "links",
    }),
    defineField({
      name: "link3",
      title: "Link 3 (Instagram)",
      type: "url",
      fieldset: "links",
    }),
    defineField({
      name: "link4",
      title: "Link 4 (LinkedIn)",
      type: "url",
      fieldset: "links",
    }),
    defineField({
      name: "link5",
      title: "Link 5 (Capabilities)",
      type: "url",
      fieldset: "links",
    }),
    defineField({
      name: "link6",
      title: "Link 6 (Intro call with us link)",
      type: "url",
      fieldset: "links",
    }),
  ],
});
