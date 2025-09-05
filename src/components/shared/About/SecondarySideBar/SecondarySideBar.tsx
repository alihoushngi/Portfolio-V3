"use client";

import { SecondarySideBarList } from "@/components/shared/About/SecondarySideBar/SecondarySideBarList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SecondarySideBar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full px-6 py-4 text-5 flex flex-col justify-start items-start gap-7 border-r border-Appearance-Slate-700">
      {SecondarySideBarList.map((item, index) => {
        return (
          <Link key={index} href={item.link} aria-label={item.name}>
            {
              <item.icon
                className={`${pathname === item.link ? "text-Appearance-Slate-300" : "text-Appearance-Slate-500"} transition-all duration-200 ease-linear hover:text-Appearance-Slate-300`}
              />
            }
          </Link>
        );
      })}
    </div>
  );
};

export default SecondarySideBar;
