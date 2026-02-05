import Link from "next/link";
import type { Dictionary, Locale } from "@/content/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader({
  locale,
  dict,
  basePath
}: {
  locale: Locale;
  dict: Dictionary;
  basePath: string;
}) {
  return (
    <header className="container py-6">
      <div className="flex items-center justify-between gap-4">
        <Link href={`${basePath}/`} className="flex items-center gap-3 transition hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-lime">
            P24
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">pixel24</p>
            <p className="text-xs text-ink/60">Professional websites</p>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 text-sm font-semibold text-ink/70 md:flex">
            <Link className="hover:text-ink" href={`${basePath}/`}>
              {dict.nav.home}
            </Link>
            <a className="hover:text-ink" href="#services">
              {dict.nav.services}
            </a>
            <a className="hover:text-ink" href="#demos">
              {dict.nav.demos}
            </a>
            <a className="hover:text-ink" href="#pricing">
              {dict.nav.pricing}
            </a>
            <a className="hover:text-ink" href="#faq">
              {dict.nav.faq}
            </a>
            <a className="hover:text-ink" href="#contact">
              {dict.nav.contact}
            </a>
          </nav>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
      {/* Mobile nav */}
      <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-ink/70 md:hidden">
        <Link className="hover:text-ink" href={`${basePath}/`}>
          {dict.nav.home}
        </Link>
        <a className="hover:text-ink" href="#services">
          {dict.nav.services}
        </a>
        <a className="hover:text-ink" href="#demos">
          {dict.nav.demos}
        </a>
        <a className="hover:text-ink" href="#pricing">
          {dict.nav.pricing}
        </a>
        <a className="hover:text-ink" href="#faq">
          {dict.nav.faq}
        </a>
        <a className="hover:text-ink" href="#contact">
          {dict.nav.contact}
        </a>
      </nav>
    </header>
  );
}
