
## Problem
På `/projects/avfallsportalen` vises hovedmenyen to ganger:
1. Den ytre React-headeren (`SiteLayout`) + `ProjectBar` — riktig.
2. En kopi av samme "Brage Steen — Product Designer"-header som ligger inne i den standalone HTML-filen `public/projects/avfallsportalen/index.html` (linje 1979–1989), pluss portalens egen `main-nav`.

Iframen viser altså en hel "side i siden" i stedet for bare portalinnholdet.

## Endring
Rediger `public/projects/avfallsportalen/index.html`:

- Fjern `<header class="site-header">…</header>`-blokken (linje 1979–1989) som dupliserer hovedmenyen.
- Fjern også `<link rel="stylesheet" href="/projects/site-nav.css">` (linje 1976) siden den kun brukes av den fjernede headeren.

Da blir kun portalens egen `main-nav` (Reisen / Quiz / Sammenlign / Dashboard) synlig inne i iframen, og den ytre React-headeren + ProjectBar håndterer portfolio-navigasjonen.

## Ingen endringer
- `SiteLayout`, `ProjectBar` og `AvfallsportalenProject.tsx` rører jeg ikke.
- Portalens egen funksjonalitet (timeline, quiz, m.m.) er uberørt.
