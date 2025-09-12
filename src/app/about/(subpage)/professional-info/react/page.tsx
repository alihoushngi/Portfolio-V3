import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "React Journey - Ali Hooshangi | Learning React & TypeScript | مسیر یادگیری React و TypeScript",
  description:
    "Discover Ali Hooshangi's journey in learning React.js and TypeScript through online courses on Roocket, Udemy, and YouTube, and building his first professional project: the Pikaap dashboard for transportation in Mazandaran. | مسیر یادگیری علی هوشنگی در React و TypeScript شامل دوره‌های آنلاین Roocket، Udemy و YouTube و ساخت اولین پروژه حرفه‌ای داشبورد پیکاپ در مازندران است.",
  keywords: [
    "Ali Hooshangi",
    "علی هوشنگی",
    "React.js",
    "TypeScript",
    "Frontend Development",
    "React Leaflet",
    "Roocket",
    "Udemy",
    "YouTube",
    "Pikaap",
    "Dashboard",
    "Mazandaran",
    "Web Development",
    "Pezhvak Dadeh Khazar",
    "توسعه وب",
    "مسیر یادگیری",
  ],
  authors: [
    { name: "Ali Hooshangi", url: "https://portfolio-v2-orcin-phi.vercel.app" },
  ],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "React Journey - Ali Hooshangi | Learning React & TypeScript",
    description:
      "Discover Ali Hooshangi's journey in learning React.js and TypeScript through online courses on Roocket, Udemy, and YouTube, and building his first professional project: the Pikaap dashboard for transportation in Mazandaran. | مسیر یادگیری علی هوشنگی در React و TypeScript شامل دوره‌های آنلاین Roocket، Udemy و YouTube و ساخت اولین پروژه حرفه‌ای داشبورد پیکاپ در مازندران است.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/react",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://portfolio-v2-orcin-phi.vercel.app/images/react-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - React Learning Journey | مسیر یادگیری React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Journey - Ali Hooshangi | Learning React & TypeScript",
    description:
      "Discover Ali Hooshangi's journey in learning React.js and TypeScript through online courses on Roocket, Udemy, and YouTube, and building his first professional project: the Pikaap dashboard for transportation in Mazandaran. | مسیر یادگیری علی هوشنگی در React و TypeScript شامل دوره‌های آنلاین Roocket، Udemy و YouTube و ساخت اولین پروژه حرفه‌ای داشبورد پیکاپ در مازندران است.",
    images: ["https://portfolio-v2-orcin-phi.vercel.app/images/react-og.jpg"],
    site: "@AliHooshangi",
    creator: "@AliHooshangi",
  },
};

const ReactJourney = () => {
  return (
    <div className="react-journey h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
      <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
        My React & TypeScript Journey
      </h1>

      <p className="text-1 mb-4 max-md:text-xs">
        I started learning <strong className="font-semibold">React.js</strong>{" "}
        and <strong className="font-semibold">TypeScript</strong> through a
        combination of online courses and self-study. I mainly used resources
        like{" "}
        <strong className="font-semibold">
          <Link
            href="https://roocket.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Roocket
          </Link>
        </strong>
        , Udemy, and YouTube tutorials to strengthen my skills and understand
        best practices.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        While working at{" "}
        <strong className="font-semibold">
          <Link
            href="https://pdade.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Pezhvak Dadeh Khazar
          </Link>
        </strong>
        , I applied my knowledge in a real-world project, creating my first
        professional dashboard for{" "}
        <strong className="font-semibold">Pikaap</strong>, a transportation
        platform in Mazandaran province. This project involved building an
        interactive and responsive admin panel, integrating{" "}
        <strong className="font-semibold">React Leaflet</strong> for mapping
        features, and using{" "}
        <strong className="font-semibold">TypeScript</strong> to ensure type
        safety and maintainable code.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        This experience gave me hands-on exposure to frontend architecture,
        component-based design, state management, and the practical challenges
        of delivering a professional React application. It laid the foundation
        for building scalable, maintainable, and high-performance web apps in my
        future projects.
      </p>
    </div>
  );
};

export default ReactJourney;
