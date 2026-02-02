

# Portfolio Rebuild: Dieter Rams-Inspired UI Scaffold

## Summary

Complete restructure of the portfolio from the current design to a minimalist, elegant, Dieter Rams-inspired design with subtle James Turrell "light/atmosphere" effects. This is a UI-only scaffold with routing, content structure, and placeholder content ready for real text/images.

---

## Design Direction

### Visual Language
- **Inspiration**: Dieter Rams (clean grid, functional minimalism) + James Turrell (subtle warm light, atmosphere)
- **Typography**: Helvetica-first system font stack
- **Colors**: Warm off-white background with soft gradient glow effects
- **Spacing**: Large margins, generous whitespace, clear hierarchy

### Animation System
- Hero glow: Subtle pulsing/breathing ambient glow
- Card hover: Gentle lift + shadow increase
- Section reveal: Fade-up on scroll (using IntersectionObserver)
- All animations: Subtle, 0.3-0.6s duration, ease-out timing

---

## Information Architecture

### Routes Structure

```text
/                              Home (hero + project grid + featured)
/work                          Project list with filters
/work/sorting-guide            Sorting Guide case study
/work/sorting-guide/prototype  Prototype embed page
/work/sorting-guide/gigamap    Gigamap display page
/work/avfallsportalen          Avfallsportalen case study
/work/headset                  3D Printed Headset case study
/work/seaweed                  Seaweed case study
/work/crimpblock               Crimpblock case study (with BS Climbing CTA)
/about                         About page
/contact                       Contact page
```

---

## Content Model

### projects.ts Schema

```typescript
interface Project {
  slug: string;
  title: string;
  year: string;
  tags: string[];           // ["Service", "Product", "Digital", "Prototype"]
  category: string;         // Primary category for display
  role: string;
  summary: string;          // One-liner for cards
  description: string;      // Longer description for case page
  coverImage: string;       // Path in /public/images/{slug}/
  galleryImages: string[];  // Array of image paths
  links: {
    prototype?: string;
    gigamap?: string;
    external?: string;      // e.g., BS Climbing link
    model3d?: string;       // e.g., Autodesk 360 link
  };
  featured?: boolean;
  hasSubpages?: boolean;
}
```

### Project Data (5 projects)

1. **Sorting Guide** - Service design, IKEA/Grønt Punkt collaboration
2. **Avfallsportalen** - Digital service design
3. **3D Printed Headset** - Physical product, ergonomics focus
4. **Seaweed** - Physical/prototype project
5. **Crimpblock** - Climbing holds with CTA to BS Climbing

---

## Component Architecture

### New Components to Create

```text
src/
  components/
    layout/
      Layout.tsx           (refactored with new design)
      Navbar.tsx           (sticky, minimal, active states)
      Footer.tsx           (refactored)
    
    ui/
      Section.tsx          (consistent section wrapper with reveal)
      ProjectCard.tsx      (hover effects, gradient placeholder)
      ProjectGrid.tsx      (responsive grid container)
      TagPill.tsx          (category/filter tags)
      FilterBar.tsx        (filters + sort + search - UI only)
      NextProject.tsx      (next project navigation)
      ImageWithFallback.tsx (image with gradient placeholder)
      GlowBackground.tsx   (ambient glow effect)
      ContactForm.tsx      (visual-only form)
    
    project/
      CaseHero.tsx         (project case study hero)
      CaseSidebar.tsx      (sticky sidebar / mobile accordion)
```

### Hooks

```text
src/hooks/
  useScrollReveal.ts       (IntersectionObserver for reveal animations)
```

---

## Page Implementations

### 1. Home Page (/)

**Structure:**
- GlowBackground (subtle ambient light effect)
- Hero section:
  - "Brage Steen - Product Designer"
  - Short intro (1-2 sentences)
  - CTA buttons: "Se arbeid" -> /work, "Kontakt" -> /contact
- ProjectGrid (5 projects)
- Featured Project section (Sorting Guide highlight)

### 2. Work Page (/work)

**Structure:**
- Page header with title
- FilterBar:
  - Tag filters: "Service", "Product", "Digital", "Prototype"
  - Sort dropdown: "Nyeste", "Mest relevante" (UI-only)
  - Search field (UI-only)
- ProjectGrid with all projects
- Click navigation to individual project pages

### 3. Project Case Pages Template

**Structure:**
- CaseHero (image, title, meta chips)
- CaseSidebar (sticky desktop / accordion mobile)
- Content sections with scroll reveal
- NextProject navigation at bottom

**Individual Pages:**
- `/work/sorting-guide` - Full case with links to subpages
- `/work/sorting-guide/prototype` - Simple page with embed placeholder
- `/work/sorting-guide/gigamap` - Simple page with image placeholder
- `/work/avfallsportalen` - Standard case template
- `/work/headset` - Standard case template (existing content adapted)
- `/work/seaweed` - Standard case template
- `/work/crimpblock` - Case with prominent CTA to bsclimbing.lovable.app

### 4. About Page (/about)

**Structure:**
- Portrait placeholder image
- Text blocks: background, work preferences, methods
- "Values/Principles" as cards (3 items)
- Skills and tools lists

### 5. Contact Page (/contact)

**Structure:**
- Simple contact section
- Contact cards: email, LinkedIn (placeholders)
- ContactForm component (name, email, message)
- "Takk!" confirmation shown locally (no actual sending)

---

## Styling System

### Tailwind Config Updates

**Typography:**
```javascript
fontFamily: {
  sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
}
```

**Colors (warm off-white palette):**
```javascript
colors: {
  background: '#FDFCFA',    // Warm off-white
  foreground: '#1A1A1A',    // Near black
  muted: '#F5F4F2',         // Subtle gray
  'muted-foreground': '#6B6B6B',
  border: '#E8E6E3',
  accent: '#E8E4DD',        // Warm accent
}
```

**New Animations:**
```javascript
keyframes: {
  'glow-pulse': {
    '0%, 100%': { opacity: '0.4' },
    '50%': { opacity: '0.6' }
  },
  'fade-up-reveal': {
    from: { opacity: '0', transform: 'translateY(24px)' },
    to: { opacity: '1', transform: 'translateY(0)' }
  }
}
```

### CSS Updates

**GlowBackground effect:**
```css
.glow-bg {
  position: fixed;
  inset: 0;
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    rgba(255, 248, 240, 0.8) 0%,
    transparent 70%
  );
  pointer-events: none;
  animation: glow-pulse 8s ease-in-out infinite;
}
```

---

## Image Handling

### Directory Structure
```text
public/
  images/
    sorting-guide/
      cover.jpg
      gallery-1.jpg
      ...
    avfallsportalen/
      cover.jpg
      ...
    headset/
    seaweed/
    crimpblock/
```

### ImageWithFallback Component
- Attempts to load image from path
- Shows gradient placeholder if image fails or doesn't exist
- Gradient uses warm neutral colors matching design system

---

## Implementation Order

### Phase 1: Foundation
1. Update `tailwind.config.ts` with new design tokens
2. Update `src/index.css` with new base styles and utilities
3. Create `content/projects.ts` with full content model
4. Create `ImageWithFallback` component
5. Create `GlowBackground` component

### Phase 2: Layout Components
6. Create new `Navbar.tsx` (sticky, minimal)
7. Refactor `Layout.tsx` with new structure
8. Refactor `Footer.tsx`
9. Create `Section.tsx` with scroll reveal

### Phase 3: Project Components
10. Create `TagPill.tsx`
11. Create new `ProjectCard.tsx` with hover effects
12. Create `ProjectGrid.tsx`
13. Create `FilterBar.tsx` (UI-only)
14. Create `NextProject.tsx`

### Phase 4: Case Study Components
15. Create `CaseHero.tsx`
16. Create `CaseSidebar.tsx`

### Phase 5: Pages
17. Rebuild Home page (`/`)
18. Create Work page (`/work`)
19. Create Sorting Guide case + subpages
20. Create Avfallsportalen case page
21. Migrate Headset case page to new structure
22. Create Seaweed case page
23. Create Crimpblock case page (with BS Climbing CTA)
24. Rebuild About page
25. Create Contact page

### Phase 6: Polish
26. Create `useScrollReveal` hook
27. Add scroll reveal animations to all sections
28. Test and refine hover states
29. Verify responsive behavior across breakpoints
30. Update routing in `App.tsx`

---

## Technical Notes

### Scroll Reveal Implementation
Using IntersectionObserver for performance:
```typescript
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return { ref, isVisible };
};
```

### FilterBar State (UI-only)
Filters will use local useState but won't actually filter content:
```typescript
const [activeFilters, setActiveFilters] = useState<string[]>([]);
const [sortBy, setSortBy] = useState('newest');
const [searchQuery, setSearchQuery] = useState('');
// These control UI state but don't filter the actual project list
```

### Contact Form (UI-only)
Form shows "Takk for meldingen!" toast/message on submit without sending:
```typescript
const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  // No actual API call
};
```

---

## Files to Create/Modify

### New Files (24)
- `src/content/projects.ts`
- `src/components/layout/Navbar.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/ProjectCard.tsx` (new version)
- `src/components/ui/ProjectGrid.tsx`
- `src/components/ui/TagPill.tsx`
- `src/components/ui/FilterBar.tsx`
- `src/components/ui/NextProject.tsx`
- `src/components/ui/ImageWithFallback.tsx`
- `src/components/ui/GlowBackground.tsx`
- `src/components/ui/ContactForm.tsx`
- `src/components/project/CaseHero.tsx`
- `src/components/project/CaseSidebar.tsx`
- `src/hooks/useScrollReveal.ts`
- `src/pages/Home.tsx` (replaces Index)
- `src/pages/Work.tsx`
- `src/pages/work/SortingGuide.tsx`
- `src/pages/work/SortingGuidePrototype.tsx`
- `src/pages/work/SortingGuideGigamap.tsx`
- `src/pages/work/Avfallsportalen.tsx`
- `src/pages/work/Headset.tsx`
- `src/pages/work/Seaweed.tsx`
- `src/pages/work/Crimpblock.tsx`
- `src/pages/Contact.tsx`

### Modified Files (5)
- `tailwind.config.ts`
- `src/index.css`
- `src/App.tsx`
- `src/components/Layout.tsx`
- `src/components/Footer.tsx`

### Deprecated Files (can be removed after)
- `src/pages/Index.tsx`
- `src/pages/Projects.tsx`
- `src/pages/ProjectDetail.tsx`
- `src/pages/SortingGuideCase.tsx`
- `src/pages/HeadsetCase.tsx`
- `src/data/projects.ts`
- `src/components/ProjectCard.tsx` (old version)

---

## Deliverables

After implementation, the portfolio will have:
- Complete navigation with active states
- 5 project cards with hover animations
- Full case study template applied to all projects
- Sorting Guide with prototype and gigamap subpages
- Crimpblock with prominent CTA to BS Climbing
- UI-only filters, search, and contact form
- Subtle ambient glow background effect
- Scroll reveal animations throughout
- Responsive design (mobile-first)
- Placeholder image system ready for real content

