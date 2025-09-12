import ProjectGallery from "@/components/ui/ProjectGallery/ProjectGallery";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Professional Expertise - Ali Hooshangi | Frontend Developer & Web Designer | تجربه حرفه‌ای علی هوشنگی",
  description:
    "Explore the professional expertise of Ali Hooshangi, a frontend developer and web designer with 6+ years of experience in Next.js, React.js, Tailwind CSS, WordPress, and SEO-optimized web development. | تجربه حرفه‌ای علی هوشنگی شامل توسعه فرانت‌اند با Next.js، React.js، Tailwind CSS، طراحی وب‌سایت با WordPress و توسعه بهینه برای SEO است.",
  keywords: [
    "Ali Hooshangi",
    "علی هوشنگی",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "WordPress",
    "Tailwind CSS",
    "SEO",
    "Web Designer",
    "JavaScript",
    "TypeScript",
    "Performance Optimization",
    "Accessibility",
    "Web Development",
    "طراحی وب",
    "توسعه وب",
    "تجربه حرفه‌ای",
  ],
  authors: [
    { name: "Ali Hooshangi", url: "https://portfolio-v2-orcin-phi.vercel.app" },
  ],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title:
      "Professional Expertise - Ali Hooshangi | Frontend Developer & Web Designer",
    description:
      "Explore the professional expertise of Ali Hooshangi, a frontend developer and web designer with 6+ years of experience in Next.js, React.js, Tailwind CSS, WordPress, and SEO-optimized web development. | تجربه حرفه‌ای علی هوشنگی شامل توسعه فرانت‌اند با Next.js، React.js، Tailwind CSS، طراحی وب‌سایت با WordPress و توسعه بهینه برای SEO است.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/professional-info",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://portfolio-v2-orcin-phi.vercel.app/images/professional-info-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Professional Expertise | تجربه حرفه‌ای",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Expertise - Ali Hooshangi | Frontend Developer & Web Designer",
    description:
      "Explore the professional expertise of Ali Hooshangi, a frontend developer and web designer with 6+ years of experience in Next.js, React.js, Tailwind CSS, WordPress, and SEO-optimized web development. | تجربه حرفه‌ای علی هوشنگی شامل توسعه فرانت‌اند با Next.js، React.js، Tailwind CSS، طراحی وب‌سایت با WordPress و توسعه بهینه برای SEO است.",
    images: [
      "https://portfolio-v2-orcin-phi.vercel.app/images/professional-info-og.jpg",
    ],
    site: "@AliHooshangi",
    creator: "@AliHooshangi",
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

const ProfessionalInfo = () => {
  return (
    <div className="max-md:px-4 max-md:py-2 w-full h-full flex max-md:flex-col">
      <div className="w-1/2 h-full max-md:w-full">
        <div className="professional-info h-[74vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
          <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            Professional Expertise
          </h1>

          <p className="text-1 mb-4 max-md:text-xs">
            I have extensive experience in frontend technologies, including{" "}
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
            , and{" "}
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
            . I also design and develop custom{" "}
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
            websites, ensuring they are scalable, maintainable, and aligned with
            modern web standards.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            My development workflow incorporates{" "}
            <strong className="font-semibold">version control with Git</strong>,{" "}
            <strong className="font-semibold">
              unit and integration testing
            </strong>
            , and{" "}
            <strong className="font-semibold">
              CI/CD deployment strategies
            </strong>{" "}
            to ensure reliable, maintainable, and production-ready projects. I
            prioritize{" "}
            <strong className="font-semibold">SEO optimization</strong>,{" "}
            <strong className="font-semibold">performance tuning</strong>, and{" "}
            <strong className="font-semibold">accessibility compliance</strong>{" "}
            in all projects to provide the best user experience possible.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            Over the years, I have worked on a wide range of projects, including
            high-traffic web applications, e-commerce platforms, corporate
            websites, and interactive dashboards. I focus on creating clean,
            modular, and reusable code that not only meets client requirements
            but is also easy to maintain and scale for future updates.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            Beyond writing code, I actively contribute to the web development
            community through mentoring junior developers, producing educational
            content, and sharing insights about web performance, modern
            workflows, and SEO best practices. My goal is to stay at the
            forefront of technology trends and continuously improve my craft to
            deliver innovative, user-centric solutions.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            I aim to combine technical expertise, creativity, and best practices
            to build websites and applications that provide meaningful,
            engaging, and high-performing experiences for both clients and end
            users. From developing fast-loading React apps to designing
            responsive WordPress solutions, my focus is always on delivering
            excellence and long-lasting digital experiences.
          </p>
        </div>
      </div>
      <div className="w-7 border-x h-full border-Appearance-Slate-700 p-2 max-md:hidden">
        <div className="w-full h-3 bg-Appearance-Slate-700" />
      </div>
      <ProjectGallery />
      <div className="w-7 border-l h-full border-Appearance-Slate-700 p-2 max-md:hidden">
        <div className="w-full h-3 bg-Appearance-Slate-700" />
      </div>
    </div>
  );
};

export default ProfessionalInfo;
