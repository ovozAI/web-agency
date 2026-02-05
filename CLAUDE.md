# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (Uzbek/Russian) web agency landing page built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases services, pricing tiers ($99 Starter, $199 Business, Custom), project portfolio, and includes a Telegram-integrated contact form.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm lint             # Run ESLint
```

## Architecture & Key Concepts

### Internationalization (i18n)

- **Two locales**: Uzbek (`uz`) and Russian (`ru`)
- **Route structure**: Uzbek is root `/`, Russian is `/ru/*`
- **Content source**: All translations live in `src/content/dictionaries.ts`
- **Type-safe**: `Dictionary` type ensures all translations have matching structure
- Each page component receives a `locale` prop and uses `getDictionary(locale)` to access translations

### Content Management

All content is centralized in `/src/content/`:

- **`dictionaries.ts`**: UI text for both languages (nav, hero, pricing, FAQ, footer, etc.)
- **`demos.ts`**: Project portfolio entries with badges, descriptions, and URLs
  - `LANDING_DEMO_COUNT = 6` controls how many show on homepage
  - Projects without `preview` get gradient fallback with first letter
- **`site.ts`**: Site-wide config (Telegram URL, phone number)

### Demos/Portfolio System

Projects can be either:
1. **Local HTML demos**: Add folder to `public/demos/<slug>/` with `index.html` and `preview.png`
2. **External links**: Set `url` field to external site (e.g., `https://ovozai.uz`)

Register all demos in `src/content/demos.ts`:
```typescript
{
  slug: "project-name",
  title: { uz: "...", ru: "..." },
  description: { uz: "...", ru: "..." },
  preview: "/assets/project.png",  // optional, gets gradient if omitted
  url: "https://example.com",       // direct link
  badges: [
    { text: { uz: "AI", ru: "AI" }, color: "lime" },
    { text: { uz: "Telegram Bot", ru: "Telegram Bot" }, color: "ocean" }
  ]
}
```

Badge colors: `lime`, `ocean`, `coral`, `ink`

### Component Structure

- **Page components** (`LandingPage`, `DemosListPage`, `DemoDetailPage`): Receive `locale` and fetch dictionary
- **Shared components** (`SiteHeader`, `DemoCard`, `FaqAccordion`): Receive dictionary as prop
- **Client components**: `ContactForm`, `LanguageSwitcher`, `FaqAccordion` (marked with `"use client"`)

### Pricing Tiers

Three tiers defined in dictionaries:
- **Starter ($99)**: Highlighted (dark background), single-page landing, 1 year support
- **Business ($199)**: Multi-page site, 1 year support
- **Custom**: Telegram bots, e-commerce, CRM, etc.

Domain purchase is included in all tiers.

### Contact Form Integration

The contact form submits to `/api/contact` which forwards to Telegram. Requires environment variables:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

### Styling

- **Tailwind CSS** with custom config in `tailwind.config.ts`
- **Custom utilities**: `.glass`, `.grid-sheen`, `.shadow-card`, `.shadow-glow`
- **Color tokens**: `ink` (dark), `mist` (light bg), `lime` (accent), `coral`, `ocean`
- **Fonts**: Manrope (body) and Space Grotesk (headings) from Google Fonts

## Adding New Demos

1. Create folder: `public/demos/<slug>/`
2. Add `index.html` and optional preview image
3. Register in `src/content/demos.ts` with both language translations
4. For external projects, just add `url` field without creating folder

## Route Structure

```
/                           → Uzbek homepage
/demos                      → Full project list (Uzbek)
/demos/[slug]               → Demo detail page (Uzbek)
/ru/                        → Russian homepage
/ru/demos                   → Full project list (Russian)
/ru/demos/[slug]            → Demo detail page (Russian)
```

Homepage shows first 6 projects (controlled by `LANDING_DEMO_COUNT`).
