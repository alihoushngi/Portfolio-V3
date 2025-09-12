"use client";

import { ProjectsEn } from "@/assets/list/ProjectList";
import GridProjectGallery from "@/components/ui/ProjectGallery/Views/GridProjectGallery";
import ListProjectGallery from "@/components/ui/ProjectGallery/Views/ListProjectGallery";
import { useProjectViewStore } from "@/store/projectView";
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

const ProjectsPage = () => {
  const view = useProjectViewStore((state) => state.projectView.view);

  const formattedProjects = ProjectsEn.map((p) => ({
    ProjectImage: p.img,
    ProjectTitle: p.title,
    ProjectDescription: p.description,
    ProjectLink: p.link,
    Category: p.Category,
  }));

  if (view === "grid") {
    return (
      <div className="w-full p-4 max-md:p-2 overflow-auto max-h-[82vh]">
        <GridProjectGallery list={formattedProjects} />
      </div>
    );
  } else if (view === "list") {
    return (
      <div className="w-full p-4 max-md:p-2 overflow-auto max-h-[82vh]">
        <ListProjectGallery list={formattedProjects} />
      </div>
    );
  }
};

export default ProjectsPage;
