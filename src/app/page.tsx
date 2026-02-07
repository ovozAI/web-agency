import { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "pixel24 — Biznesingiz uchun professional veb-sayt",
  description:
    "Kichik va o'rta bizneslar uchun zamonaviy saytlar, telegram botlar va veb-ilovalar. Landing sahifalar $99 dan. Domen bepul.",
  alternates: {
    canonical: siteConfig.baseUrl,
    languages: {
      uz: siteConfig.baseUrl,
      ru: `${siteConfig.baseUrl}/ru`,
    },
  },
  openGraph: {
    title: "pixel24 — Biznesingiz uchun professional veb-sayt",
    description:
      "Kichik va o'rta bizneslar uchun zamonaviy saytlar, telegram botlar va veb-ilovalar. Landing sahifalar $99 dan.",
    url: siteConfig.baseUrl,
    locale: "uz_UZ",
    alternateLocale: "ru_RU",
  },
};

export default function Home() {
  return <LandingPage locale="uz" />;
}
