import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";
import { siteConfig } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "pixel24 — Biznesingiz uchun professional veb-sayt",
    template: "%s | pixel24",
  },
  description:
    "Kichik va o'rta bizneslar uchun zamonaviy saytlar, telegram botlar va veb-ilovalar. Landing sahifalar $99 dan. Domen bepul.",
  keywords: [
    "veb-sayt yasash",
    "landing sahifa",
    "sayt yasash narxi",
    "telegram bot",
    "veb-ilova",
    "sayt buyurtma berish",
    "pixel24",
    "web sayt uzbekistan",
  ],
  authors: [{ name: "pixel24" }],
  creator: "pixel24",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: "ru_RU",
    siteName: "pixel24",
    title: "pixel24 — Biznesingiz uchun professional veb-sayt",
    description:
      "Kichik va o'rta bizneslar uchun zamonaviy saytlar, telegram botlar va veb-ilovalar. Landing sahifalar $99 dan.",
    url: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "pixel24 — Biznesingiz uchun professional veb-sayt",
    description:
      "Kichik va o'rta bizneslar uchun zamonaviy saytlar, telegram botlar va veb-ilovalar.",
  },
  alternates: {
    canonical: siteConfig.baseUrl,
    languages: {
      uz: siteConfig.baseUrl,
      ru: `${siteConfig.baseUrl}/ru`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EBGC6GJM3D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EBGC6GJM3D');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
