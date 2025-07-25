import GithubIcon from "@/assets/icons/Github.webp";
import InstagramIcon from "@/assets/icons/Instagram.webp";
import MailIcon from "@/assets/icons/MailIcon.webp";
import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div className="w-2/4 flex flex-wrap justify-start gap-4 relative z-20">
      <Link
        href="mailto:aliiihoushangiii@gmail.com"
        rel="noopener noreferrer"
        aria-label="send me a message in email"
        className="w-[52%] relative z-20 bg-[#143061] rounded-[35px] p-6 overflow-hidden flex flex-col gap-10"
      >
        <div className="absolute -top-8 -right-8 bg-gradient-to-b from-white to-[#BDCFF5] opacity-30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-start justify-between z-10 relative w-full">
          <Image
            src={MailIcon}
            alt="mail icon"
            aria-label="mail icon"
            width={1080}
            className="w-48 z-10 relative"
            loading="lazy"
          />
        </div>
        <div className="-mt-16 ps-1 z-20 relative flex flex-col gap-2 w-full">
          <span className="text-base font-semibold">Email</span>
          <h2 className="font-normal text-sm">aliiihoushangiii@gmail.com</h2>
        </div>
      </Link>
      <Link
        href="mailto:aliihooshangi@gmail.com"
        rel="noopener noreferrer"
        aria-label="send me a message in email"
        className="w-[44%] relative z-20 bg-gradient-to-r from-[#802e2e] to-[#710e0e] rounded-[35px] p-6 overflow-hidden flex flex-col gap-10 justify-between"
      >
        <div className="absolute -top-8 -right-8 bg-gradient-to-r from-white to-[#FFD1E3] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-start justify-between z-10 relative w-full">
          <Image
            src={InstagramIcon}
            alt="mail icon"
            aria-label="mail icon"
            width={1080}
            className="w-12 z-10 relative"
            loading="lazy"
          />
        </div>
        <div className="-mt-16 ps-1 z-20 relative flex flex-col gap-2 w-full">
          <span className="text-base font-semibold">Instagram</span>
          <h2 className="font-normal text-sm">@aliihooshangi</h2>
        </div>
      </Link>
      <Link
        href="mailto:aliihooshangi@gmail.com"
        rel="noopener noreferrer"
        aria-label="send me a message in email"
        className="w-full relative bg-gradient-to-b from-[#25262F] to-[#0C0D16] rounded-[35px] p-6 overflow-hidden flex flex-col gap-10 justify-between"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white to-[#CDCDCD] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-start justify-between z-10 relative gap-2">
          <Image
            src={GithubIcon}
            alt="mail icon"
            aria-label="mail icon"
            width={1080}
            className="w-56 z-10 relative"
            loading="lazy"
          />
        </div>
        <div className="-mt-16 ps-1 z-20 relative flex flex-col gap-2">
          <span className="text-base font-semibold">Github</span>
          <h2 className="font-normal text-sm">@aliihooshangi</h2>
        </div>
      </Link>
    </div>
  );
};

export default Social;
