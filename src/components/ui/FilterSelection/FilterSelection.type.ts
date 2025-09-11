import { IconType } from "react-icons/lib";

export interface IFilterSelectionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subItem?: {
    title: string;
    icon?: IconType;
    iconColor?: string;
  }[];
  onFilterChange: (value: string) => void;
  selectedCategories: string[];
}
