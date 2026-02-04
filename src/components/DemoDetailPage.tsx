import Link from "next/link";
import { notFound } from "next/navigation";
import { demos } from "@/content/demos";
import { getDictionary, type Locale } from "@/content/dictionaries";
import type { BadgeColor } from "@/content/demos";

const badgeColors: Record<BadgeColor, string> = {
  lime: "bg-lime text-ink",
  ocean: "bg-ocean/20 text-ocean",
  coral: "bg-coral/20 text-coral",
  ink: "bg-ink/10 text-ink"
};

export default function DemoDetailPage({
  locale,
  slug
}: {
  locale: Locale;
  slug: string;
}) {
  const demo = demos.find((item) => item.slug === slug);
  if (!demo) {
    notFound();
  }

  const dict = getDictionary(locale);
  const basePath = locale === "ru" ? "/ru" : "";

  return (
    <div className="min-h-screen bg-hero-radial">
      <div className="grid-sheen">
        <div className="container space-y-10 pb-20 pt-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex flex-wrap gap-2">
                {demo.badges?.map((badge) => (
                  <span
                    key={badge.text[locale]}
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeColors[badge.color]}`}
                  >
                    {badge.text[locale]}
                  </span>
                ))}
              </div>
              <h1 className="mt-3 text-4xl font-semibold text-ink">{demo.title[locale]}</h1>
              <p className="mt-2 text-sm text-ink/70">{demo.description[locale]}</p>
            </div>
            <div className="flex gap-3">
              {demo.url && (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
                >
                  {dict.demos.openFullscreen}
                </a>
              )}
              <Link
                href={`${basePath}/#contact`}
                className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink"
              >
                {dict.hero.ctaPrimary}
              </Link>
            </div>
          </div>
          {demo.preview && (
            <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-white shadow-card">
              <iframe
                title={demo.title[locale]}
                src={demo.url || `/demos/${demo.slug}/index.html`}
                className="h-[720px] w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
