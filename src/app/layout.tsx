import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

import { FiraCodeFont, VazirFont } from "@/app/font";
import RegisterSW from "@/components/layout/RegisterSW";
import I18nProvider from "@/components/shared/Lang/I18n/I18nProvider";

import Layout from "@/components/layout/Layout";
import NoRightClick from "@/components/layout/NoRightClick";
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
      className={`${FiraCodeFont.variable} ${VazirFont.variable} dark:bg-slate-950`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F172B" />
        <meta
          name="google-site-verification"
          content="zpj4jbZ3DwkrSZ4zEAF67L7SLYR0H-GRhlGMZyXlsyg"
        />
        <link rel="icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <RegisterSW />
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <I18nProvider>
              <Layout>{children}</Layout>
              <NoRightClick />
            </I18nProvider>
          </ThemeProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
