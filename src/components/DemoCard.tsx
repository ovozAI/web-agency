import Image from "next/image";
import type { Demo, BadgeColor } from "@/content/demos";
import type { Locale } from "@/content/dictionaries";

const badgeColors: Record<BadgeColor, string> = {
  lime: "bg-lime text-ink",
  ocean: "bg-ocean/20 text-ocean",
  coral: "bg-coral/20 text-coral",
  ink: "bg-ink/10 text-ink"
};

// Deterministic gradient based on slug
const gradients = [
  "from-ink/80 to-ink/60",
  "from-ocean/70 to-ocean/40",
  "from-coral/60 to-coral/30",
  "from-ink/70 to-ocean/50",
  "from-ocean/60 to-coral/40"
];

function getGradient(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  return gradients[Math.abs(hash) % gradients.length];
}

export default function DemoCard({
  demo,
  locale,
  cta,
}: {
  demo: Demo;
  locale: Locale;
  cta: string;
  basePath?: string;
}) {
  const href = demo.url || "#";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
      <div className="relative h-48 w-full overflow-hidden">
        {demo.preview ? (
          <Image
            src={demo.preview}
            alt={demo.title[locale]}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${getGradient(demo.slug)}`}>
            <span className="text-6xl font-bold text-white/20">
              {demo.title[locale][0]}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          {demo.badges?.map((badge) => (
            <span
              key={badge.text[locale]}
              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeColors[badge.color]}`}
            >
              {badge.text[locale]}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-ink">{demo.title[locale]}</h3>
        <p className="text-sm text-ink/70">{demo.description[locale]}</p>
        {demo.url && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-ocean"
          >
            {cta} →
          </a>
        )}
      </div>
    </div>
  );
}
