import { getCollection, type CollectionEntry } from "astro:content";

export type Prosjekt = CollectionEntry<"prosjekter">;

export function periode(p: Prosjekt["data"]): string {
  if (p.status === "pagaende") return `${p.start} – nå`;
  if (!p.slutt || p.slutt === p.start) return String(p.start);
  return `${p.start} – ${p.slutt}`;
}

const sorter = (a: Prosjekt, b: Prosjekt) => a.data.rekkefolge - b.data.rekkefolge;

/** Utvalgte prosjekter med egen side, i Brages rekkefølge. */
export async function caseProsjekter() {
  return (await getCollection("prosjekter", (p) => p.data.niva === "case")).sort(sorter);
}

/** Korte oppføringer til «Mer arbeid». */
export async function korteProsjekter() {
  return (await getCollection("prosjekter", (p) => p.data.niva === "kort")).sort(sorter);
}
