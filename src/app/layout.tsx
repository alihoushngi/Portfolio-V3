import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

import { FiraCodeFont, VazirFont } from "@/app/font";
import RegisterSW from "@/components/layout/RegisterSW";
import I18nProvider from "@/components/shared/I18n/I18nProvider";

import "@/styles/globals.css";
import { defaultMetadata } from "@/utils/seo";
import { Suspense } from "react";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${FiraCodeFont.variable} ${VazirFont.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <RegisterSW />
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <I18nProvider>{children}</I18nProvider>
          </ThemeProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
