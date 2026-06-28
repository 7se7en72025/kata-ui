# Kata UI â€” Status & Documentation

> Component library built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn registry.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + inline styles
- **Registry:** shadcn CLI (`npm run registry:build`)
- **Font:** Inter (body) + JetBrains Mono (code) via `next/font/google`
- **Theme:** Dark/Light via `data-theme` attribute on `<html>`

---

## Repository Structure

```
kata-ui/
â”œâ”€â”€ app/                          # Next.js App Router pages
â”‚   â”œâ”€â”€ layout.tsx                # Root layout â€” Inter + JetBrains Mono fonts, data-theme="dark"
â”‚   â”œâ”€â”€ page.tsx                  # Homepage â€” Hero, ShrineCards showcase, SideFrame, Navbar, Footer
â”‚   â”œâ”€â”€ globals.css               # Global styles â€” CSS variables, theme tokens, animations
â”‚   â”œâ”€â”€ not-found.tsx             # Custom 404 page
â”‚   â”œâ”€â”€ error.tsx                 # Error boundary
â”‚   â”œâ”€â”€ api/r/[slug]/route.ts     # Registry API endpoint (serves component JSON)
â”‚   â””â”€â”€ docs/
â”‚       â”œâ”€â”€ layout.tsx            # Docs layout â€” Navbar + ResizablePanels (sidebar, content, TOC)
â”‚       â”œâ”€â”€ page.tsx              # Docs home â€” Liquid Metal component page
â”‚       â”œâ”€â”€ installation/
â”‚       â”‚   â”œâ”€â”€ nextjs/page.tsx   # Install Next.js guide
â”‚       â”‚   â”œâ”€â”€ tailwind/page.tsx # Install Tailwind guide
â”‚       â”‚   â”œâ”€â”€ utilities/page.tsx# Install utilities guide
â”‚       â”‚   â””â”€â”€ cli/page.tsx      # CLI installation guide
â”‚       â””â”€â”€ layout/shrine-cards/
â”‚           â””â”€â”€ page.tsx          # Shrine Cards docs â€” Installation, Usage, Preview
â”‚
â”œâ”€â”€ components/                   # React components
â”‚   â”œâ”€â”€ hero.tsx                  # Hero section â€” title, subtitle, CTA buttons
â”‚   â”œâ”€â”€ navbar.tsx                # Fixed navbar â€” logo, search, theme toggle, docs button
â”‚   â”œâ”€â”€ side-frame.tsx            # Fixed ruler side frames (left + right edges)
â”‚   â”œâ”€â”€ footer.tsx                # Footer â€” logo, copyright
â”‚   â”œâ”€â”€ animated-button.tsx       # CTA button â€” CSS shine mask sweep animation
â”‚   â”œâ”€â”€ glow-button.tsx           # CTA button â€” inverted shine sweep (dark bg)
â”‚   â”œâ”€â”€ liquid-metal.tsx          # Liquid Metal badge â€” metallic shimmer effect
â”‚   â”œâ”€â”€ animated-rays.tsx         # Aurora/rays background animation
â”‚   â”œâ”€â”€ resizable-panels.tsx      # 3-panel resizable layout (sidebar, content, TOC)
â”‚   â”œâ”€â”€ docs-sidebar.tsx          # Docs left navigation â€” collapsible groups
â”‚   â”œâ”€â”€ docs-toc.tsx              # Docs right table of contents
â”‚   â””â”€â”€ ui/
â”‚       â””â”€â”€ shrine-cards.tsx      # ShrineCards â€” expandable card grid with SVG shapes
â”‚
â”œâ”€â”€ registry/                     # shadcn registry (auto-generated)
â”‚   â””â”€â”€ ui/                       # Built component files for distribution
â”‚
â”œâ”€â”€ public/                       # Static assets
â”‚   â”œâ”€â”€ shrine-cards/             # SVG card assets
â”‚   â”‚   â”œâ”€â”€ shrinecard1-7.svg     # Collapsed card SVGs (178Ã—629, embedded base64 images)
â”‚   â”‚   â””â”€â”€ shrinecardexpanded.svg# Expanded card SVG (405Ã—615, purple stroke, dark fill)
â”‚   â”œâ”€â”€ r/                        # Registry JSON files (built by shadcn)
â”‚   â”œâ”€â”€ favicon.svg               # Site favicon
â”‚   â”œâ”€â”€ KATAUILOGOWHITE.svg       # Logo (dark mode)
â”‚   â””â”€â”€ KATAUILOGOBLACK.svg       # Logo (light mode)
â”‚
â”œâ”€â”€ lib/
â”‚   â””â”€â”€ utils.ts                  # Utility functions (cn helper)
â”‚
â”œâ”€â”€ next.config.mjs               # Next.js config â€” image formats, security headers, caching
â”œâ”€â”€ tailwind.config.ts            # Tailwind config
â”œâ”€â”€ postcss.config.mjs            # PostCSS config
â”œâ”€â”€ tsconfig.json                 # TypeScript config
â”œâ”€â”€ package.json                  # Dependencies and scripts
â””â”€â”€ registry.json                 # shadcn registry manifest
```

---

## Pages

| Route                          | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `/`                            | Homepage â€” Hero, ShrineCards showcase, SideFrame |
| `/docs`                        | Docs home â€” Liquid Metal component page          |
| `/docs/installation/nextjs`    | Next.js installation guide                         |
| `/docs/installation/tailwind`  | Tailwind CSS installation guide                    |
| `/docs/installation/utilities` | Utilities installation guide                       |
| `/docs/installation/cli`       | CLI installation guide                             |
| `/docs/layout/shrine-cards`    | Shrine Cards â€” Installation, Usage, Preview      |

---

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run registry:build  # Build shadcn registry
```

---

## Registry

Components are registered via `shadcn build`. Registry files are in:

- `public/r/*.json` â€” Built registry JSON files
- `registry/ui/*.tsx` â€” Source component files for distribution

Install via CLI:

```bash
npx shadcn@latest add https://kata-ui-rho.vercel.app/r/shrine-cards.json
```

---

## Performance Optimizations Applied

| Optimization                            | Impact               |
| --------------------------------------- | -------------------- |
| Removed `framer-motion` from buttons    | -40KB bundle         |
| Replaced 3 `MutationObserver`s with CSS | Less JS execution    |
| `side-frame.tsx`: RAF throttling        | Smoother scroll      |
| `shrine-cards.tsx`: `React.memo`        | Fewer re-renders     |
| `shrine-cards.tsx`: `loading="lazy"`    | Faster initial load  |
| `next.config.mjs`: Security headers     | Better security      |
| `next.config.mjs`: Asset caching        | Faster repeat visits |
| `next.config.mjs`: AVIF/WebP images     | Smaller images       |
| Dynamic imports on homepage             | Code splitting       |
| Font `display: "swap"`                  | No FOIT              |

**Bundle size (homepage):**

- Page JS: 2.59 kB
- First Load JS: 90 kB

---

## Theme System

- Dark mode: `data-theme="dark"` (default)
- Light mode: `data-theme="light"`
- CSS variables defined in `globals.css`
- Toggle via triangular clip-path transition in navbar

---

## SVG Assets

### Collapsed Cards (`shrinecard1-7.svg`)

- Dimensions: 178Ã—629
- Embedded base64 images (circuit patterns, icons)
- Black stroke at 0.25 opacity
- Gaussian blur filter

### Expanded Card (`shrinecardexpanded.svg`)

- Dimensions: 405Ã—615
- Purple stroke `#BC6DFF` at 3px
- Dark gradient fill (0.01 opacity)
- Inner glow filter

---

## License

MIT Licensed â€” Open Source 2026
