import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Journey - Ali Hooshangi | Learning React & TypeScript",
  description:
    "Discover Ali Hooshangi's journey in learning React.js and TypeScript through online courses on Roocket, Udemy, and YouTube, and building his first professional project: the Pikaap dashboard for transportation in Mazandaran.",
  keywords: [
    "Ali Hooshangi",
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
  ],
  authors: [{ name: "Ali Hooshangi", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "React Journey - Ali Hooshangi | Learning React & TypeScript",
    description:
      "Discover Ali Hooshangi's journey in learning React.js and TypeScript through online courses on Roocket, Udemy, and YouTube, and building his first professional project: the Pikaap dashboard for transportation in Mazandaran.",
    url: "https://yourwebsite.com/react",
    siteName: "Ali Hooshangi Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/images/react-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - React Learning Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Journey - Ali Hooshangi | Learning React & TypeScript",
    description:
      "Discover Ali Hooshangi's journey in learning React.js and TypeScript through online courses on Roocket, Udemy, and YouTube, and building his first professional project: the Pikaap dashboard for transportation in Mazandaran.",
    images: ["https://yourwebsite.com/images/react-og.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

const ReactJourney = () => {
  return (
    <div className="react-journey h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-4 text-justify">
      <h1 className="text-4xl font-bold mb-6 mt-4 text-Appearance-Slate-200">
        My React & TypeScript Journey
      </h1>

      <p className="text-1 mb-4">
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

      <p className="text-1 mb-4">
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

      <p className="text-1 mb-4">
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
