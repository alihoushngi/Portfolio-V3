import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const FooterDesktop = () => {
  return (
    <div className="max-md:hidden w-full border-t border-Appearance-Slate-700 text-Appearance-Slate-400 text-1 flex justify-between items-center">
      <div className="flex justify-start items-center">
        <span className="border-r border-Appearance-Slate-700 py-4 px-7">
          find me in:
        </span>
        <Link
          href="https://www.linkedin.com/in/alihoushangi/"
          target="_blank"
          className="text-3 text-Appearance-Slate-400 border-r border-Appearance-Slate-700 py-4 px-5 transition-all duration-200 ease-in-out w-fit hover:text-Primary-Orange-300_Main"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="mailto:aliihooshangi@gmail.com"
          target="_blank"
          className="text-3 text-Appearance-Slate-400 border-r border-Appearance-Slate-700 py-4 px-5 transition-all duration-200 ease-in-out w-fit hover:text-Primary-Orange-300_Main"
        >
          <BiLogoGmail />
        </Link>
      </div>
      <Link
        href="https://github.com/alihoushngi"
        target="_blank"
        className="flex justify-center items-center gap-3 border-l border-Appearance-Slate-700 py-4 px-7 transition-all duration-200 ease-in-out text-Appearance-Slate-400 hover:text-Primary-Orange-300_Main"
      >
        @alihoushngi
        <FaGithub className="text-3 " />
      </Link>
    </div>
  );
};

export default FooterDesktop;
