import { StaticImageData } from "next/image";

export interface IProjectCardProps {
  ProjectLink: string;
  ProjectImage: string | StaticImageData;
  ProjectDescription: string;
  ProjectTitle: string;
}
