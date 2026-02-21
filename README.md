# Detailing Bros

> Premium Auto Detailing & Car Care Excellence

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Professional auto detailing services in Los Angeles. Paint correction, ceramic coating, interior detailing, and more. Book your appointment today!

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Image gallery showcase
- Pricing plans display
- Customer testimonials

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, services-grid, features, gallery, pricing, testimonials, cta, contact-preview
- **Services** (`/services`) — hero, service-detail, service-detail, service-detail
- **About** (`/about`) — hero, content, team, logos
- **Gallery** (`/gallery`) — hero, gallery-full
- **Contact** (`/contact`) — hero, contact-form, contact-details, map

## Project Structure

```
├── .env.example
├── _no_backend.txt
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── services/
│       └── page.tsx
├── components.json
├── components/
│   ├── BeforeAfterSlider.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   ├── FeatureCard.tsx
│   ├── Footer.tsx
│   ├── GalleryGrid.tsx
│   ├── HeroImage.tsx
│   ├── HeroSection.tsx
│   ├── LogoCloud.tsx
│   ├── Navbar.tsx
│   ├── PricingCard.tsx
│   ├── ServiceCard.tsx
│   ├── StatCounter.tsx
│   ├── TeamMemberCard.tsx
│   ├── TestimonialCard.tsx
│   ├── blocks/
│   │   ├── ContactForm.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── FooterMultiColumn.tsx
│   │   └── HeroImage.tsx
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
├── error.txt
├── lib/
│   ├── types.ts
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#D62828](https://via.placeholder.com/15/D62828/000000?text=+) | `#D62828` |
| Secondary | ![#C0C0C0](https://via.placeholder.com/15/C0C0C0/000000?text=+) | `#C0C0C0` |
| Accent | ![#D62828](https://via.placeholder.com/15/D62828/000000?text=+) | `#D62828` |
| Background | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | `#FFFFFF` |

## Typography

- **Headings:** Barlow
- **Body:** Barlow

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mlw64y31.git

# Navigate to the project
cd proj_mlw64y31

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mlw64y31)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
