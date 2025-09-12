import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hobbies & Interests - Ali Hooshangi | Personal Passions & Activities | علایق و سرگرمی‌ها علی هوشنگی",
  description:
    "Discover the hobbies and personal interests of Ali Hooshangi, including football, technology, computer games, travel, home automation, creative projects combining hardware and software, reading, history, and mentoring. | علایق و سرگرمی‌های علی هوشنگی شامل فوتبال، فناوری، بازی‌های کامپیوتری، سفر، خانه هوشمند، پروژه‌های خلاقانه ترکیبی از سخت‌افزار و نرم‌افزار، مطالعه، تاریخ و آموزش است.",
  authors: [
    { name: "Ali Hooshangi", url: "https://portfolio-v2-orcin-phi.vercel.app" },
  ],
  keywords: [
    "Ali Hooshangi",
    "Ali Houshangi",
    "علی هوشنگی",
    "Hobbies",
    "Interests",
    "علایق",
    "سرگرمی‌ها",
    "Football",
    "Soccer",
    "Technology",
    "Travel",
    "Computer Games",
    "Home Automation",
    "Creative Projects",
    "DIY",
    "Mentoring",
    "Education",
    "Web Development",
    "Next.js",
    "React.js",
    "WordPress",
  ],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title:
      "Hobbies & Interests - Ali Hooshangi | Personal Passions & Activities",
    description:
      "Discover the hobbies and personal interests of Ali Hooshangi, including football, technology, computer games, travel, home automation, creative projects combining hardware and software, reading, history, and mentoring. | علایق و سرگرمی‌های علی هوشنگی شامل فوتبال، فناوری، بازی‌های کامپیوتری، سفر، خانه هوشمند، پروژه‌های خلاقانه ترکیبی از سخت‌افزار و نرم‌افزار، مطالعه، تاریخ و آموزش است.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/hobbies",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://portfolio-v2-orcin-phi.vercel.app/images/hobbies-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Hobbies & Interests | علایق و سرگرمی‌ها",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hobbies & Interests - Ali Hooshangi | Personal Passions & Activities",
    description:
      "Discover the hobbies and personal interests of Ali Hooshangi, including football, technology, computer games, travel, home automation, creative projects combining hardware and software, reading, history, and mentoring. | علایق و سرگرمی‌های علی هوشنگی شامل فوتبال، فناوری، بازی‌های کامپیوتری، سفر، خانه هوشمند، پروژه‌های خلاقانه ترکیبی از سخت‌افزار و نرم‌افزار، مطالعه، تاریخ و آموزش است.",
    images: ["https://portfolio-v2-orcin-phi.vercel.app/images/hobbies-og.jpg"],
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

const Hobbies = () => {
  return (
    <div className="hobbies h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
      <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
        My Hobbies & Interests
      </h1>

      <p className="text-1 mb-4 max-md:text-xs">
        My hobbies reflect a blend of physical activity, technology, creativity,
        and continuous learning. Since childhood, I have been passionate about{" "}
        <strong className="font-semibold">football</strong>, participating in
        youth teams in Tehran, which taught me teamwork, discipline, and
        perseverance. Alongside sports, my curiosity for{" "}
        <strong className="font-semibold">technology</strong> and{" "}
        <strong className="font-semibold">computer games</strong> has been a
        constant driving force in my life.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        I enjoy creating projects that merge{" "}
        <strong className="font-semibold">hardware and software</strong> to
        develop useful tools that simplify daily life. This includes home
        automation systems and other smart solutions that enhance comfort and
        efficiency. I also love{" "}
        <strong className="font-semibold">traveling</strong> to different cities
        in Iran, exploring culture, history, and local innovations.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        In addition, I am deeply interested in{" "}
        <strong className="font-semibold">reading books</strong>, learning about{" "}
        <strong className="font-semibold">history</strong>, and expanding my
        knowledge in areas beyond my current expertise. I constantly seek to
        learn new skills, experiment with innovative ideas, and even explore
        areas that are seemingly unrelated to my professional work, all of which
        fuel my creativity and problem-solving abilities.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        Sharing knowledge and teaching others is another passion of mine. I
        often engage in mentoring and creating educational content, combining my
        interests in <strong className="font-semibold">technology</strong> and{" "}
        <strong className="font-semibold">learning</strong> to inspire and help
        others grow.
      </p>

      <p className="text-1 mb-4 max-md:text-xs">
        Overall, my hobbies and interests are diverse but interconnected,
        reflecting my love for exploration, creativity, and continuous personal
        growth.
      </p>
    </div>
  );
};

export default Hobbies;
