import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Journey - Ali Hooshangi | Advanced Frontend Development",
  description:
    "Follow Ali Hooshangi's journey mastering Next.js from version 10 to the latest, including projects at Hira.dev, OnlineSalamat, Dayereh Salamat, SpadPost, Rahabusiness, and his personal portfolio, creating a custom Next.js CLI, and extensive experience with Redux, Tailwind, TypeScript, and state management.",
  keywords: [
    "Ali Hooshangi",
    "Next.js",
    "Next.js CLI",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Zustand",
    "Axios",
    "Next SEO",
    "React Toastify",
    "React Icons",
    "Frontend Development",
    "Web Development",
    "Hira.dev",
    "OnlineSalamat",
    "Dayereh Salamat",
    "SpadPost",
    "Rahabusiness",
    "Portfolio",
  ],
  authors: [
    {
      name: "Ali Hooshangi",
      url: "https://portfolio-v2-orcin-phi.vercel.app/",
    },
  ],
  openGraph: {
    title: "Next.js Journey - Ali Hooshangi | Advanced Frontend Development",
    description:
      "Follow Ali Hooshangi's journey mastering Next.js from version 10 to the latest, including projects at Hira.dev, OnlineSalamat, Dayereh Salamat, SpadPost, Rahabusiness, and his personal portfolio, creating a custom Next.js CLI, and extensive experience with Redux, Tailwind, TypeScript, and state management.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/nextjs",
    siteName: "Ali Hooshangi Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/images/nextjs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Next.js Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Journey - Ali Hooshangi | Advanced Frontend Development",
    description:
      "Follow Ali Hooshangi's journey mastering Next.js from version 10 to the latest, including projects at Hira.dev, OnlineSalamat, Dayereh Salamat, SpadPost, Rahabusiness, and his personal portfolio, creating a custom Next.js CLI, and extensive experience with Redux, Tailwind, TypeScript, and state management.",
    images: ["https://yourwebsite.com/images/nextjs-og.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

const NextJSJourney = () => {
  return (
    <div className="nextjs-journey h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-4 text-justify max-md:text-left max-md:px-0">
      <h1 className="text-4xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
        My Next.js Journey
      </h1>

      <p className="text-1 mb-4 max-md:text-xs">
        I began learning <strong className="font-semibold">Next.js</strong> via{" "}
        <strong className="font-semibold">
          <Link
            href="https://roocket.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Roocket
          </Link>
        </strong>{" "}
        and self-studied further during my military service. I applied my skills
        in projects at{" "}
        <strong>
          <Link
            href="https://hira.dev/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Hira.dev
          </Link>
        </strong>
        ,{" "}
        <strong>
          <Link
            href="https://branding.onlinesalamat.ir/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            OnlineSalamat Branding
          </Link>
        </strong>
        ,{" "}
        <strong>
          <Link
            href="https://dayereh-salamat.ir/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Dayereh Salamat
          </Link>
        </strong>
        ,{" "}
        <strong>
          <Link
            href="https://spadpost.ir/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            SpadPost
          </Link>
        </strong>
        ,{" "}
        <strong>
          <Link
            href="https://rahabusiness.com/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Rahabusiness
          </Link>
        </strong>
        , and my own portfolio{" "}
        <strong>
          <Link
            href="https://portfolio-v2-orcin-phi.vercel.app/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            here
          </Link>
        </strong>
        , progressively improving my expertise with both{" "}
        <strong>Page Router</strong> and <strong>App Router</strong>.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        I created a custom{" "}
        <strong className="font-semibold">Next.js CLI</strong> that scaffolds
        projects with a modern stack, including:
      </p>

      <ul className="list-disc list-inside mb-4 text-1">
        <li>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Next.js
          </Link>{" "}
          – React framework for production
        </li>
        <li>
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            TypeScript
          </Link>{" "}
          – Strongly typed JavaScript
        </li>
        <li>
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Tailwind CSS
          </Link>{" "}
          – Utility-first CSS
        </li>
        <li>
          <Link
            href="https://github.com/pacocoursey/next-themes"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            next-themes
          </Link>{" "}
          – Dark/light mode support
        </li>
        <li>
          <Link
            href="https://redux-toolkit.js.org/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Redux Toolkit
          </Link>{" "}
          – Modern state management
        </li>
        <li>
          <Link
            href="https://zustand-demo.pmnd.rs/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Zustand
          </Link>{" "}
          – Lightweight state management
        </li>
        <li>
          <Link
            href="https://axios-http.com/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Axios
          </Link>{" "}
          – HTTP client
        </li>
        <li>
          <Link
            href="https://www.npmjs.com/package/dotenv"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            dotenv
          </Link>{" "}
          – Env management
        </li>
        <li>
          <Link
            href="https://eslint.org/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            ESLint
          </Link>{" "}
          +{" "}
          <Link
            href="https://prettier.io/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Prettier
          </Link>{" "}
          – Linting & formatting
        </li>
        <li>
          <Link
            href="https://typicode.github.io/husky"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Husky
          </Link>{" "}
          +{" "}
          <Link
            href="https://github.com/okonet/lint-staged"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Lint-Staged
          </Link>{" "}
          – Git hooks
        </li>
        <li>
          <Link
            href="https://github.com/garmeeh/next-seo"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            next-seo
          </Link>{" "}
          – SEO utilities
        </li>
        <li>
          <Link
            href="https://fkhadra.github.io/react-toastify/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            React Toastify
          </Link>{" "}
          – Notifications
        </li>
        <li>
          <Link
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            React Icons
          </Link>{" "}
          – Icons library
        </li>
      </ul>

      <p className="text-1 mb-4 max-md:text-xs">
        My hands-on experience now spans multiple Next.js versions from 10 to
        the latest, mastering SSR, SSG, ISR, API routes, dynamic routing, and
        performance optimization, allowing me to build scalable, maintainable,
        and SEO-friendly applications.
      </p>
    </div>
  );
};

export default NextJSJourney;
