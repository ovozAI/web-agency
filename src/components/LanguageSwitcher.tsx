"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/dictionaries";

const labels: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU"
};

function stripRu(pathname: string) {
  return pathname.startsWith("/ru") ? pathname.replace(/^\/ru/, "") || "/" : pathname;
}

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() || "/";
  const pathWithoutLocale = stripRu(pathname);

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide shadow-sm">
      <Link
        href={pathWithoutLocale}
        className={`rounded-full px-2 py-1 transition ${
          currentLocale === "uz" ? "bg-ink text-white" : "text-ink/70 hover:text-ink"
        }`}
      >
        {labels.uz}
      </Link>
      <Link
        href={`/ru${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
        className={`rounded-full px-2 py-1 transition ${
          currentLocale === "ru" ? "bg-ink text-white" : "text-ink/70 hover:text-ink"
        }`}
      >
        {labels.ru}
      </Link>
    </div>
  );
}
