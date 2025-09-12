import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Interests & Passions - Ali Hooshangi | Frontend Developer & Tech Enthusiast | علایق و سرگرمی‌ها علی هوشنگی",
  description:
    "Discover the interests and passions of Ali Hooshangi, including football, technology, video games, reading, travel, smart home projects, DIY electronics, and continuous learning. | علایق و سرگرمی‌های علی هوشنگی شامل فوتبال، فناوری، بازی‌های ویدیویی، مطالعه، سفر، پروژه‌های خانه هوشمند، الکترونیک DIY و یادگیری مستمر است.",
  authors: [
    { name: "Ali Hooshangi", url: "https://portfolio-v2-orcin-phi.vercel.app" },
  ],
  keywords: [
    "Ali Hooshangi",
    "Ali Houshangi",
    "علی هوشنگی",
    "علایق",
    "سرگرمی‌ها",
    "Interests",
    "Passions",
    "Football",
    "Soccer",
    "Technology",
    "Gaming",
    "Video Games",
    "Reading",
    "Books",
    "Travel",
    "Smart Home",
    "DIY Projects",
    "Electronics",
    "Mentoring",
    "Education",
    "Web Development",
    "Frontend Developer",
    "Next.js",
    "React.js",
    "WordPress",
  ],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title:
      "Interests & Passions - Ali Hooshangi | Frontend Developer & Tech Enthusiast",
    description:
      "Discover the interests and passions of Ali Hooshangi, including football, technology, video games, reading, travel, smart home projects, DIY electronics, and continuous learning. | علایق و سرگرمی‌های علی هوشنگی شامل فوتبال، فناوری، بازی‌های ویدیویی، مطالعه، سفر، پروژه‌های خانه هوشمند، الکترونیک DIY و یادگیری مستمر است.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/interests",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://portfolio-v2-orcin-phi.vercel.app/images/interests-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Interests & Passions | علایق و سرگرمی‌ها",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interests & Passions - Ali Hooshangi | Frontend Developer & Tech Enthusiast",
    description:
      "Discover the interests and passions of Ali Hooshangi, including football, technology, video games, reading, travel, smart home projects, DIY electronics, and continuous learning. | علایق و سرگرمی‌های علی هوشنگی شامل فوتبال، فناوری، بازی‌های ویدیویی، مطالعه، سفر، پروژه‌های خانه هوشمند، الکترونیک DIY و یادگیری مستمر است.",
    images: [
      "https://portfolio-v2-orcin-phi.vercel.app/images/interests-og.jpg",
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

const Interests = () => {
  return (
    <div className="interests h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
      <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
        My Interests & Passions
      </h1>

      <p className="text-1 mb-4 max-md:text-xs">
        Beyond web development and frontend design, I have a diverse range of
        interests that shape my life and work.{" "}
        <strong className="font-semibold">Football</strong> has been a lifelong
        passion, from playing in youth teams to following leagues and tactics
        closely. This sport has instilled in me a sense of teamwork, discipline,
        and strategic thinking.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        <strong className="font-semibold">Technology</strong> plays a central
        role in my life. I enjoy exploring new devices,{" "}
        <strong className="font-semibold">DIY electronics</strong>, and{" "}
        <strong className="font-semibold">smart home automation</strong>.
        Combining <strong className="font-semibold">hardware</strong> and{" "}
        <strong className="font-semibold">software</strong> to build tools that
        make everyday life easier is one of my favorite pursuits. Video games
        have also been a source of joy, helping me develop problem-solving
        skills, creativity, and reflexes.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        I am an avid reader, particularly fascinated by{" "}
        <strong className="font-semibold">history</strong>, technology, and
        design literature. Traveling to different cities across Iran has
        inspired me and expanded my perspective, allowing me to appreciate
        diverse architecture, culture, and{" "}
        <strong className="font-semibold">interior design</strong> styles.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        My curiosity drives me to continuously learn new skills, even outside my
        core expertise. I enjoy creating practical devices that enhance daily
        life, exploring new{" "}
        <strong className="font-semibold">technologies</strong>, and designing
        aesthetic yet functional solutions. Sharing knowledge through{" "}
        <strong className="font-semibold">mentoring</strong> and educational
        content is also central to my personal mission.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        Overall, my interests in{" "}
        <strong className="font-semibold">technology</strong>,{" "}
        <strong className="font-semibold">football</strong>,{" "}
        <strong className="font-semibold">gaming</strong>,{" "}
        <strong className="font-semibold">reading</strong>, and{" "}
        <strong className="font-semibold">travel</strong> define both my
        lifestyle and professional approach. I believe that curiosity,
        creativity, and continuous learning are essential for creating
        innovative solutions and a fulfilling life.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        If you want to learn more about the technologies I use in my projects,
        you can explore{" "}
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
        </strong>{" "}
        and{" "}
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
        .
      </p>
    </div>
  );
};

export default Interests;
