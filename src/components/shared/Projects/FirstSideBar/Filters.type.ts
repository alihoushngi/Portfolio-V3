import { IconType } from "react-icons/lib";

export interface IFiltersTypes {
  title: string;
  subItem?: {
    title: string;
    icon?: IconType;
    iconColor?: string;
  }[];
}
