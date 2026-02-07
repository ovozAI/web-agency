import { Metadata } from "next";
import DemosListPage from "@/components/DemosListPage";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfolio — Bizning loyihalar",
  description:
    "pixel24 tomonidan yaratilgan veb-saytlar, landing sahifalar, telegram botlar va veb-ilovalar namunalari.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/demos`,
    languages: {
      uz: `${siteConfig.baseUrl}/demos`,
      ru: `${siteConfig.baseUrl}/ru/demos`,
    },
  },
  openGraph: {
    title: "Portfolio — Bizning loyihalar | pixel24",
    description:
      "pixel24 tomonidan yaratilgan veb-saytlar, landing sahifalar, telegram botlar va veb-ilovalar namunalari.",
    url: `${siteConfig.baseUrl}/demos`,
  },
};

export default function Demos() {
  return <DemosListPage locale="uz" />;
}
