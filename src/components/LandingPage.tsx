import { getDictionary, type Locale } from "@/content/dictionaries";
import { demos, LANDING_DEMO_COUNT } from "@/content/demos";
import { siteConfig } from "@/content/site";
import DemoCard from "./DemoCard";
import { OutlineButton, PrimaryButton } from "./Buttons";
import ContactForm from "./ContactForm";
import SiteHeader from "./SiteHeader";
import FaqAccordion from "./FaqAccordion";

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    landing: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    website: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    bot: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    app: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  };
  return icons[type] || icons.landing;
};

export default function LandingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const basePath = locale === "ru" ? "/ru" : "";

  return (
    <div className="min-h-screen bg-hero-radial">
      <div className="grid-sheen">
        <SiteHeader locale={locale} dict={dict} basePath={basePath} />
        <main className="space-y-24 pb-20">
          {/* Hero Section */}
          <section className="container pt-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink">
                  {dict.hero.badge}
                </span>
                <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
                  {dict.hero.title}
                </h1>
                <p className="text-lg text-ink/70">{dict.hero.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryButton href="#contact">{dict.hero.ctaPrimary}</PrimaryButton>
                  <OutlineButton href="#demos">{dict.hero.ctaSecondary}</OutlineButton>
                </div>
                <p className="text-sm text-ink/60">{dict.hero.trust}</p>
              </div>
              <div className="glass relative overflow-hidden rounded-[32px] p-8 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/10" />
                <div className="relative space-y-6">
                  <div className="rounded-2xl bg-ink p-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-lime">{dict.hero.badge}</p>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-3xl font-semibold">$99</span>
                      <span className="text-sm text-white/60">- $199</span>
                    </div>
                    <p className="text-sm text-white/70">{dict.pricing.domainIncluded}</p>
                  </div>
                  <div className="grid gap-4">
                    {dict.steps.items.map((item) => (
                      <div key={item.title} className="rounded-2xl bg-white px-5 py-4 border border-ink/5">
                        <p className="text-sm font-semibold text-ink">{item.title}</p>
                        <p className="text-sm text-ink/70">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="container space-y-8 scroll-mt-20">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-ink">{dict.services.title}</h2>
              <p className="text-sm text-ink/60">{dict.services.subtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dict.services.items.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[28px] bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/20 text-ink">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Demos Section */}
          <section id="demos" className="container space-y-8 scroll-mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-ink">{dict.demos.title}</h2>
                <p className="text-sm text-ink/60">{dict.demos.subtitle}</p>
              </div>
              <a href={`${basePath}/demos`} className="text-sm font-semibold text-ocean">
                {dict.demos.viewAll} →
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {demos.slice(0, LANDING_DEMO_COUNT).map((demo) => (
                <DemoCard
                  key={demo.slug}
                  demo={demo}
                  locale={locale}
                  cta={dict.demos.viewDemo}
                />
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="container space-y-8 scroll-mt-20">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-ink">{dict.pricing.title}</h2>
              <p className="text-sm text-ink/60">{dict.pricing.subtitle}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Starter - Highlighted */}
              <div className="relative rounded-[32px] bg-ink p-8 text-white shadow-card">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
                  {dict.pricing.starter.popular}
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  {dict.pricing.starter.name}
                </p>
                <h3 className="mt-3 text-4xl font-semibold">{dict.pricing.starter.price}</h3>
                <p className="mt-2 text-sm text-white/70">{dict.pricing.starter.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {dict.pricing.starter.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lime/90"
                  >
                    {dict.pricing.cta}
                  </a>
                </div>
              </div>

              {/* Business */}
              <div className="rounded-[32px] bg-white p-8 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
                  {dict.pricing.business.name}
                </p>
                <h3 className="mt-3 text-4xl font-semibold text-ink">{dict.pricing.business.price}</h3>
                <p className="mt-2 text-sm text-ink/70">{dict.pricing.business.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink/70">
                  {dict.pricing.business.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PrimaryButton href="#contact" className="w-full justify-center">
                    {dict.pricing.cta}
                  </PrimaryButton>
                </div>
              </div>

              {/* Custom */}
              <div className="rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
                  {dict.pricing.custom.name}
                </p>
                <h3 className="mt-3 text-4xl font-semibold text-ink">{dict.pricing.custom.price}</h3>
                <p className="mt-2 text-sm text-ink/70">{dict.pricing.custom.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink/70">
                  {dict.pricing.custom.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-ocean" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <OutlineButton href="#contact" className="w-full justify-center">
                    {dict.pricing.cta}
                  </OutlineButton>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="container space-y-8 scroll-mt-20">
            <h2 className="text-3xl font-semibold text-ink">{dict.faq.title}</h2>
            <FaqAccordion items={dict.faq.items} />
          </section>

          {/* Contact Section */}
          <section id="contact" className="container space-y-8 scroll-mt-20">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-ink">{dict.contact.title}</h2>
              <p className="text-sm text-ink/60">{dict.contact.subtitle}</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-card">
                <h3 className="text-xl font-semibold text-ink">{dict.contact.quick}</h3>
                <div className="mt-6 space-y-4 text-sm text-ink/70">
                  <a className="flex items-center gap-3 font-semibold text-ocean" href={siteConfig.telegramUrl}>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ocean/10">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.665 3.717a1.5 1.5 0 0 0-1.55-.27L3.4 9.76c-1.1.43-1.09 1.97.02 2.38l4.07 1.5 1.6 5.13c.27.86 1.33 1.08 1.9.4l2.28-2.73 4.65 3.4c.74.54 1.78.13 1.98-.78l2.88-13.11a1.5 1.5 0 0 0-.12-1.22ZM8.7 13.2l8.64-5.33-7.05 6.52-.27 2.97-1.2-3.82-3.02-1.1 9.9-3.85Z" />
                      </svg>
                    </span>
                    {dict.contact.telegramLabel}
                  </a>
                  <div className="rounded-2xl border border-ink/10 bg-white px-4 py-3">
                    <p className="text-xs uppercase tracking-widest text-ink/40">
                      {dict.contact.phoneLabel}
                    </p>
                    <p className="text-base font-semibold text-ink">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <div className="rounded-2xl bg-ink p-5 text-sm text-white/80">
                    <div className="flex items-baseline justify-between">
                      <span className="text-white font-semibold">{dict.pricing.starter.name}</span>
                      <span className="text-lime font-semibold">{dict.pricing.starter.price}</span>
                    </div>
                    <p className="mt-1 text-white/60">{dict.contact.starterSummary}</p>
                  </div>
                  <div className="rounded-2xl bg-lime/20 p-5 text-sm">
                    <div className="flex items-baseline justify-between">
                      <span className="text-ink font-semibold">{dict.pricing.business.name}</span>
                      <span className="text-ink font-semibold">{dict.pricing.business.price}</span>
                    </div>
                    <p className="mt-1 text-ink/60">{dict.contact.businessSummary}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] bg-white p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-ink">{dict.contact.formTitle}</h3>
                <div className="mt-6">
                  <ContactForm
                    locale={locale}
                    labels={{
                      name: dict.contact.name,
                      phone: dict.contact.phone,
                      message: dict.contact.message,
                      submit: dict.contact.submit,
                      success: dict.contact.success,
                      error: dict.contact.error
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
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
