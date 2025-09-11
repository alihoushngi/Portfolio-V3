import { IImageProps } from "@/components/ui/ImageCard/ImageCard.type";
import Image from "next/image";
import { FC } from "react";

const ImageCard: FC<IImageProps> = ({ ImageSrc, ImageAlt, ImageAriaLabel }) => {
  return (
    <div className="flex flex-col w-[48%] justify-start items-start gap-4 bg-Appearance-Slate-700 rounded-lg p-4 hover:bg-Appearance-Slate-800 transition-all ease-linear duration-200 max-md:gap-2">
      <Image
        src={ImageSrc}
        alt={ImageAlt}
        aria-label={ImageAriaLabel}
        width={700}
        height={700}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
