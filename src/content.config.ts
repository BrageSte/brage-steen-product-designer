import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Ett prosjekt = én mappe i src/content/prosjekter/<slug>/ med index.mdx og bilder/.
// niva: "case" får egen prosjektside, "kort" vises bare i «Mer arbeid» på forsiden.
const prosjekter = defineCollection({
  loader: glob({
    base: "./src/content/prosjekter",
    pattern: "*/index.{md,mdx}",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: ({ image }) =>
    z.object({
      tittel: z.string(),
      ingress: z.string(),
      niva: z.enum(["case", "kort"]).default("case"),
      rekkefolge: z.number(),
      fremhevet: z.boolean().default(false),
      utkast: z.boolean().default(false),
      status: z.enum(["ferdig", "pagaende"]).default("ferdig"),
      // Periode som år; slutt utelates for pågående prosjekter
      start: z.number().int(),
      slutt: z.number().int().optional(),
      disipliner: z.array(z.string()).default([]),
      rolle: z.string().optional(),
      team: z.array(z.string()).default([]),
      varighet: z.string().optional(),
      verktoy: z.array(z.string()).default([]),
      oppdragsgiver: z.string().optional(),
      aksentfarge: z.string().default("#2340c8"),
      cover: image(),
      coverAlt: z.string(),
      fotokreditt: z.string().optional(),
      lenker: z
        .array(z.object({ tekst: z.string(), url: z.string() }))
        .default([]),
    }),
});

export const collections = { prosjekter };
