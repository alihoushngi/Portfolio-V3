import { IFirstSideBarItemsTypes } from "@/components/shared/About/FirstSideBar/FirstSideBarTypes";
import { GoFileDirectoryFill } from "react-icons/go";

export const FirstSideBarItems: IFirstSideBarItemsTypes[] = [
  {
    title: "professional",
    link: "/about/professional-info",
    subItem: [
      {
        title: "js",
        link: "/about/professional-info/js",
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
    subItem: [
      {
        title: "hobbies",
        link: "/about/hobbies",
      },
    ],
  },
];
