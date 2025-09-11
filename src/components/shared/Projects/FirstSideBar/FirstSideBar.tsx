"use client";

import { FirstSideBarItems } from "@/components/shared/About/FirstSideBar/FirstSideBarList";
import DropDown from "@/components/ui/DropDown/DropDown";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FirstSideBar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = window.matchMedia("(max-width: 768px)");
    setIsMobile(check.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    check.addEventListener("change", handler);
    return () => check.removeEventListener("change", handler);
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(isMobile ? false : true);
  }, [isMobile]);

  return (
    <div className="border-r border-Appearance-Slate-700 min-w-[14rem] md:min-h-full max-md:border-r-0">
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
