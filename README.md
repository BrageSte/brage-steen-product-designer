# Brage Steen Portfolio

Denne porteføljen er bygget med Vite + React og er klar for Lovable deploy.

## Oppdatere bilder

### Prosjekt‑HTML (statisk)
- Prosjektsidene ligger i `public/projects/...`.
- Alle bilder som brukes av HTML‑sidene må ligge i samme mappe som HTML‑filen.
- Når du bytter bilde, bruk nøyaktig samme filnavn som i HTML‑en (eller oppdater `src="..."` i HTML‑en).

### Om meg‑portrett
- Bytt ut `public/images/portrait.jpg` med ditt portrett.
- Bildet vises automatisk på `/about`.

### Open Graph‑bilde
- Bytt ut `public/images/og-image.jpg` for deling i sosiale medier.
- Pass på at bildet er i 1200x630 (eller lignende 1.91:1‑format).

### Prosjekt‑covers på forsiden
- Oppdater `src/content/projects/index.ts`.
- For ekte bilder, legg filen i `public/images/` og sett `cover` til `/images/filnavn.jpg`.
- Vil du beholde gradienter, juster `coverGradient`‑verdien.

## Bygg

```bash
npm run build
```
