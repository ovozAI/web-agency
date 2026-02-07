import { Metadata } from "next";
import DemosListPage from "@/components/DemosListPage";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Портфолио — Наши проекты",
  description:
    "Примеры сайтов, лендингов, telegram ботов и веб-приложений от pixel24.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/ru/demos`,
    languages: {
      uz: `${siteConfig.baseUrl}/demos`,
      ru: `${siteConfig.baseUrl}/ru/demos`,
    },
  },
  openGraph: {
    title: "Портфолио — Наши проекты | pixel24",
    description:
      "Примеры сайтов, лендингов, telegram ботов и веб-приложений от pixel24.",
    url: `${siteConfig.baseUrl}/ru/demos`,
    locale: "ru_RU",
  },
};

export default function Demos() {
  return <DemosListPage locale="ru" />;
}
