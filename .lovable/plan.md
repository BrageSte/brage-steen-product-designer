

# Avfallsportalen Enhancement Plan

## Summary

Add two new tabs to the interactive demo: **Sammenlign (Compare)** for municipality comparison and **Dashboard** for statistics overview. Also change the project info sidebar to not be sticky, allowing full-width content viewing when scrolling.

---

## Changes Overview

### 1. Remove Sticky Behavior from CaseSidebar

**File**: `src/components/project/CaseSidebar.tsx`

**Change**: Remove the `sticky top-24` classes from the desktop sidebar, making it scroll with the page content instead of staying fixed.

**Before**:
```tsx
<aside className={`hidden lg:block sticky top-24 self-start ${className}`}>
```

**After**:
```tsx
<aside className={`hidden lg:block ${className}`}>
```

---

### 2. Update Avfallsportalen Page Layout

**File**: `src/pages/work/Avfallsportalen.tsx`

**Changes**:
- Remove the two-column grid layout that reserves space for the sidebar
- Move project info to top of page (not sticky)
- Allow the interactive demo to use full width

**Current layout**: `grid lg:grid-cols-[1fr_280px]`
**New layout**: Single column, full-width content

---

### 3. Expand AvfallsportalenDemo with Two New Tabs

**File**: `src/pages/work/avfallsportalen/AvfallsportalenDemo.tsx`

Add two new tabs to the existing demo:

#### Tab Navigation (4 tabs total):
1. Avfallsreisen (existing)
2. Quiz (existing)  
3. Sammenlign (NEW)
4. Dashboard (NEW)

---

### 4. Sammenlign (Compare) Tab Implementation

**Features**:
- Two dropdown selectors for municipalities (Oslo, Bergen, Trondheim, Stavanger, Kristiansand, Tromso, Drammen)
- Side-by-side comparison cards showing:
  - System type
  - Sorting efficiency
  - Population
  - Recycling rate
  - Incineration rate
  - Plastic recovered
  - Food waste recovered
- Category analysis showing winner in each category
- Summary with scores and verdict

**Data structure** (from HTML source):
```typescript
const kommuneData = {
  oslo: { name: 'Oslo', system: 'Optibag', efficiency: '19%', population: '697 000', recycling: '35%', incineration: '58%', plastic: '8%', food: '12%' },
  bergen: { name: 'Bergen', system: 'Hentesystem', efficiency: '34%', population: '286 000', recycling: '42%', incineration: '51%', plastic: '15%', food: '18%' },
  trondheim: { name: 'Trondheim', system: 'Sentralisert', efficiency: '86%', population: '210 000', recycling: '55%', incineration: '40%', plastic: '42%', food: '45%' },
  stavanger: { name: 'Stavanger', system: 'Hentesystem', efficiency: '34%', population: '144 000', recycling: '44%', incineration: '49%', plastic: '18%', food: '20%' },
  kristiansand: { name: 'Kristiansand', system: 'Bringesystem', efficiency: '31%', population: '113 000', recycling: '38%', incineration: '55%', plastic: '12%', food: '15%' },
  tromso: { name: 'Tromsø', system: 'Hentesystem', efficiency: '34%', population: '77 000', recycling: '40%', incineration: '52%', plastic: '14%', food: '16%' },
  drammen: { name: 'Drammen', system: 'Sentralisert', efficiency: '86%', population: '101 000', recycling: '52%', incineration: '43%', plastic: '38%', food: '42%' }
};
```

---

### 5. Dashboard Tab Implementation

**Features**:
- 4 key stat cards (clickable for more detail):
  - 739 kg - Avfall per person/ar
  - 39% - Til materialgjenvinning
  - 54.5% - Til forbrenning
  - 65% - EU-mal 2035
- Bar chart: Sorteringseffektivitet per system
- Pie legend: Feilsortert i restavfall (Oslo)
- Expandable detail panels for each stat showing:
  - Key facts
  - Distribution data
  - Comparisons with other countries
  - Historical trends

---

## Technical Implementation

### Component Structure

```text
AvfallsportalenDemo.tsx
  - Tab navigation (4 tabs)
  - Journey section (existing)
  - Quiz section (existing)
  - CompareSection (new)
  - DashboardSection (new)
```

### State Management

```typescript
const [activeTab, setActiveTab] = useState<"journey" | "quiz" | "compare" | "dashboard">("journey");
const [kommune1, setKommune1] = useState("oslo");
const [kommune2, setKommune2] = useState("trondheim");
const [activeDetail, setActiveDetail] = useState<string | null>(null);
```

### Styling Approach

- Use existing Tailwind classes for consistency
- Cards with hover effects matching existing design
- Green/red color coding for winner/loser comparisons
- Responsive grid layouts that collapse on mobile

---

## Files to Modify

1. **`src/components/project/CaseSidebar.tsx`**
   - Remove sticky positioning

2. **`src/pages/work/Avfallsportalen.tsx`**
   - Change grid layout to single column
   - Move CaseSidebar to top of content (not in grid)
   - Allow full-width for interactive demo

3. **`src/pages/work/avfallsportalen/AvfallsportalenDemo.tsx`**
   - Add two new tabs to navigation
   - Implement CompareSection component
   - Implement DashboardSection component
   - Add kommune comparison data and logic
   - Add dashboard statistics data and expandable panels

---

## Visual Comparison

### Before (Current Layout):
```text
+---------------------------+-------+
| Hero                              |
+---------------------------+-------+
| Content               | Sidebar   |
| (constrained)         | (sticky)  |
|                       |           |
| Interactive Demo      |           |
| (narrow)              |           |
+---------------------------+-------+
```

### After (New Layout):
```text
+----------------------------------+
| Hero                             |
+----------------------------------+
| Project Info (top, not sticky)   |
+----------------------------------+
| Content (full width)             |
|                                  |
| Interactive Demo (full width)    |
| [Reisen] [Quiz] [Sammenlign] [Dashboard]
|                                  |
+----------------------------------+
```

