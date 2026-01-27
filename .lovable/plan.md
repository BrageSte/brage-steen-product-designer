
# 3D-Printed Headset Concept – Case Study Page

## Summary

Create a polished, professional case study page for the 3D-Printed Headset Concept project, following the established design patterns from SortingGuideCase.tsx. The page will showcase Brage's ability to design, prototype, and iterate on a physical product with emphasis on ergonomics, form, and hands-on making.

---

## Page Structure

### 1. Hero Section
- **Title**: 3D-Printed Headset Concept
- **Subtitle**: "Utforskning av ergonomi, form og produksjonsdesign gjennom et fullskala fysisk produkt"
- **Meta chips**: Role (Product Designer), Type (Fysisk produkt), Duration (4 måneder), Tools (Fusion 360, 3D-printing)
- **Hero image**: Full-width image placeholder using `jadda.47-1.png` or `headphones-bakgrunn.png`

### 2. Sticky Sidebar (Desktop) / Accordion (Mobile)
Case summary box containing:
- **Rolle**: Product Designer
- **Varighet**: 4 måneder
- **Type**: Fysisk produkt / Prototyping
- **Verktøy**: Fusion 360, 3D-printing
- **Leveranser**: CAD-modell, Fysiske prototyper, Tekniske tegninger

### 3. Overview Section
Short introduction explaining:
- Project context (commuter/office headset with industrial production focus)
- Exploration of comfort, fit, and form through rapid prototyping
- Focus on injection molding constraints and manufacturability

**"Mitt bidrag" bullet list**:
- Konsept- og formutvikling
- Ergonomisk utforskning
- CAD-modellering
- Prototyping og iterasjon

### 4. Problem Section
Core challenge explanation:
- Headsets must balance comfort, stability, weight, and pressure distribution
- Small form decisions have large impact on long-term use
- Digital-only design is insufficient for ergonomic products

### 5. Design Approach Section
Hands-on approach explanation:
- Sketching and early form exploration (joint types, cup holder design)
- CAD modeling with focus on contact points (headband, ears, pressure zones)
- Designing for injection molding (draft angles, material flow)

**Image placeholders**:
- Early sketches (`tegninger.png`, `20211128_172826.png`)
- CAD exploration

### 6. Prototyping and Iteration Section
How prototyping informed design:
- Multiple iterations of headband and ear cup geometry
- Adjustments based on fit, balance, and pressure
- Challenges with 3D swivel joint leading to simplification
- Learning through physical testing

**Image placeholders**:
- Early prototype (`proto-hvit-bakgrunn.png`)
- Render and function comparison (`render-and-function.png`)

### 7. Final Design Section
Description of final headset:
- Overall form and visual design decisions
- Key ergonomic decisions (weight distribution, cup holder design)
- Manufacturing considerations (injection molding ready)

**Image placeholders**:
- Exploded view (`exploded-1.png`)
- Technical drawings (`tegninger-v1-1.png`)
- Slider mechanism detail (`skinne-1.png`)
- Final product views

### 8. 3D Model CTA
Button linking to interactive 3D model:
- Link: https://a360.co/4bEJ4bR

### 9. Reflection Section
Three bullet points:
1. Physical prototyping reveals issues that CAD cannot – especially for ergonomics
2. Designing for production constraints (injection molding) shapes the entire design process
3. Iterative testing builds confidence in decisions that look good on screen but must feel good in use

### 10. Next Project Section
Link to next case study (Klatretak / climbing holds)

---

## Technical Implementation

### File to Create
`src/pages/HeadsetCase.tsx`

### Routing Update
Update `src/App.tsx` to add route:
```
/prosjekter/headset → HeadsetCase
```

### Component Structure
Following the same pattern as SortingGuideCase.tsx:
- useState for mobile accordion toggle
- caseData object for metadata
- Structured sections with consistent spacing
- Image placeholders with descriptive labels
- Sticky sidebar on desktop (top-24)
- Mobile accordion for case summary

### Image Placeholders
All images will initially be placeholders with descriptions. The following WordPress images are available for future integration:
- Hero: `jadda.47-1.png`, `headphones-bakgrunn.png`
- Sketches: `tegninger.png`, `20211128_172826.png`
- Prototypes: `proto-hvit-bakgrunn.png`, `render-and-function.png`
- Technical: `exploded-1.png`, `skinne-1.png`, `tegninger-v1-1.png`

---

## Full Copy (Norwegian)

### Hero
**Title**: 3D-Printed Headset Concept

**Subtitle**: Utforskning av ergonomi, form og produksjonsdesign gjennom et fullskala fysisk produkt

### Overview
Dette prosjektet utforsker design av et sammenleggbart headset for pendlere og kontorbruk, med fokus på industriell produksjon. Gjennom rask prototyping og iterasjon testet jeg hvordan form, passform og ergonomi fungerer i virkeligheten – ikke bare på skjermen. Målet var å designe et produkt klart for sprøytestøping, med alle de begrensningene og mulighetene det medfører.

**Mitt bidrag**:
- Konsept- og formutvikling
- Ergonomisk utforskning
- CAD-modellering i Fusion 360
- Prototyping og iterasjon med 3D-printing

### Problemet
Headset må balansere flere motstridende krav: komfort, stabilitet, vekt og trykkfordeling. Små beslutninger om form har stor innvirkning på langvarig bruk. Å designe kun digitalt er utilstrekkelig for ergonomiske produkter – man må kjenne hvordan ting faktisk føles mot hodet.

### Designtilnærming
Prosessen startet med skissering og utforskning av ulike formspråk. Jeg studerte eksisterende produkter og testet konsepter for leddmekanismer, inkludert et tidlig forsøk på et 3D-svivelledd som senere ble forenklet.

I CAD fokuserte jeg på kontaktpunktene: hodebøyle, øreputer og trykksonene mellom dem. Siden målet var sprøytestøping, måtte hver del designes med riktige utslippsvinkler og materialflyt i tankene.

### Prototyping og iterasjon
Fysisk prototyping avslørte problemer som ikke var synlige på skjermen. Jeg itererte på hodebøylens geometri og ørekoppenes form basert på passform, balanse og trykk.

Et viktig læringspunkt var å forenkle. Det opprinnelige svivel-leddet var elegant i teorien, men for komplekst for produksjon. Den endelige mekanismen er enklere, mer robust, og like funksjonell.

### Endelig design
Det endelige headsetet balanserer visuell identitet med ergonomi og produksjonsvennlighet. Ørekoppholderen har en kontrasterende bakdel som gir produktet et distinkt utseende. Vektfordelingen er optimalisert for lange arbeidsøkter.

Alle deler er designet for sprøytestøping i polyetylen-plast, med metallelementer der det trengs for styrke.

### Refleksjon
1. **Fysisk prototyping avslører det CAD ikke kan** – spesielt for produkter som skal føles godt over tid
2. **Produksjonskrav former designet** – å designe for sprøytestøping er ikke en begrensning, det er et designparameter
3. **Forenkling er en ferdighet** – de beste løsningene er ofte enklere enn de første ideene
