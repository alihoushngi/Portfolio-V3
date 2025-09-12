import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Ali Hooshangi | Frontend Developer | طراح و توسعه‌دهنده فرانت‌اند",
  description:
    "Ali Hooshangi – Experienced Frontend Developer & Web Designer | توسعه‌دهنده فرانت‌اند حرفه‌ای با تجربه در React, Next.js, WordPress, SEO و طراحی سایت‌های مدرن.",
  authors: [
    {
      name: "Ali Hooshangi",
      url: "https://portfolio-v2-orcin-phi.vercel.app/",
    },
  ],
  keywords: [
    "Ali Hooshangi",
    "Ali Houshangi",
    "علی هوشنگی",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Web Designer",
    "UI/UX Designer",
    "طراح وب",
    "توسعه‌دهنده فرانت‌اند",
    "سئو",
    "SEO",
    "پروژه وب",
    "پورتفولیو وب",
    "وب سایت شخصی",
    "freelance web developer",
  ],
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#312C85",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://portfolio-v2-orcin-phi.vercel.app/",
    siteName: "Ali Hooshangi Portfolio",
    title: "Ali Hooshangi | Frontend Developer",
    description:
      "Ali Hooshangi – Experienced Frontend Developer & Web Designer | توسعه‌دهنده فرانت‌اند حرفه‌ای با تجربه در React, Next.js, WordPress, SEO و طراحی سایت‌های مدرن.",
    images: [
      {
        url: "https://portfolio-v2-orcin-phi.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi Portfolio - Frontend Developer & Web Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hooshangi | Frontend Developer",
    description:
      "Ali Hooshangi – Experienced Frontend Developer & Web Designer | توسعه‌دهنده فرانت‌اند حرفه‌ای با تجربه در React, Next.js, WordPress, SEO و طراحی سایت‌های مدرن.",
    creator: "@AliHooshangi",
    images: ["https://portfolio-v2-orcin-phi.vercel.app/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};
