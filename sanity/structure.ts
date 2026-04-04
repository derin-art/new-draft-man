import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      /*   S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"), */

      S.divider(),

      // ✅ Singleton
      S.listItem().title("Homepage Text and Links").id("singletonLinks").child(
        S.editor()
          .id("singletonLinks")
          .schemaType("singletonLinks")
          .documentId("singletonLinks"), // fixed = singleton
      ),

      S.divider(),

      // باقي document types (excluding the singleton)
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "singletonLinks"].includes(
            item.getId()!,
          ),
      ),
    ]);
