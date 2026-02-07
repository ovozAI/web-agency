import { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "pixel24 — Профессиональный сайт для вашего бизнеса",
  description:
    "Современные сайты, telegram боты и веб-приложения для малого и среднего бизнеса. Лендинги от $99. Домен включен.",
  keywords: [
    "создание сайтов",
    "лендинг",
    "сайт для бизнеса",
    "telegram бот",
    "веб-приложение",
    "заказать сайт",
    "pixel24",
    "сайт Узбекистан",
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/ru`,
    languages: {
      uz: siteConfig.baseUrl,
      ru: `${siteConfig.baseUrl}/ru`,
    },
  },
  openGraph: {
    title: "pixel24 — Профессиональный сайт для вашего бизнеса",
    description:
      "Современные сайты, telegram боты и веб-приложения для малого и среднего бизнеса. Лендинги от $99.",
    url: `${siteConfig.baseUrl}/ru`,
    locale: "ru_RU",
    alternateLocale: "uz_UZ",
  },
};

export default function RuHome() {
  return <LandingPage locale="ru" />;
}
