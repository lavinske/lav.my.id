# lav.my.id

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/61bc2cd7-6d96-4d3b-ab5f-78b1ccb2d8f9/deploy-status)](https://app.netlify.com/sites/lavinske/deploys) [![Node.js](https://img.shields.io/badge/Node.js-24%20LTS-68a063.svg)](https://nodejs.org/) [![Astro](https://img.shields.io/badge/Astro-7-bc52ee.svg)](https://astro.build)

[![PageSpeed Mobile](https://img.shields.io/badge/PageSpeed%20Mobile-99%2F100-00C853.svg)](https://pagespeed.web.dev/analysis/https-lav-my-id/oxeozz8ns4?form_factor=mobile) [![PageSpeed Desktop](https://img.shields.io/badge/PageSpeed%20Desktop-100%2F100-00C853.svg)](https://pagespeed.web.dev/analysis/https-lav-my-id/oxeozz8ns4?form_factor=desktop) [![Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-00C853.svg)](https://pagespeed.web.dev/analysis/https-lav-my-id/oxeozz8ns4) [![Best Practices](https://img.shields.io/badge/Best%20Practices-100%2F100-00C853.svg)](https://pagespeed.web.dev/analysis/https-lav-my-id/oxeozz8ns4) [![SEO](https://img.shields.io/badge/SEO-100%2F100-00C853.svg)](https://pagespeed.web.dev/analysis/https-lav-my-id/oxeozz8ns4)

Personal website, technical journal, and homelab documentation hub of **Steven Lavinske** ([lav.my.id](https://lav.my.id)).

---

## 🛠 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build) (Static Site Generation / Island Architecture) |
| **Engine / Bundler** | [Vite](https://vitejs.dev/) with Node.js 24 LTS |
| **Styling** | Modern Dart Sass / SCSS, CSS Custom Properties, Responsive Mobile-first Grid |
| **Typography** | Self-hosted `@fontsource/roboto`, `@fontsource/roboto-mono`, `@fontsource/montserrat` |
| **Content Pipeline** | Git Submodules (`content/`) + Markdown (`unified`, Shiki Syntax Highlighting) |
| **SEO & Discovery** | Schema.org JSON-LD (`BlogPosting`, `WebSite`), OpenGraph, Twitter Cards, RSS 2.0, XML Sitemap |
| **Hosting & CI/CD** | [Netlify](https://www.netlify.com/) with Git Deploy Keys for private submodule synchronization |

---

## 💡 Engineering Highlights & Skills

- **Perfect PageSpeed Scores**: **100/100/100/100** on desktop and **99/100/100/100** on mobile (verified Oct 31, 2026). Core Web Vitals: FCP 0.2s, LCP 0.2s, TBT 0ms, CLS 0.001 (desktop).
- **Zero-Runtime Overhead**: Fully static pre-rendered HTML with zero client-side JavaScript overhead by default, achieving sub-second load times.
- **Optimized Asset Pipeline**: Latin-only font subsets (-270KB), sharp-compressed images (-596KB / 71% reduction), 2x variants for retina displays, lazy-loading with explicit dimensions.
- **Private Content Architecture**: Decoupled content pipeline utilizing a secure Git submodule (`content.lav.my.id`) protected by Netlify SSH Deploy Keys—keeping raw markdown and drafts private while the application shell remains open-source.
- **Modern Typography & Zero Network Leaks**: All web fonts (Roboto, Montserrat, Roboto Mono) and icons are bundled locally into static assets via Fontsource, eliminating third-party tracking and latency.
- **Comprehensive Technical SEO**: Auto-generated Schema.org structured data, dynamic OpenGraph/Twitter social cards, multi-taxonomy indexing (Categories, Tags), canonical URLs, and RSS feeds.
- **Sub-2s Build Time**: Migration from legacy Webpack 4 / Gatsby 2 to Astro + Vite reduced compilation time from 25+ seconds down to **1.5 seconds** with **0 build vulnerabilities**.
- **Security-First Headers**: CSP, COOP, HSTS with preload, X-Frame-Options, comprehensive Permissions-Policy via Netlify edge configuration.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ or 24 LTS
- npm 10+
- Git

### Installation

```bash
# Clone the repository with submodules
git clone --recurse-submodules https://github.com/lavinske/lav.my.id.git
cd lav.my.id

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Compile static bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
├── content/              # Private Git Submodule (Markdown posts, images, thumbnails)
├── public/               # Static assets (favicons, logos, fonts, redirects)
├── src/
│   ├── components/       # Reusable Astro components (Navigation, Footer, Listings)
│   ├── layouts/          # Base HTML layout with SEO, OpenGraph, JSON-LD
│   ├── pages/            # File-based static routes & RSS endpoints
│   ├── styles/           # Modular SCSS design system (base, components, themes)
│   └── utils/            # Markdown loaders, date helpers, slug utilities
├── astro.config.mjs      # Astro configuration & sitemap integration
└── netlify.toml          # CI/CD deployment configuration
```

---

## 👤 Author

**Steven Lavinske**
- Website: [https://lav.my.id](https://lav.my.id)
- Directory & Contact: [https://lav.my.id/link/](https://lav.my.id/link/)
- GitHub: [@lavinske](https://github.com/lavinske)
- LinkedIn: [Steven Lavinske](https://go.tell.my.id/lin)

---

## 🙏 Acknowledgements & Attribution

- **[Tania Rascia](https://github.com/taniarascia)** ([taniarascia.com](https://github.com/taniarascia/taniarascia.com) / [tania.dev](https://tania.dev)): Sincere appreciation and gratitude to Tania Rascia for the original design inspiration, clean CSS architecture, and typography foundations adapted from her open-source personal website.
- **[Astro](https://astro.build)**: For the modern, zero-JS static site generation engine.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
- Copyright (c) 2019-2026 Steven Lavinske
- Original design & theme foundations Copyright (c) 2019 Tania Rascia
