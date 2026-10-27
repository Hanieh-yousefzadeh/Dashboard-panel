import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import StoreProvider from "@/providers/StoreProvider";
import AuthStorage from "@/lib/authStorage";
import { ThemeProvider } from "@/components/themeprovider";
import CustomersStorage from "@/lib/customerStorage";
import VendorsStorage from "@/lib/vendorStorage";
import ProductStorage from "@/lib/productStorage";
import CategoriesStorage from "@/lib/categoryStorage";
import OrderStorage from "@/lib/orderStorage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dashboard Panel",
  description: "Dashboard Panel",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

export default async function RootLayout({children, params}: {
   children: React.ReactNode 
   params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <ThemeProvider>
              <AuthStorage />
              <CustomersStorage />
              <VendorsStorage />
              <ProductStorage />
              <CategoriesStorage />
              <OrderStorage />
              {children}
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}