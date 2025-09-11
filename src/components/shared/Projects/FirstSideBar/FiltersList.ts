import { IFiltersTypes } from "@/components/shared/Projects/FirstSideBar/Filters.type";
import { FaJs } from "react-icons/fa6";
import { LiaWordpress } from "react-icons/lia";
import { RiNextjsFill } from "react-icons/ri";
import { SiPreact } from "react-icons/si";

export const FiltersItems: IFiltersTypes[] = [
  {
    title: "Categories",
    subItem: [
      {
        title: "js",
        icon: FaJs,
        iconColor: "text-yellow-400",
      },
      {
        title: "react",
        icon: SiPreact,
        iconColor: "text-blue-400",
      },
      {
        title: "nextjs",
        icon: RiNextjsFill,
        iconColor: "text-slate-300",
      },
      {
        title: "wordpress",
        icon: LiaWordpress,
        iconColor: "text-blue-500",
      },
    ],
  },
];
