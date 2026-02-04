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
    slug: "spendai",
    title: { uz: "SpendAI", ru: "SpendAI" },
    description: {
      uz: "AI-bilan xarajat kuzatish va kategorilash.",
      ru: "AI-поверх трекинг и категоризация расходов.",
    },
    url: "https://t.me/spendai_bot",
    badges: [
      { text: { uz: "Telegram Bot", ru: "Telegram Bot" }, color: "ocean" },
      { text: { uz: "AI", ru: "AI" }, color: "lime" },
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
    slug: "ovozai-bot",
    title: { uz: "ovozAI Bot", ru: "ovozAI Bot" },
    description: {
      uz: "Ko'p tildagi ovoz xabar transkripsiyasi Telegram bot.",
      ru: "Многоязыковая транскрипция голосовых сообщений в Telegram.",
    },
    url: "https://t.me/ovoz_aibot",
    badges: [
      { text: { uz: "Telegram Bot", ru: "Telegram Bot" }, color: "ocean" },
      { text: { uz: "AI", ru: "AI" }, color: "lime" },
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
  {
    slug: "cafe",
    title: { uz: "Qahvaxona landing", ru: "Лендинг кофейни" },
    description: {
      uz: "Minimalistik menyu va tezkor buyurtma CTA bilan landing.",
      ru: "Лендинг с минимальным меню и быстрым CTA заказа.",
    },
    preview: "/demos/cafe/preview.svg",
    url: "/demos/cafe/index.html",
    badges: [{ text: { uz: "Landing", ru: "Лендинг" }, color: "lime" }],
  },
  {
    slug: "repair",
    title: { uz: "Avtoservis landing", ru: "Лендинг автосервиса" },
    description: {
      uz: "Xizmatlar, narxlar va bron formi bilan landing.",
      ru: "Лендинг с услугами, ценами и формой записи.",
    },
    preview: "/demos/repair/preview.svg",
    url: "/demos/repair/index.html",
    badges: [{ text: { uz: "Landing", ru: "Лендинг" }, color: "lime" }],
  },
];
