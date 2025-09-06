import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Ali Hooshangi | Frontend Developer & Web Designer",
  description:
    "Discover Ali Hooshangi, a frontend developer and web designer with 6+ years of experience in building high-performance, SEO-optimized websites and web applications using Next.js, React.js, and WordPress.",
  keywords: [
    "Ali Hooshangi",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "WordPress",
    "SEO",
    "Web Designer",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Ali Hooshangi", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "About Us - Ali Hooshangi | Frontend Developer & Web Designer",
    description:
      "Discover Ali Hooshangi, a frontend developer and web designer with 6+ years of experience in building high-performance, SEO-optimized websites and web applications using Next.js, React.js, and WordPress.",
    url: "https://yourwebsite.com/about",
    siteName: "Ali Hooshangi Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/images/ali-Hooshangi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Ali Hooshangi | Frontend Developer & Web Designer",
    description:
      "Discover Ali Hooshangi, a frontend developer and web designer with 6+ years of experience in building high-performance, SEO-optimized websites and web applications using Next.js, React.js, and WordPress.",
    images: ["https://yourwebsite.com/images/ali-Hooshangi-og.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

const About = () => {
  return (
    <div className="max-md:px-4 max-md:py-2 w-full h-full flex">
      <div className="w-1/2 h-full">
        <div className="h-[72vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
          <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            About Me
          </h1>
          <p className="text-1 mb-4 max-md:text-xs">
            Hello, I&apos;m{" "}
            <strong className="font-semibold">Ali Hooshangi</strong>, a frontend
            developer and web designer with over{" "}
            <strong className="font-semibold">
              6 years of professional experience
            </strong>
            . My journey started in the tech world working with hardware,
            networking, and system troubleshooting, which gave me a deep
            understanding of how technology works behind the scenes. Later, I
            transitioned to web development, where I found my passion for
            creating{" "}
            <strong className="font-semibold">
              high-performance, responsive, and visually appealing websites
            </strong>{" "}
            that deliver seamless user experiences.
          </p>
          <p className="text-1 mb-4 max-md:text-xs">
            Throughout my career, I have continuously expanded my skill set,
            specializing in{" "}
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
            </strong>
            . I build scalable, maintainable, and high-performance web
            applications while also crafting custom{" "}
            <strong className="font-semibold">
              <Link
                href="https://wordpress.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
              >
                WordPress
              </Link>
            </strong>{" "}
            websites optimized for SEO and accessibility. My focus is on
            combining clean, modular code with creative design to create
            solutions that are functional, fast-loading, and enjoyable to use.
          </p>
          <h2 className="text-2xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            My Expertise
          </h2>
          <p className="text-1 mb-4 max-md:text-xs">
            I have delivered projects ranging from simple landing pages to
            complex React-based platforms. My expertise includes{" "}
            <strong className="font-semibold">performance optimization</strong>,{" "}
            <strong className="font-semibold">SEO best practices</strong>,{" "}
            <strong className="font-semibold">responsive design</strong>, and{" "}
            <strong className="font-semibold">user experience design</strong>. I
            integrate APIs, implement dynamic functionalities, and ensure every
            project meets modern accessibility and web standards.
          </p>
          <h2 className="text-2xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            Technologies & Skills
          </h2>
          <p className="text-1 mb-4 max-md:text-xs">
            My technical stack includes{" "}
            <strong className="font-semibold">
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
              >
                Next.js
              </Link>
            </strong>
            ,{" "}
            <strong className="font-semibold">
              <Link
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
              >
                React.js
              </Link>
            </strong>
            ,{" "}
            <strong className="font-semibold">
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
              >
                Tailwind CSS
              </Link>
            </strong>
            ,{" "}
            <strong className="font-semibold">
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
              >
                JavaScript/TypeScript
              </Link>
            </strong>
            ,{" "}
            <strong className="font-semibold">
              <Link
                href="https://wordpress.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
              >
                WordPress
              </Link>
            </strong>
            , and <strong className="font-semibold">SEO optimization</strong>. I
            follow modern workflows including version control, testing,
            deployment, and prioritize maintainable, reusable, and scalable code
            architectures.
          </p>
          <h2 className="text-2xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            My Philosophy
          </h2>
          <p className="text-1 mb-4 max-md:text-xs">
            I am passionate about mentoring junior developers, creating
            educational content, and sharing insights on web development trends,
            SEO, and performance optimization. I believe in continuous learning
            and adapting to emerging technologies to craft innovative and
            user-centered solutions.
          </p>
          <h2 className="text-2xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            My Goal
          </h2>
          <p className="text-1 mb-4 max-md:text-xs">
            My ultimate goal is to combine technical expertise, creativity, and
            best practices to deliver websites and applications that are fast,
            functional, and engaging. I am dedicated, detail-oriented, and
            committed to helping clients achieve meaningful and lasting digital
            experiences.
          </p>
        </div>
      </div>
      <div className="w-7 border-x h-full border-Appearance-Slate-700 p-2">
        <div className="w-full h-3 bg-Appearance-Slate-700" />
      </div>
      <div className="w-1/2 px-6"></div>
      <div className="w-7 border-l h-full border-Appearance-Slate-700 p-2">
        <div className="w-full h-3 bg-Appearance-Slate-700" />
      </div>
    </div>
  );
};

export default About;
