# Cornerstone Marketing Studio

Website for Cornerstone Marketing Studio (Pty) Ltd — landing + contact page.
Built on a stripped copy of the Wanoura template (Next.js + Tailwind).

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`app/`**: Next.js App Router pages and layouts (`/` landing, `/contact`).
- **`components/`**: React components.
  - `components/work/` — page sections (Hero, Services, Why Choose, Closing CTA, Footer).
  - `components/decorative/` — the keystone decorative device system (see below).
  - `components/layout/` — Navbar.
- **`lib/`**: Utility functions, hooks, and configuration.
- **`public/brand/`**: Logo suite, favicon, and app-icon SVGs.
- **`public/fonts/`**: Self-hosted Fraunces + Inter (POPIA — no Google Fonts CDN).

## Brand & content source of truth

Canonical project context, approved copy, and brand tokens live at
`~/Documents/Claude/maruonline/07_CLIENTS/Cornerstone Marketing Studio/CONTEXT.md`
(local, outside this repo). Read it before making content or design changes.

## Decorative logo-element system

Two devices built from the approved keystone mark
(`components/decorative/KeystoneGlyph.tsx` — single source of geometry):

- **Device 1 — `WatermarkMark.tsx`**: oversized watermark behind the hero copy.
- **Device 2 — `GhostedPanel.tsx`**: full-bleed Ink panel with a ghosted mark,
  used in place of a photo slot (currently the Event Management service block).

Spec: `Brief — Decorative Logo System.md` in the project context folder above.

## Open items before go-live

- Real contact details (email/phone/WhatsApp/address) — see `lib/contact.ts`.
- Confirm the "sector experience" claim in the Why Choose section is accurate.
- Contact form (`/api/contact`) currently only logs submissions — needs an
  email/CRM integration before launch.
