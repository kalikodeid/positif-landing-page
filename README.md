# Positif Landing Page

A modern, responsive landing page for **Positif** - a comprehensive POS (Point of Sale) system designed to streamline business operations.

## 📋 Overview

Positif Landing Page is built with [Astro](https://astro.build) and showcases features of the Positif POS system. The landing page includes:

- **Hero Section** - Eye-catching introduction
- **Partner Section** - Trusted partners and integrations
- **Features** - Core POS system capabilities
- **Benefits** - Key advantages for business operations
- **Testimonials** - Customer feedback and success stories
- **Pricing** - Flexible pricing plans
- **FAQ** - Common questions and answers
- **Call-to-Action** - Lead generation and conversions

## 🛠️ Tech Stack

- **Astro 5** - Fast, content-focused static site builder
- **React 19** - Interactive components
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Lucide Astro** - Beautiful, consistent icons

## 🚀 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Fonts and media files
│   ├── components/        # Astro & React components
│   │   ├── Benefits.astro
│   │   ├── CTA.astro
│   │   ├── FAQ.astro
│   │   ├── Features.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Partner.astro
│   │   ├── Pricing.astro
│   │   ├── Testimonials.astro
│   │   ├── Welcome.astro
│   │   └── ReactTest.tsx
│   ├── layouts/           # Layout templates
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Home page
│   │   └── react.astro    # React demo page
│   └── styles/
│       └── global.css     # Global styles
├── astro.config.mjs       # Astro configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🧞 Getting Started

### Prerequisites
- Node.js 18+
- Bun (package manager)

### Installation

```sh
bun install
```

### Development

```sh
bun dev
```

Starts a local development server at `http://localhost:4321`

### Production Build

```sh
bun build
```

Builds your site to the `./dist/` directory.

### Preview Build

```sh
bun preview
```

Preview your built site locally before deploying.

## 📝 Commands

All commands are run from the root of the project:

| Command          | Action                                       |
| :--------------- | :------------------------------------------- |
| `bun install`    | Install dependencies                         |
| `bun dev`        | Start local dev server at `localhost:4321`  |
| `bun build`      | Build production site to `./dist/`          |
| `bun preview`    | Preview build locally                       |
| `bun astro`      | Run Astro CLI                               |

## 🎨 Customization

- **Colors & Styling**: Edit `src/styles/global.css` and component Tailwind classes
- **Content**: Modify `.astro` components in `src/components/`
- **Pages**: Add new routes in `src/pages/`
- **Configuration**: Update `astro.config.mjs` for Astro settings

## 📄 License

Custom fonts are licensed under `licenses/Satoshi-fonts.txt`

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Documentation](https://react.dev)

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
