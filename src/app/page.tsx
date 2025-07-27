import About from "@/components/ui/About/About";
import Info from "@/components/ui/Info/info";
import Project from "@/components/ui/Project/Project";
import Social from "@/components/ui/Social/Social";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start px-16 py-12 min-h-screen gap-6">
      <div className="flex justify-start items-stretch w-full gap-6">
        <Info />
        <Social />
        <About />
      </div>
      <div className="flex justify-start items-start w-full gap-6">
        <Project />
        <div className="w-1/2 flex gap-6">
          <div className="bg-gradient-to-bl from-[#221d37] to-[#0a0920] px-12 py-6 relative z-20 rounded-[40px] flex flex-col justify-center items-center w-1/2 h-[32vh]"></div>
          <div className="bg-gradient-to-r from-[#0f2723] to-[#102925] px-12 py-6 relative z-20 rounded-[40px] flex flex-col justify-center items-center w-1/2 h-[32vh]"></div>
        </div>
      </div>
    </div>
  );
}
