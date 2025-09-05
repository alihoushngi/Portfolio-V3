import { IconType } from "react-icons/lib";

export interface IFirstSideBarItemsTypes {
  title: string;
  link: string;
  subItem?: {
    title: string;
    link: string;
    icon?: IconType;
    iconColor?: string;
  }[];
}
