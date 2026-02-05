import Link from "next/link";
import { demos } from "@/content/demos";
import { getDictionary, type Locale } from "@/content/dictionaries";
import { siteConfig } from "@/content/site";
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

        {/* Footer */}
        <footer className="border-t border-ink/10 bg-ink text-white">
          <div className="container py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime text-sm font-bold text-ink">
                    P24
                  </div>
                  <h4 className="text-lg font-semibold">pixel24</h4>
                </div>
                <p className="mt-3 text-sm text-white/60">{dict.footer.tagline}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                  {dict.footer.services}
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {dict.footer.servicesList.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                  {dict.footer.contact}
                </h4>
                <div className="mt-4 space-y-2 text-sm text-white/60">
                  <a href={siteConfig.telegramUrl} className="block hover:text-white">
                    Telegram
                  </a>
                  <p>{siteConfig.phone}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
              <p>© {new Date().getFullYear()} pixel24. {dict.footer.rights}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
