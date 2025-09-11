import { StaticImageData } from "next/image";

export interface IImageProps {
  ImageSrc: StaticImageData | string;
  ImageAlt: string;
  ImageAriaLabel: string;
}
