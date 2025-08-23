import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const FooterMobile = () => {
  return (
    <div className="md:hidden w-full border-t border-Appearance-Slate-700 text-Appearance-Slate-400 text-1 flex justify-between items-center">
      <span className="border-r border-Appearance-Slate-700 py-4 px-7 text-nowrap">
        find me in:
      </span>
      <Link
        href="https://www.linkedin.com/in/alihoushangi/"
        target="_blank"
        className="text-3 text-Appearance-Slate-400 border-r border-Appearance-Slate-700 transition-all duration-200 ease-in-out hover:text-Primary-Orange-300_Main w-full text-center flex justify-center items-center py-4"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="mailto:aliihooshangi@gmail.com"
        target="_blank"
        className="text-3 text-Appearance-Slate-400 border-r border-Appearance-Slate-700 transition-all duration-200 ease-in-out hover:text-Primary-Orange-300_Main w-full text-center flex justify-center items-center py-4"
      >
        <BiLogoGmail />
      </Link>
      <Link
        href="https://github.com/alihoushngi"
        target="_blank"
        className="text-3 text-Appearance-Slate-400 transition-all duration-200 ease-in-out hover:text-Primary-Orange-300_Main w-full text-center flex justify-center items-center py-4"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default FooterMobile;
