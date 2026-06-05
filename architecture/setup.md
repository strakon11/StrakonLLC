# 🏗️ Architecture Setup & Component Guidelines

## A.N.T. 3-Layer Build Outline for Astro Project

### Layer 1: Technical SOPs
- **File Constraints**: Do not start building complex component logic without first documenting the expected state and shapes here.
- **Styling Architecture**: Tailwind v4 (`@tailwindcss/vite`) via `global.css`.
- **Animation Architecture**: GSAP for timeline animations. Lenis for smooth scroll.

### SOP: Global Cursor & Mouse Effects
1. Base configuration is stored in `Layout.astro`.
2. Mobile constraint: All GSAP `quickTo` cursor listeners are wrapped in a media query check (`window.matchMedia("(hover: hover) and (pointer: fine)").matches`) to disable mouse-tracking on mobile, saving battery/CPU.
3. Interaction scaling: `mouseenter`/`mouseleave` event listeners target `a`, `button`, input fields.

### SOP: Dynamic Self-Healing 404
- If an image fails to load, `onerror` replaces the element with a fallback gradient (`bg-gradient-to-br from-[#00F5FF] to-[#7C3AED]`).

### Colors & Typography
- Background: `#0A0A0A` (Pitch Black)
- Accents: `#00F5FF` (Electric Cyan)
- Text: `#FFFFFF` (Crisp White)
- Borders: `#5D6D7E` (Space Grey)
- Glows: `#7C3AED` (Deep Violet)
