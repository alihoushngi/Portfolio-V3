import { IconType } from "react-icons/lib";

export interface IDropDownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  pathname?: string;
  subItem?: {
    title: string;
    link: string;
    icon?: IconType;
    iconColor?: string;
  }[];
}
