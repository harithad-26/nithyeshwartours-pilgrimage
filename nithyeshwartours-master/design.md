```markdown
# Design System Document: The Sacred Journey

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Sanctuary"**
This design system moves beyond the transactional nature of travel sites to create an editorial, immersive experience. It is designed to feel like a high-end coffee table book—intentional, quiet, and deeply respectful of the pilgrimage subject matter. 

We break the "template" look by rejecting rigid grids in favor of **intentional asymmetry** and **tonal layering**. Elements should feel like they are floating in a vast, calm space, using overlapping typography and imagery to create a sense of three-dimensional depth and spiritual journeying.

---

## 2. Colors: Depth and Divine Radiance
The palette is rooted in the "Deep Navy" of the night sky and the "Metallic Gold" of sacred artifacts. We use Material Design tokens to manage these with surgical precision.

### Color Tokens
- **Primary (`#000613`):** The "Midnight" base. Used for the most critical text and deep backgrounds.
- **Primary Container (`#001f3f`):** The "Deep Navy" used for hero sections and primary brand blocks.
- **Secondary (`#735c00`):** The "Burnished Gold" used for sophisticated callouts.
- **Secondary Container (`#fed65b`):** A brighter gold reserved for highlights and active states.
- **Surface (`#faf9f8`):** An "Off-White Parchment" that provides a warmer, more premium feel than pure white.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Sectioning must be achieved through:
1. **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2. **Negative Space:** Using large blocks of whitespace to dictate the end of a thought.

### The "Glass & Gold" Rule
To elevate the UI, use `surface-container-lowest` with a 60-80% opacity and a `backdrop-blur` (12px-20px) for navigation bars and floating cards. This "Glassmorphism" ensures the imagery—the heart of the pilgrimage—is never fully obscured.

---

## 3. Typography: Editorial Authority
We pair a meditative Serif with a modern, high-legibility Sans-Serif to create a dialogue between tradition and modernity.

- **Display & Headlines (Noto Serif):** These are your "Mantra" moments. Use `display-lg` for hero titles with increased letter spacing (-0.02em) to evoke a sense of premium authority.
- **Body & Titles (Manrope):** A geometric sans-serif that provides a clean, "quiet" counterpoint to the decorative headings. 
- **The Hierarchy Strategy:** Always lead with a Serif headline to set the emotional tone, followed by a wide-margined Sans-Serif body for clarity. Use `label-md` in all-caps with 0.1em tracking for category tags to mimic luxury fashion branding.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "software-like" for a luxury travel brand. We use **Tonal Layering** to create hierarchy.

### The Layering Principle
- **Base Layer:** `surface` (#faf9f8)
- **Mid Layer (Sectioning):** `surface-container-low` (#f4f3f2)
- **Top Layer (Interactive Cards):** `surface-container-lowest` (#ffffff)
By stacking these subtle shifts, we create a "Paper on Paper" effect that feels tactile and expensive.

### Ambient Shadows & Ghost Borders
- **Floating Elements:** Use a shadow tinted with the primary color: `rgba(0, 31, 63, 0.06)` with a 30px blur and 10px Y-offset.
- **The "Ghost Border":** Where a container needs definition against a similar background, use `outline-variant` at 15% opacity. This creates a whisper of an edge rather than a hard cage.
- **Gold Accents:** Use the `secondary` token for 2px-thick "accent lines" that only appear on one side of a card (e.g., the left or top) to suggest premium gold-leafing.

---

## 5. Components

### Buttons (The "Sacred Call")
- **Primary:** Solid `primary-container` (#001F3F) with `on-primary` text. Use `md` (0.375rem) roundedness.
- **Secondary (The Gold Standard):** A "Ghost" style button with a `secondary` (#D4AF37) 1px border and `secondary` text.
- **Interactive State:** On hover, the primary button should transition to a subtle gradient from `primary-container` to `primary`.

### Cards (The "Pilgrimage Portals")
- **Visuals:** Cards must never use dividers. Instead, use a 40px padding (`spacing-8`) to separate the image, title, and description.
- **Overlays:** Images within cards should use a 20% `primary` color overlay to ensure typography remains legible and the mood stays "Deep Navy."

### Input Fields
- **Style:** Minimalist. Only a bottom border using `outline-variant`. On focus, the border transitions to `secondary` (Gold).
- **Labels:** Use `label-md` floating above the line, never inside the box.

### Featured Itinerary List
- **Layout:** Avoid standard vertical lists. Use an asymmetrical "staggered" layout where the image sits slightly offset from the text block, creating a layered, collage-like feel.

---

## 6. Do's and Don'ts

### Do:
- **Use "Breathing Room":** If you think there is enough whitespace, add 20% more.
- **Layer Imagery:** Use high-quality pilgrimage photography with "Soft Light" or "Multiply" gold gradients to tie photos into the brand.
- **Micro-interactions:** Use slow, graceful fades (300ms+) rather than "snappy" transitions to maintain the calm atmosphere.

### Don't:
- **No Heavy Shadows:** Never use pure black shadows; they feel "dirty" against the navy/gold palette.
- **No Default Grids:** Avoid placing three cards in a perfectly centered row. Try two cards offset, or one large and two small.
- **No High-Contrast Borders:** Never use a 100% opaque border to separate content. Use the Tonal Layering Principle instead.
- **No Pure White:** Avoid `#ffffff` for large backgrounds; it is too clinical. Always default to the `surface` parchment tone.