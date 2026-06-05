# 📜 Gemini Project Constitution (gemini.md)

*This document serves as the project's source of truth for architecture, schemas, and rules.*

## 💎 Project Identity
- **Name**: Ultra-Premium Web Design & Marketing Agency
- **Pilot**: Antigravity (System Pilot)
- **Protocol**: B.L.A.S.T. Protocol
- **Architecture**: A.N.T. (3-Layer Build)

## 📦 Data Schema (Payload Shape)
*Coding begins only after the "Payload" shape is confirmed here.*

```json
{
  "status": "blueprint_defined",
  "input_shapes": {
    "service_entry": {
      "id": "string",
      "title": "string",
      "description": "string",
      "icon": "string"
    },
    "portfolio_entry": {
      "id": "string",
      "client_name": "string",
      "project_type": "string",
      "image_url": "string_or_null",
      "description": "string"
    }
  },
  "payload": {
    "contact_submission": {
      "name": "string",
      "email": "string",
      "company": "string",
      "message": "string",
      "timestamp": "iso_date"
    }
  }
}
```

## 🛠️ Behavioral Rules & Invariants
- **Rule 1**: No coding until "Payload" shape is confirmed in `gemini.md`.
- **Rule 2**: Layers must be strictly separated.
- **Rule 3**: SOPs in `architecture/` must be updated before code fixes.
- **Rule 4 (Tone)**: Ultra-professional, premium, luxury tech (100% English).
- **Rule 5 (Design)**: Base background (#0A0A0A), CTAs/Accents (#00F5FF), Text (#FFFFFF), Borders (#5D6D7E), Subtle Glows (#7C3AED). ZERO generic UI components.
- **Rule 6 (UI/UX)**: Slow-moving blurred spheres (blur-[100px], Cyan/Violet). Global Custom Cursor in Layout.astro (mix-blend-mode: difference, scaling on hover).
- **Rule 7 (Resilience)**: "Self-Healing Protocol 404" (fallback gradients for missing images). Disable mouse-tracking GSAP on mobile.

## 🛰️ Maintenance Log
*Project is complete when the payload is in its final cloud destination.*
- [ ] Initial Deployment: Pending
