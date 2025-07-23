import Info from "@/components/ui/Info/info";
import Social from "@/components/ui/Social/Social";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start px-16 py-12 min-h-screen gap-6">
      <div className="flex justify-start items-start w-full gap-6">
        <Info />
        <Social />
        <div className="w-2/4 bg-gradient-to-b from-[#274354] to-[#0d2432] px-12 py-6 relative z-20 rounded-[40px] flex flex-col justify-center items-center h-[53vh]"></div>
      </div>
      <div className="flex justify-start items-start w-full gap-6">
        <div className="bg-gradient-to-b from-[#274354] to-[#0d2432] px-12 py-6 relative z-20 rounded-[40px] flex flex-col justify-center items-center w-1/2 h-[32vh]"></div>
        <div className="w-1/2 flex gap-6">
          <div className="bg-[#143061] px-12 py-6 relative z-20 rounded-[40px] flex flex-col justify-center items-center w-1/2 h-[32vh]"></div>
          <div className="bg-gradient-to-r from-[#802e2e] to-[#710e0e] px-12 py-6 relative z-20 rounded-[40px] flex flex-col justify-center items-center w-1/2 h-[32vh]"></div>
        </div>
      </div>
    </div>
  );
}
