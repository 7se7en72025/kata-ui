<div align="center">

![Kata UI Banner](https://raw.githubusercontent.com/7se7en72025/kata-ui/main/public/dashboard-mockup.png)

# Kata UI

**Motion-driven React components built with intention and weight.**

[![NPM Version](https://img.shields.io/npm/v/kata-ui.svg)](https://www.npmjs.com/package/kata-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/7se7en72025/kata-ui/pulls)
[![Stars](https://img.shields.io/github/stars/7se7en72025/kata-ui?style=social)](https://github.com/7se7en72025/kata-ui)
[![CI](https://github.com/7se7en72025/kata-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/7se7en72025/kata-ui/actions/workflows/ci.yml)
[![Tests](https://img.shields.io/badge/tests-45%20passing-brightgreen)](https://github.com/7se7en72025/kata-ui)

<a href="https://vercel.com/oss">
  <img src="https://vercel.com/oss/oss-badge.svg" alt="Vercel OSS Program" />
</a>

</div>

---

## What is Kata UI?

Kata UI is a collection of motion-driven React components designed for modern web applications. Each component is crafted with attention to **accessibility**, **performance**, and **developer experience**.

> "Form follows force. Not just what things look like, how they feel."

### Why Kata UI?

- **Motion-First Design** — Smooth, physics-based animations built-in
- **Accessible** — WCAG compliant, tested with axe-core
- **Type-Safe** — Full TypeScript support with autocompletion
- **Copy-Paste Ready** — Self-contained components, no vendor lock-in
- **Dark Mode** — Built-in theme support
- **Tree-Shakable** — Import only what you need
- **20+ Components** — Hero sections, effects, buttons, navigation, utilities

### Live Demo

**[kata-ui.vercel.app](https://kata-ui.vercel.app)** — See all components in action with live code examples.

## Quick Start

### Installation (shadcn/ui compatible)

```bash
npx shadcn@latest add https://kata-ui.vercel.app/r/hero
```

### Manual Installation

```bash
npm install kata-ui
```

### Clone & Run

```bash
git clone https://github.com/7se7en72025/kata-ui.git
cd kata-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Documentation

Visit **[kata-ui.vercel.app](https://kata-ui.vercel.app)** for:

- Live interactive demos
- Installation guides
- API reference
- Customization tips

## Components

### Hero & Landing

| Component             | Description                               | Install                                      |
| --------------------- | ----------------------------------------- | -------------------------------------------- |
| `Hero`                | Landing page hero with liquid metal badge | `npx shadcn@latest add hero`                 |
| `ImpressionSection`   | Feature showcase with animations          | `npx shadcn@latest add impression-section`   |
| `TestimonialsSection` | Social proof carousel                     | `npx shadcn@latest add testimonials-section` |
| `FaqSection`          | Collapsible FAQ accordion                 | `npx shadcn@latest add faq-section`          |

### Effects & Animation

| Component        | Description                   | Install                                 |
| ---------------- | ----------------------------- | --------------------------------------- |
| `GlitchText`     | Cyberpunk glitch text effect  | `npx shadcn@latest add glitch-text`     |
| `LiquidMetal`    | 3D liquid metal shader        | `npx shadcn@latest add liquid-metal`    |
| `GlowButton`     | Button with glow hover effect | `npx shadcn@latest add glow-button`     |
| `AnimatedButton` | Button with press animation   | `npx shadcn@latest add animated-button` |
| `AnimatedRays`   | Rotating ray background       | `npx shadcn@latest add animated-rays`   |

### Layout & Navigation

| Component     | Description                           | Install                              |
| ------------- | ------------------------------------- | ------------------------------------ |
| `Navbar`      | Fixed navbar with theme toggle        | `npx shadcn@latest add navbar`       |
| `Footer`      | Bottom footer with branding           | `npx shadcn@latest add footer`       |
| `SideFrame`   | SVG ruler guides with cursor tracking | `npx shadcn@latest add side-frame`   |
| `LazySection` | Lazy-load with IntersectionObserver   | `npx shadcn@latest add lazy-section` |

### Utility

| Component       | Description                        | Install                                |
| --------------- | ---------------------------------- | -------------------------------------- |
| `CodeBlock`     | Syntax-highlighted code block      | `npx shadcn@latest add code-block`     |
| `ErrorBoundary` | React error boundary with recovery | `npx shadcn@latest add error-boundary` |
| `TechLogos`     | Animated tech stack marquee        | `npx shadcn@latest add tech-logos`     |

## Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

</div>

## Scripts

| Command                 | Description               |
| ----------------------- | ------------------------- |
| `npm run dev`           | Start development server  |
| `npm run build`         | Build for production      |
| `npm run test`          | Run unit tests (45 tests) |
| `npm run test:e2e`      | Run Playwright E2E tests  |
| `npm run lint`          | Run ESLint                |
| `npm run typecheck`     | TypeScript type check     |
| `npm run format`        | Format with Prettier      |
| `npm run test:coverage` | Run tests with coverage   |

## Testing

- **45 unit tests** — Vitest + React Testing Library
- **Accessibility** — axe-core WCAG compliance
- **E2E tests** — Playwright (Chromium, Firefox, WebKit)
- **Performance** — Lighthouse CI audits

## CI/CD

- **CI** — Lint, typecheck, test matrix (Ubuntu/Windows × Node 18/20), build, CodeQL
- **CD** — Auto-deploy staging on push, production on tag
- **Preview** — PR previews on every pull request
- **Docker** — Multi-arch build + Trivy scanning

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Fork & clone
git clone https://github.com/YOUR_USERNAME/kata-ui.git
cd kata-ui

# Install dependencies
npm install

# Create branch
git checkout -b feature/amazing-feature

# Make changes, then...
npm run lint
npm run test
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature

# Open PR
```

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Report vulnerabilities via [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) — Free for personal and commercial use.

## Acknowledgments

- [Next.js](https://nextjs.org) — The React framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) — Component registry format
- [Vercel](https://vercel.com) — Deployment platform

---

<div align="center">

**Built with passion. Powered by Vercel.**

[![Vercel OSS](https://vercel.com/oss/oss-badge.svg)](https://vercel.com/open-source-program)

---

### Why Vercel OSS?

Kata UI fills a gap in the React ecosystem: **motion-driven, accessible components that feel alive**. Most libraries focus on how things look. Kata UI focuses on how things **feel** — physics-based animations, intention-driven interactions, and weight.

**What makes us different:**

- Only component library with built-in WebGL shaders (liquid metal effect)
- axe-core accessibility testing on every PR
- shadcn registry for zero-friction adoption
- 45+ unit tests, E2E across 3 browsers, Lighthouse CI
- Deployed on Vercel with preview deployments for every PR

[Read our full application →](PITCH.md)

</div>
