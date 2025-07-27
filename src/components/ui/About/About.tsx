import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div className="w-2/4 bg-gradient-to-b from-[#172832] to-[#0a1d29] px-12 py-6 relative z-20 rounded-[40px] flex flex-col h-[53vh]">
      <h3 className="text-2xl font-bold mb-2 uppercase">More Than Just Code</h3>
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-sm">
          Hi, I’m Ali Houshangi — a Frontend Developer with over 6 years of
          experience in building high-performance, user-friendly websites. I
          specialize in React.js, Next.js, and Tailwind CSS, with a strong focus
          on clean code, SEO optimization, and seamless user experience.
        </p>
        <p className="text-sm">
          My journey in tech started in 2017 through hardware and networking,
          but I soon found my passion in web development. Since then, I’ve
          worked with startups and digital agencies to create everything from
          custom WordPress websites to modern, scalable web apps. I enjoy
          turning ideas into smooth, responsive interfaces and collaborating
          with teams to bring great digital products to life.
        </p>
        <Link
          href={"/about"}
          className="p-2 px-5 transition-all duration-300 ease-linear w-full flex justify-between items-center mt-1 border rounded-lg border-gray-600 bg-gray-800 hover:px-3 hover:bg-gray-950"
        >
          <span>Read More</span>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default About;
