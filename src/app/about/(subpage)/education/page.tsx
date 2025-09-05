import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Education - Ali Hooshangi | Academic Background & Achievements",
  description:
    "Explore the comprehensive educational journey of Ali Hooshangi, from primary and secondary school in Tehran and Rasht, to earning a diploma and bachelor's degree in Computer Engineering. Learn how his academic experiences shaped his technical expertise in software, hardware, web development, and modern technologies.",
  keywords: [
    "Ali Hooshangi",
    "Education",
    "Academic Journey",
    "Computer Engineering",
    "Software Engineering",
    "Chamran University",
    "Ibn Hesam University",
    "Rasht",
    "Birjand",
    "Frontend Development",
    "Next.js",
    "React.js",
    "WordPress",
    "Technology Skills",
  ],
  authors: [{ name: "Ali Hooshangi", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Education - Ali Hooshangi | Academic Background & Achievements",
    description:
      "Explore the comprehensive educational journey of Ali Hooshangi, from primary and secondary school in Tehran and Rasht, to earning a diploma and bachelor's degree in Computer Engineering. Learn how his academic experiences shaped his technical expertise in software, hardware, web development, and modern technologies.",
    url: "https://yourwebsite.com/education",
    siteName: "Ali Hooshangi Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/images/education-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Education Background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education - Ali Hooshangi | Academic Background & Achievements",
    description:
      "Explore the comprehensive educational journey of Ali Hooshangi, from primary and secondary school in Tehran and Rasht, to earning a diploma and bachelor's degree in Computer Engineering. Learn how his academic experiences shaped his technical expertise in software, hardware, web development, and modern technologies.",
    images: ["https://yourwebsite.com/images/education-og.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

const Education = () => {
  return (
    <div className="education h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-4 text-justify">
      <h1 className="text-4xl font-bold mb-6 mt-4 text-Appearance-Slate-200">
        My Education
      </h1>

      <p className="text-1 mb-4">
        I began my academic journey in Tehran, attending{" "}
        <strong className="font-semibold">Osveh Primary School</strong> and
        <strong className="font-semibold"> Feyzieh Middle School</strong>, where
        curiosity, exploration, and learning were central to my daily life.
        While balancing schoolwork, I actively participated in youth football
        teams, developing discipline, teamwork, and goal-setting skills that
        complemented my academic development.
      </p>

      <p className="text-1 mb-4">
        For high school, I moved to Rasht and enrolled in{" "}
        <strong className="font-semibold">Valiasr High School</strong> with a
        focus on <strong className="font-semibold">computer science</strong>.
        This period shaped my early technical skills, sparked my passion for
        software and hardware, and connected me with like-minded peers who
        shared my interests in technology.
      </p>

      <p className="text-1 mb-4">
        I continued my higher education at{" "}
        <strong className="font-semibold">
          <Link
            href="https://p-rasht.nus.ac.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Chamran University of Technology, Rasht
          </Link>
        </strong>{" "}
        in the <strong className="font-semibold">Software Engineering</strong>{" "}
        program, earning my associate degree. To further my education and
        independence, I briefly attended{" "}
        <strong className="font-semibold">
          <Link
            href="https://ebnehesam.nus.ac.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            Ibn Hesam University, Birjand
          </Link>
        </strong>{" "}
        for one semester before returning to Chamran University to complete my
        {"bachelor's"} degree over the following three semesters.
      </p>

      <p className="text-1 mb-4">
        During my academic journey, I combined hands-on experience in{" "}
        <strong className="font-semibold">hardware</strong> and{" "}
        <strong className="font-semibold">networking</strong> with software
        development, building a strong foundation for modern web development.
        This prepared me to work professionally with technologies such as{" "}
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
            href="https://wordpress.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-linear duration-200 hover:underline text-Appearance-Slate-200 hover:text-Appearance-Slate-100"
          >
            WordPress
          </Link>
        </strong>
        , enabling me to develop high-performance, scalable, and SEO-optimized
        websites and applications.
      </p>

      <p className="text-1 mb-4">
        My educational path reflects a balance between academic achievement,
        technical curiosity, and practical experience, laying the foundation for
        a career in technology that merges creativity, problem-solving, and
        hands-on expertise.
      </p>
    </div>
  );
};

export default Education;
