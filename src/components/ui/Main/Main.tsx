import bgBlurs from "@/assets/Images/Main/background blurs.svg";
import SnakeGameBoard from "@/components/ui/Main/components/SnakeGameBoard";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-full flex justify-between items-center max-md:relative md:max-w-[1200px] md:mx-auto">
      <div className="w-1/2 max-md:w-full max-md:px-6 h-full flex justify-center items-center flex-col gap-16 z-20">
        <div className="mx-auto max-md:w-full max-md:flex max-md:flex-col max-md:gap-2">
          <span className="text-3 text-Appearance-Slate-400 font-light">
            Hi all. I am
          </span>
          <h1 className="text-9 text-Appearance-Slate-50 font-normal text-wrap max-md:text-7 max-md:leading-none">
            Ali Hooshangi
          </h1>
          <h2 className="text-6 text-indigo-500 max-md:text-3">
            {">"} Front-end developer
          </h2>
        </div>
        <div className="mx-auto flex flex-col justify-start items-start gap-3 text-2 text-Appearance-Slate-400 font-light">
          <span className="max-md:hidden">
            {"//"} complete the game to continue
          </span>
          <span className="max-md:text-xs">
            {"//"} find my profile on Github:
          </span>
          <div className="flex justify-center items-start text-2 gap-3 max-md:flex-wrap max-md:justify-start max-md:text-xs font-light">
            <span className="text-indigo-500">const</span>
            <span className="text-teal-400">githubLink</span>
            <span className="text-white">=</span>
            <Link
              href="https://github.com/alihoushngi"
              target="_blank"
              aria-label="see ali hooshangi github profile"
              className="text-Secondary-Rose-300_Main text-wrap"
            >
              “https://github.com/alihoushngi”
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={bgBlurs}
        alt="background blurs"
        className="absolute top-0 w-full h-full md:hidden max-md:object-cover max-md:blur-3xl z-10"
      />
      <div className="w-1/2 h-3/4 relative max-md:hidden flex justify-center items-center">
        <Image
          src={bgBlurs}
          alt="background blurs"
          className="absolute top-0 blur-3xl w-full object-cover h-full z-10"
        />
        <SnakeGameBoard />
      </div>
    </div>
  );
};

export default Main;
