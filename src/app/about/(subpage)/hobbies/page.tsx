import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies & Interests - Ali Hooshangi | Personal Passions & Activities",
  description:
    "Discover the hobbies and personal interests of Ali Hooshangi, including football, technology, computer games, travel, home automation, and creative projects combining hardware and software.",
  keywords: [
    "Ali Hooshangi",
    "Hobbies",
    "Interests",
    "Football",
    "Technology",
    "Travel",
    "Computer Games",
    "Home Automation",
    "Creative Projects",
    "DIY",
    "Web Development",
    "Next.js",
    "React.js",
    "WordPress",
  ],
  authors: [{ name: "Ali Hooshangi", url: "https://yourwebsite.com" }],
  openGraph: {
    title:
      "Hobbies & Interests - Ali Hooshangi | Personal Passions & Activities",
    description:
      "Discover the hobbies and personal interests of Ali Hooshangi, including football, technology, computer games, travel, home automation, and creative projects combining hardware and software.",
    url: "https://yourwebsite.com/hobbies",
    siteName: "Ali Hooshangi Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/images/hobbies-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Hooshangi - Hobbies and Interests",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hobbies & Interests - Ali Hooshangi | Personal Passions & Activities",
    description:
      "Discover the hobbies and personal interests of Ali Hooshangi, including football, technology, computer games, travel, home automation, and creative projects combining hardware and software.",
    images: ["https://yourwebsite.com/images/hobbies-og.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

const Hobbies = () => {
  return (
    <div className="hobbies h-[70vh] overflow-y-auto text-Appearance-Slate-400 px-4 text-justify">
      <h1 className="text-4xl font-bold mb-6 mt-4 text-Appearance-Slate-200">
        My Hobbies & Interests
      </h1>

      <p className="text-1 mb-4">
        My hobbies reflect a blend of physical activity, technology, creativity,
        and continuous learning. Since childhood, I have been passionate about{" "}
        <strong className="font-semibold">football</strong>, participating in
        youth teams in Tehran, which taught me teamwork, discipline, and
        perseverance. Alongside sports, my curiosity for{" "}
        <strong className="font-semibold">technology</strong> and{" "}
        <strong className="font-semibold">computer games</strong> has been a
        constant driving force in my life.
      </p>

      <p className="text-1 mb-4">
        I enjoy creating projects that merge{" "}
        <strong className="font-semibold">hardware and software</strong> to
        develop useful tools that simplify daily life. This includes home
        automation systems and other smart solutions that enhance comfort and
        efficiency. I also love{" "}
        <strong className="font-semibold">traveling</strong> to different cities
        in Iran, exploring culture, history, and local innovations.
      </p>

      <p className="text-1 mb-4">
        In addition, I am deeply interested in{" "}
        <strong className="font-semibold">reading books</strong>, learning about{" "}
        <strong className="font-semibold">history</strong>, and expanding my
        knowledge in areas beyond my current expertise. I constantly seek to
        learn new skills, experiment with innovative ideas, and even explore
        areas that are seemingly unrelated to my professional work, all of which
        fuel my creativity and problem-solving abilities.
      </p>

      <p className="text-1 mb-4">
        Sharing knowledge and teaching others is another passion of mine. I
        often engage in mentoring and creating educational content, combining my
        interests in <strong className="font-semibold">technology</strong> and{" "}
        <strong className="font-semibold">learning</strong> to inspire and help
        others grow.
      </p>

      <p className="text-1 mb-4">
        Overall, my hobbies and interests are diverse but interconnected,
        reflecting my love for exploration, creativity, and continuous personal
        growth.
      </p>
    </div>
  );
};

export default Hobbies;
