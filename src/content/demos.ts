export type BadgeColor = "lime" | "ocean" | "coral" | "ink";

export type Badge = {
  text: {
    uz: string;
    ru: string;
  };
  color: BadgeColor;
};

export type Demo = {
  slug: string;
  title: {
    uz: string;
    ru: string;
  };
  description: {
    uz: string;
    ru: string;
  };
  preview?: string;
  url?: string;
  badges?: Badge[];
};

export const LANDING_DEMO_COUNT = 6;

export const demos: Demo[] = [
  {
    slug: "mebel",
    title: { uz: "Mebel", ru: "Mebel" },
    description: {
      uz: "Mebel do'koni uchun veb sahifa",
      ru: "Веб страница для мебельного магазина.",
    },
    url: "/demos/mebel/index.html",
    preview: "/demos/mebel/mebel.png",
    badges: [{ text: { uz: "Web", ru: "Web" }, color: "ocean" }],
  },
  {
    slug: "eclinic",
    title: { uz: "eClinic", ru: "eClinic" },
    description: {
      uz: "Tibbiy mutaxassislar uchun to'liq boshqarish tizimi.",
      ru: "Полная система управления для медицинских специалистов.",
    },
    url: "https://e-clinic.uz",
    preview: "/assets/eclinic.png",
    badges: [
      { text: { uz: "Web App", ru: "Web App" }, color: "coral" },
      {
        text: {
          uz: "CRM",
          ru: "CRM",
        },
        color: "ocean",
      },
    ],
  },
  {
    slug: "estetic",
    title: { uz: "Estetic medical", ru: "Estetic medical" },
    description: {
      uz: "Xususiy klinika uchun veb sahifa",
      ru: "Веб страница для частной клиники.",
    },
    url: "https://estetic.uz",
    preview: "/assets/estetic.png",
    badges: [{ text: { uz: "Web", ru: "Web" }, color: "ocean" }],
  },
  {
    slug: "clothing",
    title: { uz: "Clothing", ru: "Clothing" },
    description: {
      uz: "Kiyim do'koni uchun veb sahifa",
      ru: "Веб страница для магазина одежды.",
    },
    url: "/demos/clothing/index.html",
    preview: "/demos/clothing/clothing.png",
    badges: [
      { text: { uz: "Web", ru: "Web" }, color: "ocean" },
      { text: { uz: "E-commerce", ru: "E-commerce" }, color: "coral" },
    ],
  },
  {
    slug: "ovozai",
    title: { uz: "ovozAI", ru: "ovozAI" },
    description: {
      uz: "AI call-center samaradorligi analitikasi va real-time transkripsiya.",
      ru: "AI аналитика колл-центра и real-time транскрипция.",
    },
    url: "https://ovozai.uz",
    preview: "/assets/ovozai.png",
    badges: [
      { text: { uz: "AI", ru: "AI" }, color: "lime" },
      { text: { uz: "SaaS", ru: "SaaS" }, color: "ink" },
    ],
  },

  {
    slug: "market",
    title: { uz: "Market", ru: "Market" },
    description: {
      uz: "Supermarket uchun veb sahifa",
      ru: "Веб страница для супермаркета.",
    },
    url: "/demos/market/index.html",
    preview: "/demos/market/market3.png",
    badges: [{ text: { uz: "Web", ru: "Web" }, color: "ocean" }],
  },
  {
    slug: "spendai",
    title: { uz: "SpendAI", ru: "SpendAI" },
    description: {
      uz: "AI-bilan xarajat kuzatish va kategorilash.",
      ru: "AI-поверх трекинг и категоризация расходов.",
    },
    url: "https://t.me/spendai_bot",
    preview: "/assets/spendai.jpg",
    badges: [
      { text: { uz: "Telegram Bot", ru: "Telegram Bot" }, color: "ocean" },
      { text: { uz: "AI", ru: "AI" }, color: "lime" },
    ],
  },
  {
    slug: "ovozai-bot",
    title: { uz: "ovozAI Bot", ru: "ovozAI Bot" },
    description: {
      uz: "Ko'p tildagi ovoz xabar transkripsiyasi Telegram bot.",
      ru: "Многоязыковая транскрипция голосовых сообщений в Telegram.",
    },
    url: "https://t.me/ovoz_aibot",
    preview: "/assets/ovozai-bot.jpg",
    badges: [
      { text: { uz: "Telegram Bot", ru: "Telegram Bot" }, color: "ocean" },
      { text: { uz: "AI", ru: "AI" }, color: "lime" },
    ],
  },

  {
    slug: "watchdomain-bot",
    title: { uz: "WatchDomain Bot", ru: "WatchDomain Bot" },
    description: {
      uz: "Domenlarni kuzatish va tugallanish oldingi bildirishnoma.",
      ru: "Отслеживание доменов и уведомления перед истечением.",
    },
    url: "https://t.me/watchdomainbot",
    badges: [
      { text: { uz: "Telegram Bot", ru: "Telegram Bot" }, color: "ocean" },
    ],
  },
];
