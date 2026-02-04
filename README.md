# Web Agency (Next.js)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

## Locales

Uzbek version is `/`, Russian is `/ru`.

## Telegram Contact Form

Set environment variables:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

## Adding New Demo Landings

1. Create a folder under `public/demos/<slug>/`.
2. Add `index.html` and any assets.
3. Add a preview image (SVG or PNG) under the same folder.
4. Register the demo in `src/content/demos.ts`.

The demo page will render the HTML via iframe.
