# AGENTS.md — Kata UI

## Project Overview

Kata UI is a motion-driven React component library built with:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui registry format

## Commands

| Command                  | Purpose                       |
| ------------------------ | ----------------------------- |
| `npm run dev`            | Start dev server on port 3000 |
| `npm run build`          | Production build              |
| `npm run test`           | Run 45 unit tests (Vitest)    |
| `npm run test:e2e`       | Run Playwright E2E tests      |
| `npm run lint`           | ESLint check                  |
| `npm run typecheck`      | TypeScript type check         |
| `npm run format`         | Prettier format               |
| `npm run registry:build` | Build shadcn registry         |

## Architecture

### Component Structure

```
components/          # Main component source (Next.js app)
├── hero.tsx
├── navbar.tsx
├── glitch-text.tsx
├── glow-button.tsx
└── ...

registry/ui/         # shadcn-compatible registry (installable via CLI)
├── hero.tsx
├── navbar.tsx
├── glitch-text.tsx
└── utils.ts

lib/                 # Utility functions
├── utils.ts         # cn() helper (clsx + tailwind-merge)
└── env.ts          # Zod env validation

__tests__/           # Unit tests (mirrors components/ structure)
├── components/
├── a11y/
└── api/

e2e/                 # Playwright E2E tests
```

### Key Patterns

1. **shadcn Registry** — Components in `registry/ui/` are installable via `npx shadcn@latest add <component>`
2. **Utility Function** — All components use `cn()` from `lib/utils.ts` for class merging
3. **"use client"** — All interactive components use `"use client"` directive
4. **Theme Support** — Components use CSS variables and `data-theme` attribute
5. **Testing** — Each component has a `*.test.tsx` file in `__tests__/components/`

### Installing a New Component

```bash
npx shadcn@latest add https://kata-ui.vercel.app/r/<component-name>
```

### Adding a New Component

1. Create component in `components/<name>.tsx`
2. Add registry entry in `registry/ui/<name>.tsx`
3. Update `registry.json` with component metadata
4. Add test in `__tests__/components/<name>.test.tsx`
5. Run `npm run test` to verify
6. Run `npm run registry:build` to rebuild registry

## Code Style

- **TypeScript** — Strict mode, no `any` types
- **Tailwind** — Utility classes, no inline styles when possible
- **ESLint** — `next/core-web-vitals` config
- **Prettier** — Default config
- **Conventional Commits** — `feat:`, `fix:`, `docs:`, etc.

## Testing

- **Unit tests**: Vitest + React Testing Library
- **Accessibility**: axe-core for WCAG compliance
- **E2E**: Playwright across Chromium, Firefox, WebKit

## Deployment

- **Platform**: Vercel
- **CI/CD**: GitHub Actions
- **Preview**: Auto-deploy on PRs
- **Production**: Deploy on tag push
