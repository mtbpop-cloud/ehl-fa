# Design System Strategy: The Editorial Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

To serve a sophisticated 40s–50s demographic, we must move beyond the "app" aesthetic and toward a "luxury editorial" experience. This system rejects the rigid, boxy constraints of standard web templates in favor of **Organic Asymmetry** and **Tonal Depth**. We prioritize high-contrast serif typography for authority and "breathable" layouts that mimic the calm of a high-end salon. By utilizing layered surfaces and staggered content blocks, we guide the user through the reservation process with grace rather than urgency.

---

## 2. Colors: Tonal Sophistication
We move away from flat hex codes toward a functional hierarchy that favors soft transitions over harsh borders.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be achieved through background shifts (e.g., a `surface-container-low` section sitting on a `surface` background) or generous vertical padding (`spacing-16` or `spacing-20`). 

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
- **Base Layer:** `surface` (#fef8f5) for the main canvas.
- **Section Layer:** `surface-container` (#f2edea) for large content blocks.
- **Card Layer:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white for interactive elements.

### Signature Textures & Glass
- **The Glass Rule:** For floating headers or navigation overlays, use `surface` at 80% opacity with a `20px` backdrop-blur. This ensures the brand colors bleed through, creating an integrated, high-end feel.
- **The Signature Gradient:** Use a subtle linear gradient from `primary` (#331406) to `primary_container` (#4d2818) for primary CTAs. This adds a "weighted" professional polish that flat brown cannot achieve.

---

## 3. Typography: Editorial Authority
The interplay between the grounded **Noto Serif JP** and the modern **Inter** creates a "Modern Classic" tension.

- **Display & Headlines (Noto Serif JP):** These are our "editorial" voice. Use `display-lg` and `headline-md` for storytelling and service titles. The serif nature ensures maximum readability and a sense of "established trust" for the target demographic.
- **Body & Titles (Inter):** Used for functional data. The sans-serif clarity of `body-lg` (1rem) is the minimum standard to ensure accessibility for 40+ eyes. 
- **Hierarchy Tip:** Always pair a `headline-sm` in Noto Serif with a `label-md` in Inter (all caps, tracked out 5-10%) to create a sophisticated "Magazine Header" look.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "tech-heavy." We use **Tonal Layering** to create a sanctuary-like atmosphere.

- **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` section. The contrast is enough to define the shape without visual noise.
- **Ambient Shadows:** If a "Book Now" floating button requires a shadow, use a 15% opacity tint of `primary` (#331406) with a 32px blur. It should feel like a soft glow, not a dark smudge.
- **The Ghost Border Fallback:** If a border is required for input fields, use `outline-variant` (#d6c3bc) at **20% opacity**. 100% opaque borders are strictly forbidden as they clutter the visual field.

---

## 5. Components
Each component is designed for tactile ease, ensuring "fat-finger" friendliness for mobile users.

### Buttons: The Tactile CTA
- **Primary:** Gradient from `primary` to `primary_container`. Minimum height: `3.5rem` (`spacing-10`). Roundedness: `md` (0.375rem).
- **Secondary (Tertiary Role):** Text-only using `secondary` (#9a405d) with an underline that sits 4px below the baseline. Use for "View Gallery" or "Read More."

### Input Fields: Focused Simplicity
- **Style:** No bottom line or full box. Use a `surface-container-high` background with a `rounded-md` corner. 
- **Labels:** Always visible using `title-sm` in `on_surface_variant`. Never use placeholder text as a label replacement.

### Selection Chips (Stylists/Services)
- **State:** Unselected chips should be `surface-container-highest`. Selected chips transition to `primary` with `on_primary` text.
- **Size:** Large touch targets (`spacing-12` width minimum).

### Cards & Lists: The White Space Rule
- **Rule:** Forbid divider lines.
- **Execution:** Separate list items (like Stylist names or Timeslots) using `spacing-4` (1.4rem) of vertical white space. Use a `surface-container-low` background on hover/tap to indicate selection.

### Calendar/Date Picker
- **Contextual Component:** Avoid standard dropdowns. Use a large-format grid where dates are `surface-container-lowest` tiles on a `surface-container` background.

---

## 6. Do’s and Don’ts

### Do:
- **Use generous white space:** Space is a luxury. Use `spacing-16` (5.5rem) between major sections to let the design breathe.
- **Prioritize Contrast:** Ensure all body text (`on_surface`) maintains a 7:1 contrast ratio against `surface` colors to accommodate aging vision.
- **Asymmetric Imagery:** Offset images by `spacing-4` from the text alignment to create a custom, "non-templated" editorial feel.

### Don’t:
- **Don't use 100% Black:** Always use `on_background` (#1d1b1a) for text; it is softer on the eyes than pure #000000.
- **Don't use "App" Icons:** Avoid generic, thick-stroke icons. Use thin, "light" weight icons or, better yet, text-labels to maintain the sophisticated salon vibe.
- **Don't use harsh corners:** Use `rounded-lg` (0.5rem) for cards to keep the interface feeling "approachable" and "welcoming" rather than clinical.