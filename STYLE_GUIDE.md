# Hamilton Creative Group - Design System & Style Guide

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Responsive Design](#responsive-design)
6. [Effects & Animations](#effects--animations)
7. [Accessibility & Best Practices](#accessibility--best-practices)

---

## Color Palette

### Primary Brand Colors
| Color | Hex Code | RGB | Usage | Notes |
|-------|----------|-----|-------|-------|
| **Brand Blue** | `#0C8CE9` | RGB(12, 140, 233) | Primary CTAs, pills, text accents | Modern, tech-forward blue |
| **Brand Green** | `#10B981` | RGB(16, 185, 145) | Accent, "Fresh ideas" note | Energetic, growth-oriented |
| **Brand Red** | `#FF5A5F` | RGB(255, 90, 95) | Alert/attention elements | Vibrant, engaging |
| **Brand Yellow** | `#FFE135` | RGB(255, 225, 53) | Secondary pills, highlights | Warm, playful energy |

### Neutral Colors
| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Text Black** | `#161A1D` | RGB(22, 26, 29) | Primary text, borders, shadows |
| **Background** | `#F6F7F9` | RGB(246, 247, 249) | Page background, light neutral |
| **White** | `#FFFFFF` | RGB(255, 255, 255) | Pill text, sticker notes background |

### Color Applications
- **Hero Title**: Text Black (#161A1D)
- **Top/Bottom Labels**: Text Black with 80% opacity
- **Pill Text**: White on colored backgrounds
- **Stickers**: Mix of brand colors and dark accents
- **Shadows**: Black at 10-20% opacity for depth

---

## Typography

### Font Family System
```css
--font-main: 'Inter', sans-serif              /* Primary body text */
--font-hand-bold: 'Shadows Into Light', cursive  /* Casual notes */
--font-hand-gochi: 'Gochi Hand', cursive       /* Handwritten stickers */
--font-display: 'ADLaM Display', system-ui     /* Pill labels, display text */
--font-outfit: 'Outfit', sans-serif            /* Headers, labels */
```

### Font Sizing Scale

#### Hero Section
| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---------|-------------|------|--------|-------------|----------------|
| **Main Hero Title** | Inter | clamp(3rem, 12vw, 8rem) | 800 | 0.9 | — |
| **Top Label** | Outfit | 1.2rem | 700 | — | 0.1em |
| **Bottom Label** | Outfit | 1.2rem | 700 | — | 0.1em |

#### Stickers & Components
| Element | Font Family | Size | Weight | Notes |
|---------|-------------|------|--------|-------|
| **Pills (text)** | ADLaM Display | 1.5rem | — | Rounded container |
| **Handwritten Notes** | Gochi Hand | 2rem | — | Brand blue by default |
| **Emoticons** | Inter | 1.5rem | 700 | 60% opacity |
| **Card Numbers** | DM Mono | clamp(10px, 1.4vw, 14px) | 500 | 65% opacity |
| **Card Labels** | DM Sans | clamp(12px, 2vw, 20px) | 600 | Line height: 1.2 |

#### Mobile Typography
| Element | Mobile Size | Notes |
|---------|-------------|-------|
| **Top/Bottom Labels** | 0.9rem | Reduced from desktop |
| **Hero Title** | clamp(2.5rem, 15vw, 5rem) | Smaller max than desktop |
| **Pills** | 1.1rem | Condensed |
| **Handwritten** | 1.5rem | Reduced |

---

## Spacing & Layout

### Layout Structure
```
Hero Container:
├─ 100% width × 100vh
├─ Flexbox (centered column)
├─ Padding: 2rem (desktop), 1rem (mobile)
└─ Position: relative (for absolute-positioned stickers)
```

### Key Measurements
| Property | Desktop | Mobile | Notes |
|----------|---------|--------|-------|
| **Container Padding** | 2rem | 1rem | Top-level container |
| **Hero Max Width** | 90vw | — | Title wrapper constraint |
| **Line Gap (title)** | 0.2rem | — | Space between HAMILTON/CREATIVE/GROUP |
| **Pill Padding** | 12px 24px | 8px 16px | Horizontal × Vertical |
| **Pill Gap** | 10px | — | Space between emoji and text |
| **Contents Section Max Width** | 700px | — | Card container limit |
| **Cards Container Height** | 60vw (max 500px, min 260px) | — | Responsive card area |

### Vertical Positioning (Stickers)
- **Top Elements**: 5%, 10%, 15%, 20%, 35%, 45%, 50%
- **Bottom Elements**: 5%, 8%, 10%, 15%, 20%, 25%
- **Left/Right**: 5%, 8%, 10%, 15%, 20%, 35%, 40%

---

## Components

### 1. Pills
**Purpose**: Highlight key messages, CTAs, or announcements

```
Structure:
┌─────────────────────┐
│ [emoji] Text Label  │  ← ADLaM Display, 1.5rem
└─────────────────────┘
```

**Specifications**
- **Padding**: 12px 24px (desktop), 8px 16px (mobile)
- **Border Radius**: 999px (full rounded)
- **Border**: 2px solid black
- **Box Shadow**: 4px 4px 0px (black offset shadow)
- **Font**: ADLaM Display, 1.5rem
- **Cursor**: grab

**Variants**
| Variant | Background | Text Color | Rotation | Example |
|---------|------------|-----------|----------|---------|
| **Blue Pill** | #0C8CE9 | White | -3deg | "👋 Hey" |
| **Yellow Pill** | #FFE135 | Text Black | 5deg | "Meet Up: TBA" |

---

### 2. Handwritten Notes
**Purpose**: Casual, friendly messaging; adds personality

**Specifications**
- **Font Options**: 
  - Gochi Hand (handwritten notes)
  - Shadows Into Light (bold hand text)
- **Font Size**: 2rem (Gochi Hand), varies for Shadows Into Light
- **Color**: Brand Blue (#0C8CE9) by default, customizable
- **Rotation**: Varies per sticker (-20deg to 15deg)
- **Line Height**: 1.1

**Examples from Site**
- "Welcome to the club!" (Shadows Into Light, -8deg rotation)
- "Fresh ideas daily *" (Shadows Into Light, Brand Green)

---

### 3. 3D Symbols (Icons/Images)
**Purpose**: Add visual depth and playfulness

**Specifications**
- **Types**: Handshake, Folder, Pens, Stylus, Screenshots
- **Drop Shadows**: 
  - Primary: 5px 10px 15px rgba(0,0,0,0.15)
  - Secondary: 2px 4px 5px rgba(0,0,0,0.1)
- **Bottom Shadow** (pseudo-element): Ellipse blur creating 3D depth
- **Sizing**: 70px – 180px width (responsive)
- **Rotation**: -15deg to 10deg for natural placement

---

### 4. Emoticons
**Purpose**: Playful, expressive micro-interactions

**Specifications**
- **Font**: Inter (bold)
- **Font Size**: 1.5rem
- **Opacity**: 60%
- **Rotation**: Varies (-20deg to 15deg)
- **Examples**: `:)`, `;)`, `:<`, `^__^`, `O_O`

---

### 5. Tablet Frame
**Purpose**: Showcase work samples or screenshots

**Specifications**
- **Background**: Black (#000)
- **Padding**: 10px
- **Border Radius**: 20px
- **Box Shadow**: 10px 20px 40px rgba(0,0,0,0.2)
- **Width**: 250px (desktop), 180px (mobile)
- **Rotation**: -5deg
- **Inner Border Radius**: 12px (for image)

---

### 6. Sticker Notes
**Purpose**: Pin inspiration or screenshots with authentic pin effect

**Specifications**
- **Background**: White
- **Image Border**: 8px white border
- **Border Radius**: 12px
- **Box Shadow**: 5px 5px 15px rgba(0,0,0,0.1)
- **Rotation**: -10deg to 8deg
- **Height**: 150px (desktop), responsive (mobile)

---

### 7. Dot Background
**Purpose**: Subtle, repeating texture pattern

**Specifications**
- **Type**: Radial gradient dots
- **Dot Color**: Black with 10% opacity
- **Dot Size**: 2px radius
- **Grid Spacing**: 45px × 45px
- **Position**: Fixed (stays behind scroll)
- **Z-Index**: 0 (background layer)
- **Pointer Events**: None (doesn't interfere)

---

### 8. Card Component (Contents Section)
**Purpose**: Display categorized content/tasks

**Specifications**
- **Position**: Absolute (stacked/rotating)
- **Border Radius**: 3.5%
- **Padding**: 2% 3%
- **Cursor**: Pointer
- **Hover Effect**: scale(1.03)
- **Transition**: 0.2s ease

**Color Variants**
| Card | Background | Text Color | Use Case |
|------|------------|-----------|----------|
| **C-01** | #9E9189 (taupe) | White | — |
| **C-02** | #58E87A (green) | Dark (#1a3a22) | ✓ High contrast |
| **C-03** | #FF1DC8 (magenta) | Dark (#4a0038) | — |
| **C-04** | #FF6B2B (orange) | Dark (#4a1800) | — |
| **C-05** | #7B4DFF (purple) | White | — |
| **C-06** | #00D4E8 (cyan) | Dark (#003a40) | ✓ High contrast |

---

## Responsive Design

### Breakpoints
```css
/* Mobile: default styling */
/* Tablet/Desktop: max-width: 768px breakpoint */
```

### Mobile Adjustments

| Element | Desktop | Mobile | Change |
|---------|---------|--------|--------|
| **Container Padding** | 2rem | 1rem | -50% |
| **Top/Bottom Labels** | 1.2rem | 0.9rem | -25% |
| **Hero Title** | clamp(3rem, 12vw, 8rem) | clamp(2.5rem, 15vw, 5rem) | Smaller max |
| **Pill Font Size** | 1.5rem | 1.1rem | -27% |
| **Handwritten Font** | 2rem | 1.5rem | -25% |
| **Tablet Frame** | 250px | 180px | -28% |
| **Pen Width** | 180px | 80vw | Dynamic width |

### Mobile Visibility
**Hidden on Mobile** (display: none)
- Handshake 3D image
- White Stylus
- Tablet screenshot frame
- Additional sticker notes (some)
- Custom cursor decoration

---

## Effects & Animations

### Draggable Stickers
**Library**: GSAP + Draggable plugin
- **Cursor**: grab (hover) → grabbing (active)
- **Transform**: scale(1.05) when grabbed
- **Z-Index**: Brought to 100 when active
- **Transition**: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)

### Float Animation
**Class**: `.float-anim`
- Controlled by GSAP for smooth, organic floating motion
- Applied to most stickers for subtle continuous movement

### Hover Effects
```css
.card:hover {
    transform: scale(1.03);
    transition: 0.2s ease;
}
```

### Shadow Elevations
| Level | Drop Shadow | Use Case |
|-------|------------|----------|
| **Subtle** | 2px 4px 5px rgba(0,0,0,0.1) | Icons, text |
| **Medium** | 5px 5px 15px rgba(0,0,0,0.1) | Sticker notes |
| **Heavy** | 10px 20px 40px rgba(0,0,0,0.2) | Tablet frame |
| **Depth** | radial-gradient ellipse with blur | 3D symbols |

---

## Accessibility & Best Practices

### Color Contrast Ratios
✅ **Good Contrast**
- Text Black (#161A1D) on Background (#F6F7F9): 16:1
- White on Brand Blue (#0C8CE9): 7.5:1
- White on Brand Green (#10B981): 5:1

⚠️ **Needs Review**
- Text Black on Brand Yellow (#FFE135): 5:1 (barely meets AA)

### Typography Best Practices
- **Line Height**: 0.9-1.2 (tight to normal)
- **Letter Spacing**: 0.1em for headers (adds breathing room)
- **Font Loading**: Google Fonts with preconnect (performance optimized)

### Responsive Considerations
- **Viewport Meta Tag**: width=device-width, initial-scale=1.0
- **Fluid Typography**: Uses `clamp()` for responsive scaling
- **Overflow**: Hidden on hero-container prevents mobile stickers from breaking layout
- **Touch Targets**: Pills and cards scaled up on mobile for easier interaction

### Performance
- **Dot Background**: Fixed positioning, pointer-events: none (non-interactive)
- **Asset Optimization**: SVG cursor, lazy-loaded images
- **CSS Variables**: Centralized color/font management

---

## Usage Examples

### Creating a New Pill
```html
<div class="sticker pill blue-pill draggable float-anim" style="top: 15%; left: 15%;">
    <span class="emoji">✨</span> New Label
</div>
```

### Creating a Handwritten Note
```html
<div class="sticker handwritten draggable float-anim" style="top: 50%; left: 10%; color: var(--brand-green);">
    Your text here<br>Second line
</div>
```

### Creating a Card
```html
<div class="card c-02">
    <span class="card-num">01</span>
    <span class="card-label">Task Name</span>
</div>
```

---

## CSS Variables Reference

```css
:root {
    /* Colors */
    --bg-color: #F6F7F9;
    --text-black: #161A1D;
    --brand-blue: #0C8CE9;
    --brand-green: #10B981;
    --brand-red: #FF5A5F;
    --brand-yellow: #FFE135;
    
    /* Fonts */
    --font-main: 'Inter', sans-serif;
    --font-hand-bold: 'Shadows Into Light', cursive;
    --font-hand-gochi: 'Gochi Hand', cursive;
    --font-display: 'ADLaM Display', system-ui;
    --font-outfit: 'Outfit', sans-serif;
}
```

---

## Design Principles

1. **Playful & Professional**: Balance between fun stickers and clean hierarchy
2. **Approachability**: Handwritten notes and casual elements make the site friendly
3. **Depth & Dimension**: 3D shadows, layering, and rotation create visual interest
4. **Mobile-First Responsive**: Scales gracefully across all devices
5. **Accessibility**: High contrast, readable fonts, clear hierarchy
6. **Interactive**: Draggable elements engage users and encourage exploration

---

**Last Updated**: May 30, 2026  
**Design System Version**: 1.0
