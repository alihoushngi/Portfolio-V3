"use client";

import { SecondarySideBarList } from "@/components/shared/About/SecondarySideBar/SecondarySideBarList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SecondarySideBar = () => {
  const pathname = usePathname();
  return (
    <div className="md:min-h-full px-6 py-4 text-5 flex flex-col justify-start items-start gap-7 border-r border-Appearance-Slate-700 max-md:flex-row max-md:gap-4 max-md:text-3 max-md:px-4 max-md:py-4 max-md:border-r-0 max-md:border-b">
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
