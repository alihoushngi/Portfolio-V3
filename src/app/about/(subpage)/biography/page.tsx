import { GalleryListEN } from "@/assets/list/GalleryList";
import ImageCard from "@/components/ui/ImageCard/ImageCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ali Hooshangi Biography | Frontend Developer & Web Designer | بیوگرافی علی هوشنگی",
  description:
    "Read the full biography of Ali Hooshangi, a frontend developer and web designer from Rasht, Iran. Explore his journey from childhood curiosity to professional expertise in web development, Next.js, React.js, WordPress, SEO, and Tailwind CSS. | بیوگرافی کامل علی هوشنگی، توسعه‌دهنده فرانت‌اند و طراح وب از رشت، ایران. از کنجکاوی‌های کودکی تا تخصص حرفه‌ای در توسعه وب، Next.js، React.js، WordPress، سئو و Tailwind CSS.",
  authors: [
    { name: "Ali Hooshangi", url: "https://portfolio-v2-orcin-phi.vercel.app" },
  ],
  keywords: [
    "Ali Hooshangi",
    "Ali Houshangi",
    "علی هوشنگی",
    "Biography",
    "بیوگرافی",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "WordPress",
    "Web Designer",
    "SEO",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Rasht",
    "Iran",
    "Portfolio",
    "طراح سایت",
    "توسعه‌دهنده فرانت‌اند",
    "وبسایت شخصی",
  ],
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "Ali Hooshangi Biography | Frontend Developer & Web Designer",
    description:
      "Read the full biography of Ali Hooshangi, a frontend developer and web designer from Rasht, Iran. Explore his journey from childhood curiosity to professional expertise in web development, Next.js, React.js, WordPress, SEO, and Tailwind CSS. | بیوگرافی کامل علی هوشنگی، توسعه‌دهنده فرانت‌اند و طراح وب از رشت، ایران.",
    url: "https://portfolio-v2-orcin-phi.vercel.app/biography",
    siteName: "Ali Hooshangi Portfolio",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://portfolio-v2-orcin-phi.vercel.app/images/ali-hooshangi-bio-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Biography | بیوگرافی علی هوشنگی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hooshangi Biography | Frontend Developer & Web Designer",
    description:
      "Read the full biography of Ali Hooshangi, a frontend developer and web designer from Rasht, Iran. Explore his journey from childhood curiosity to professional expertise in web development, Next.js, React.js, WordPress, SEO, and Tailwind CSS. | بیوگرافی کامل علی هوشنگی، توسعه‌دهنده فرانت‌اند و طراح وب از رشت، ایران.",
    images: [
      "https://portfolio-v2-orcin-phi.vercel.app/images/ali-hooshangi-bio-og.jpg",
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

const Biography = () => {
  return (
    <div className="max-md:px-4 max-md:py-2 w-full h-full flex max-md:flex-col">
      <div className="w-1/2 h-full max-md:w-full">
        <div className="biography h-[75vh] overflow-y-auto text-Appearance-Slate-400 px-6 text-left max-md:px-4 max-md:py-2">
          <h1 className="text-3xl font-bold mb-6 mt-4 max-md:mt-2 max-md:mb-4 text-Appearance-Slate-200 max-md:text-xl">
            Ali Hooshangi Biography
          </h1>

          <p className="text-1 mb-4 max-md:text-xs">
            My name is <strong className="font-semibold">Ali Hooshangi</strong>,
            born on
            <strong className="font-semibold"> August 7, 1999</strong> (16
            Mordad 1378) in
            <strong className="font-semibold"> Rasht, Iran</strong>. From an
            early age, curiosity and a sense of adventure have been inseparable
            parts of who I am. My inquisitive nature led me to explore
            everything around me, whether it was disassembling my toys or
            experimenting with electronics at home. This same curiosity fueled
            my love for video games and early interest in technology. I even
            remember a time when my parents tried to make me study, but I
            cleverly turned a simple power cable into a playful experiment while
            enjoying my favorite games.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            Growing up, I developed a passion for{" "}
            <strong className="font-semibold">football</strong> and joined youth
            teams in Tehran, including the{" "}
            <strong className="font-semibold">Esteghlal Tehran academy</strong>.
            While I enjoyed school, my childhood was full of hands-on
            experimentation and creative problem-solving. This mindset naturally
            led me towards technology and engineering.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            During high school, my family moved back to{" "}
            <strong className="font-semibold">Rasht</strong>, where I continued
            my studies and started focusing more seriously on technology.
            Although football remained a part of my life, I shifted my academic
            path towards{" "}
            <strong className="font-semibold">computer science</strong> thanks
            to my father’s guidance. This decision introduced me to like-minded
            friends and deepened my interest in programming and hardware.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            After high school, I scored an impressive{" "}
            <strong className="font-semibold">rank of 1500</strong> in the
            national university entrance exam in Iran, which allowed me to join
            the{" "}
            <strong className="font-semibold">
              Computer Software branch at Chamran University of Technology,
              Rasht
            </strong>
            . I completed my associate degree (fouq-e-diplom) there and later
            pursued my bachelors studies while challenging myself to live
            independently, even briefly moving to{" "}
            <strong className="font-semibold">Birjand</strong>. This period was
            significant not only academically but also personally, as I met my
            loving wife.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            Upon returning to Rasht, I completed my{" "}
            <strong className="font-semibold">bachelors degree</strong> and got
            married. Later, I served in the military and, upon completing my
            service, moved to <strong className="font-semibold">Tehran</strong>{" "}
            to start my professional career in web development. Today, I live
            independently, continuously learning and growing in the field I
            love.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            My professional journey began with hands-on work in{" "}
            <strong className="font-semibold">hardware</strong> and{" "}
            <strong className="font-semibold">networking</strong>, which gave me
            a strong foundation for understanding how systems operate.
            Eventually, I transitioned to{" "}
            <strong className="font-semibold">web development</strong> and
            design, focusing on creating{" "}
            <strong className="font-semibold">
              high-performance, responsive, and SEO-friendly websites
            </strong>
            . I specialize in modern technologies like{" "}
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
            , delivering scalable, maintainable, and visually appealing digital
            experiences.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            Beyond development, I am deeply passionate about{" "}
            <strong className="font-semibold">
              mentoring young developers
            </strong>
            , producing{" "}
            <strong className="font-semibold">educational content</strong>, and
            sharing insights on web performance, modern development practices,
            and <strong className="font-semibold">SEO strategies</strong>. My
            goal is to combine creativity, technical expertise, and real-world
            experience to build solutions that leave a lasting impact on users
            and clients alike.
          </p>

          <p className="text-1 mb-4 max-md:text-xs">
            I continue to embrace curiosity, innovation, and continuous learning
            as the guiding principles of my life and career, just as I did from
            the very first day I explored the world around me.
          </p>
        </div>
      </div>
      <div className="w-7 border-x h-full border-Appearance-Slate-700 p-2 max-md:hidden">
        <div className="w-full h-3 bg-Appearance-Slate-700" />
      </div>
      <div className="w-1/2 max-w-full px-6 flex max-md:px-2 flex-wrap h-[75vh] overflow-auto gap-4 py-4 max-md:w-full max-md:h-full">
        {GalleryListEN.map((item, index) => {
          return (
            <ImageCard
              key={index}
              ImageSrc={item.src}
              ImageAlt={item.alt}
              ImageAriaLabel={item.ariaLabel}
            />
          );
        })}
      </div>
      <div className="w-7 border-l h-full border-Appearance-Slate-700 p-2 max-md:hidden">
        <div className="w-full h-3 bg-Appearance-Slate-700" />
      </div>
    </div>
  );
};

export default Biography;
