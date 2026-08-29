import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    date: z.coerce.date().optional(),
    links: z
      .object({
        arxiv: z.string().url().optional(),
        pdf: z.string().optional(),
        doi: z.string().url().optional(),
        code: z.string().url().optional(),
      })
      .optional(),
    selected: z.boolean().default(false),
    status: z.enum(["preprint", "accepted", "published"]).default("published"),
    note: z.string().optional(),
  }),
});

export const collections = { news, publications };
