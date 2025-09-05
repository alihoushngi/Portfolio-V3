import { IFirstSideBarItemsTypes } from "@/components/shared/About/FirstSideBar/FirstSideBarTypes";
import { FaJs } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { RiNextjsFill } from "react-icons/ri";
import { SiPreact } from "react-icons/si";

export const FirstSideBarItems: IFirstSideBarItemsTypes[] = [
  {
    title: "professional",
    link: "/about/professional-info",
    subItem: [
      {
        title: "js",
        link: "/about/professional-info/js",
        icon: FaJs,
        iconColor: "text-yellow-400",
      },
      {
        title: "react",
        link: "/about/professional-info/react",
        icon: SiPreact,
        iconColor: "text-blue-400",
      },
      {
        title: "nextjs",
        link: "/about/professional-info/nextjs",
        icon: RiNextjsFill,
        iconColor: "text-slate-300",
      },
    ],
  },
  {
    title: "personal",
    link: "/about",
    subItem: [
      {
        title: "bio",
        link: "/about/biography",
        icon: GoFileDirectoryFill,
        iconColor: "text-Secondary-Rose-400",
      },
      {
        title: "interests",
        link: "/about/interests",
        icon: GoFileDirectoryFill,
        iconColor: "text-teal-400",
      },
      {
        title: "education",
        link: "/about/education",
        icon: GoFileDirectoryFill,
        iconColor: "text-indigo-500",
      },
    ],
  },
  {
    title: "hobbies",
    link: "/about/hobbies",
  },
];
