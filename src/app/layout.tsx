import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata = {
  title: "pixel24 - Professional Web Solutions",
  description: "Landing pages, websites, and telegram bots for small businesses",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-icon.svg"
  }
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
