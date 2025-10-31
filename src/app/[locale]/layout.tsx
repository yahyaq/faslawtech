import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import routing from "@/i18n/routing";

// === Fonts ===
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// === Metadata ===
export const metadata: Metadata = {
  title: "FAS Law & Tech",
  description: "Expert legal services merging tradition with technology.",
};

// === Combined Locale-Aware Root Layout ===
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // ⬇️ Await params (Next.js 15+)
  const { locale } = await params;

  // ✅ Validate locale using next-intl’s helper
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // ✅ You can optionally load translations if you’re using messages
  // import { getMessages } from "next-intl/server";
  // const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Global Intl Provider + Smooth Scroll */}
        <NextIntlClientProvider locale={locale}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
