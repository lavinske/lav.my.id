# lav.my.id

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/61bc2cd7-6d96-4d3b-ab5f-78b1ccb2d8f9/deploy-status)](https://app.netlify.com/sites/lavinske/deploys)

Personal website and blog running on [Astro](https://astro.build), Markdown, and Node.js.

## Features

- Fast static site generation with Astro (zero client-side JS overhead by default)
- Markdown post processing with syntax highlighting
- Clean light & dark theme toggle with instant persistence
- Linktree-style directory at `/link/`
- Full taxonomy support (Categories, Tags)
- Integrated RSS feed (`/rss.xml`) and Sitemap (`/sitemap-index.xml`)
- Automated deployments via Netlify

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production static bundle
npm run build
```

## Acknowledgements

- Tania Rascia - Original design inspiration & CSS baseline ([taniarascia.com](https://github.com/taniarascia/taniarascia.com))
- [Astro](https://astro.build)

## Author

- [Steven Lavinske](https://lav.my.id)

## License

This project is open source and available under the [MIT License](LICENSE).
