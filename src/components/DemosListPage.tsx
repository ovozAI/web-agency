import Link from "next/link";
import { demos } from "@/content/demos";
import { getDictionary, type Locale } from "@/content/dictionaries";
import DemoCard from "./DemoCard";
import SiteHeader from "./SiteHeader";

export default function DemosListPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const basePath = locale === "ru" ? "/ru" : "";

  return (
    <div className="min-h-screen bg-hero-radial">
      <div className="grid-sheen">
        <SiteHeader locale={locale} dict={dict} basePath={basePath} />
        <main className="container space-y-8 pb-20 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-semibold text-ink">{dict.demos.title}</h1>
              <p className="mt-2 text-sm text-ink/60">{dict.demos.subtitle}</p>
            </div>
            <Link href={`${basePath}/`} className="text-sm font-semibold text-ocean">
              ← {dict.nav.home}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <DemoCard
                key={demo.slug}
                demo={demo}
                locale={locale}
                cta={dict.demos.viewDemo}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
