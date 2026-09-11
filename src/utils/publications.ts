import type { CollectionEntry } from "astro:content";

export function comparePublications(
  a: CollectionEntry<"publications">,
  b: CollectionEntry<"publications">
): number {
  return b.data.year - a.data.year || (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0);
}
