import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Переводимая metadata для всего сайта
export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();

  // helper, который безопасно достаёт строку из messages без any
  const t = (key: string): string => {
    const value = key
      .split(".")
      .reduce<unknown>((obj, k) => {
        if (
          obj &&
          typeof obj === "object" &&
          k in (obj as Record<string, unknown>)
        ) {
          return (obj as Record<string, unknown>)[k];
        }
        return undefined;
      }, messages as unknown);

    return typeof value === "string" ? value : "";
  };

  const title = t("seo.title") || "Absen";
  const description =
    t("seo.description") ||
    "Absen — профессиональные LED-решения и видеоэкраны.";

  return {
    title: {
      default: title,
      template: "%s | Absen",
    },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      // при желании можно добавить url и images
      // url: "https://example.com",
      // images: [{ url: "/images/seo/site-og-16x9.jpg", width: 1280, height: 720 }],
    },
  };
}

// RootLayout
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
