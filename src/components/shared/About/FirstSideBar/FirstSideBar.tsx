"use client";

import { FirstSideBarItems } from "@/components/shared/About/FirstSideBar/FirstSideBarList";
import DropDown from "@/components/ui/DropDown/DropDown";
import { usePathname } from "next/navigation";
import { useState } from "react";

const FirstSideBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-r border-Appearance-Slate-700 min-w-[12.5rem]">
      {FirstSideBarItems.map((item, index) => {
        const match =
          pathname === item.link ||
          (item.subItem && item.subItem.some((sub) => pathname === sub.link));

        if (match) {
          return (
            <DropDown
              key={index}
              isOpen={isOpen}
              title={item.title}
              setIsOpen={setIsOpen}
              subItem={item.subItem && item.subItem}
              pathname={pathname}
            />
          );
        }
      })}
    </div>
  );
};

export default FirstSideBar;
