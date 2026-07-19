# Eglanto — Jiya Jewelers

Ethical luxury jewelry marketing site built with Next.js (App Router), React, and Tailwind CSS. Plain JavaScript — no TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
  app/
    layout.js       # Root layout — renders Navbar + Footer on every page
    page.js          # Home page, composed from section components
    globals.css
  components/
    Navbar.js        # Shared site header
    Footer.js         # Shared site footer
    Icons.js          # Inline SVG icon set
    LuxuryEffects.js  # Scroll/hover animation primitives (reveal, parallax, tilt, etc.)
    sections/         # Home page sections (Hero, StatsBanner, JewelleryCollection, ...)
public/
  image/              # Referenced local images
  Video/               # Referenced local video
```

## Adding a New Page

Because `Navbar` and `Footer` live in `src/app/layout.js`, any new route you add under `src/app/` (e.g. `src/app/collections/page.js`) automatically gets the same header and footer — just export a default component with your page content.

## Notes

- All unused boilerplate (default Next.js/Vercel SVGs, unreferenced stock images/videos, an unused design-switcher component, and unused icon/animation exports) was removed during cleanup.
