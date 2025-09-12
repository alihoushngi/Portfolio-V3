import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "JavaScript Journey - Ali Hooshangi | Learning HTML, CSS & JS | مسیر یادگیری JavaScript",
  description:
    "Explore Ali Hooshangi's journey in learning JavaScript, HTML, CSS, Tailwind, and Bootstrap starting in 1400, including online resources like CSS-Tricks, MegaJS, YouTube tutorials, and Udemy courses, with practical exercises and projects. | مسیر یادگیری علی هوشنگی در JavaScript، HTML، CSS، Tailwind و Bootstrap از سال 1400 با استفاده از منابع آنلاین مثل CSS-Tricks، MegaJS، ویدیوهای یوتیوب و دوره‌های Udemy همراه با تمرین‌ها و پروژه‌های عملی.",
  keywords: [
    "Ali Hooshangi",
    "علی هوشنگی",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Learning JavaScript",
    "Frontend Development",
    "Online Courses",
    "CSS-Tricks",
    "MegaJS",
    "YouTube Tutorials",
    "Udemy",
    "Zero to Mastery",
    "مسیر یادگیری",
    "توسعه وب",
  ],
  authors: [{ name: "Ali Hooshangi", url: "https://yourwebsite.com" }],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "JavaScript Journey - Ali Hooshangi | Learning HTML, CSS & JS",
    description:
      "Explore Ali Hooshangi's journey in learning JavaScript, HTML, CSS, Tailwind, and Bootstrap starting in 1400, including online resources like CSS-Tricks, MegaJS, YouTube tutorials, and Udemy courses, with practical exercises and projects. | مسیر یادگیری علی هوشنگی در JavaScript، HTML، CSS، Tailwind و Bootstrap از سال 1400 با استفاده از منابع آنلاین مثل CSS-Tricks، MegaJS، ویدیوهای یوتیوب و دوره‌های Udemy همراه با تمرین‌ها و پروژه‌های عملی.",
    url: "https://yourwebsite.com/js",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://yourwebsite.com/images/js-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - JavaScript Learning Journey | مسیر یادگیری JS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Journey - Ali Hooshangi | Learning HTML, CSS & JS",
    description:
      "Explore Ali Hooshangi's journey in learning JavaScript, HTML, CSS, Tailwind, and Bootstrap starting in 1400, including online resources like CSS-Tricks, MegaJS, YouTube tutorials, and Udemy courses, with practical exercises and projects. | مسیر یادگیری علی هوشنگی در JavaScript، HTML، CSS، Tailwind و Bootstrap از سال 1400 با استفاده از منابع آنلاین مثل CSS-Tricks، MegaJS، ویدیوهای یوتیوب و دوره‌های Udemy همراه با تمرین‌ها و پروژه‌های عملی.",
    images: ["https://yourwebsite.com/images/js-og.jpg"],
    site: "@AliHooshangi",
    creator: "@AliHooshangi",
  },
};

const JS = () => {
  return (
    <div className="js-journey h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
      <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
        My JavaScript & Frontend Journey
      </h1>

      <p className="text-1 mb-4 max-md:text-xs">
        My journey in web development started in 1400 with learning{" "}
        <strong className="font-semibold">HTML</strong>,{" "}
        <strong className="font-semibold">CSS</strong>, and{" "}
        <strong className="font-semibold">JavaScript</strong>. I primarily used
        online resources like{" "}
        <strong className="font-semibold">
          <Link
            href="https://css-tricks.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            CSS-Tricks
          </Link>
        </strong>{" "}
        and searched extensively on{" "}
        <strong className="font-semibold">YouTube</strong> to grasp the
        fundamentals.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        Later, I joined{" "}
        <strong className="font-semibold">
          <Link
            href="https://nilasoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Nilasoft
          </Link>
        </strong>
        , where I continued learning JavaScript with platforms like{" "}
        <strong className="font-semibold">
          <Link
            href="https://megajs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            MegaJS
          </Link>
        </strong>
        , YouTube tutorials, and the Udemy course{" "}
        <strong className="font-semibold">
          <Link
            href="https://www.udemy.com/course/zero-to-mastery-javascript/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Zero to Mastery JS
          </Link>
        </strong>
        .
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        Alongside JavaScript, I learned{" "}
        <strong className="font-semibold">Tailwind CSS</strong> and{" "}
        <strong className="font-semibold">Bootstrap</strong> through their
        official websites and YouTube tutorials, practicing responsive design
        and modern UI development.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        I built numerous practice projects to reinforce my skills, experimenting
        with DOM manipulation, interactive elements, and small web applications.
        These exercises formed a solid foundation for my later work in{" "}
        <strong className="font-semibold">
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Next.js
          </Link>
        </strong>{" "}
        and{" "}
        <strong className="font-semibold">
          <Link
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            React.js
          </Link>
        </strong>{" "}
        development.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        This structured approach of combining online tutorials, practical
        exercises, and mentorship helped me grow from a beginner to a confident
        frontend developer, capable of creating responsive, interactive, and
        optimized web applications.
      </p>
    </div>
  );
};

export default JS;
