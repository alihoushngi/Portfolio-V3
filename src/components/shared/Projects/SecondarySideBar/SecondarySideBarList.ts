import { ISecSideListItems } from "@/components/shared/About/SecondarySideBar/SecondarySideBarTypes";
import { AiFillCode } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiGamepadFill } from "react-icons/ri";

export const SecondarySideBarList: ISecSideListItems[] = [
  {
    name: "personal info page",
    link: "/about/professional-info",
    icon: AiFillCode,
  },
  {
    name: "about me page",
    link: "/about",
    icon: BiSolidUserCircle,
  },
  {
    name: "my hobbies page",
    link: "/about/hobbies",
    icon: RiGamepadFill,
  },
];
