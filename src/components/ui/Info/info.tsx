import infoImage from "@/assets/Images/MyAnimateImage2.webp";
import Image from "next/image";

const Info = () => {
  return (
    <div className="bg-[#11324D] bg-gradient-to-b from-[#162938] to-[#131824] px-14 pt-4 pb-9 mt-28 relative z-20 rounded-[50px] flex flex-col justify-center items-center w-1/3">
      <Image
        src={infoImage}
        alt="my image"
        aria-label="my image"
        className="w-56 -mt-32"
        width={1080}
        loading="lazy"
      />
      <h1 className="font-bold text-2xl mt-5 uppercase w-full text-left">
        Ali Hooshangi
      </h1>
      <div className="flex flex-col justify-start items-start w-full mt-1 gap-1">
        <div className="text-left flex gap-4 font-light text-sm">
          <span>🎈</span>7 . 8 . 1999
        </div>
        <div className="text-left flex gap-4 font-light text-sm">
          <span>💻</span>Frontend Developer
        </div>
        <div className="text-left flex gap-4 font-light text-sm">
          <span>🔥</span>NextJS
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full mt-1 gap-1">
        <div className="text-left flex gap-4 font-light text-sm">
          <span>📍</span>Tehran , Iran
        </div>
      </div>
    </div>
  );
};

export default Info;
