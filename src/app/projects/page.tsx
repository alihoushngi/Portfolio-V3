import ProjectsGallery from "@/components/shared/Projects/ProjectsGallery/ProjectsGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Ali Hooshangi",
  description:
    "نمونه کارهای علی هوشنگی، توسعه‌دهنده فرانت‌اند، شامل پروژه‌های حرفه‌ای Next.js، React.js، وردپرس، Tailwind CSS و وب‌سایت‌های بهینه‌شده برای عملکرد و دسترسی. مشاهده پروژه‌ها در حالت شبکه‌ای یا لیست.",
  keywords: [
    "Ali Hooshangi",
    "علی هوشنگی",
    "Frontend Developer",
    "توسعه‌دهنده فرانت‌اند",
    "React.js",
    "Next.js",
    "وردپرس",
    "WordPress",
    "Tailwind CSS",
    "طراحی وب",
    "نمونه کار",
    "پروژه‌ها",
    "UI Development",
    "توسعه وب",
    "بهینه‌سازی عملکرد",
    "دسترس‌پذیری",
  ],
  authors: [
    {
      name: "Ali Hooshangi",
      url: "https://portfolio-v2-orcin-phi.vercel.app/",
    },
  ],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "Projects - Ali Hooshangi | نمونه کارهای فرانت‌اند",
    description:
      "نمونه کارهای علی هوشنگی، توسعه‌دهنده فرانت‌اند، شامل پروژه‌های حرفه‌ای Next.js، React.js، وردپرس، Tailwind CSS و وب‌سایت‌های بهینه‌شده برای عملکرد و دسترسی. مشاهده پروژه‌ها در حالت شبکه‌ای یا لیست.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/projects",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://yourwebsite.com/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "نمونه کارهای علی هوشنگی - Frontend Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Ali Hooshangi | نمونه کارهای فرانت‌اند",
    description:
      "نمونه کارهای علی هوشنگی، توسعه‌دهنده فرانت‌اند، شامل پروژه‌های حرفه‌ای Next.js، React.js، وردپرس، Tailwind CSS و وب‌سایت‌های بهینه‌شده برای عملکرد و دسترسی. مشاهده پروژه‌ها در حالت شبکه‌ای یا لیست.",
    images: ["https://yourwebsite.com/images/projects-og.jpg"],
    site: "@AliHooshangi",
    creator: "@AliHooshangi",
  },
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
