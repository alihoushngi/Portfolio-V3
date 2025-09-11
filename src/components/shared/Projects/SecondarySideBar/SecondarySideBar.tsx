"use client";

import { useResponsiveProjectView } from "@/utils/useResponsiveProjectView";
import { HiOutlineViewList, HiViewGrid } from "react-icons/hi";

const SecondarySideBar = () => {
  const { view, setProjectView } = useResponsiveProjectView();

  return (
    <div className="md:min-h-full px-4 py-4 text-5 flex flex-col justify-start items-start gap-4 border-r border-Appearance-Slate-700 max-md:flex-row max-md:gap-2 max-md:text-3 max-md:px-4 max-md:py-4 max-md:border-r-0 max-md:border-b">
      <HiViewGrid
        onClick={() => setProjectView("grid")}
        className={`${
          view === "grid"
            ? "text-Appearance-Slate-300"
            : "text-Appearance-Slate-500"
        } transition-all duration-200 ease-linear hover:text-Appearance-Slate-300 cursor-pointer`}
      />
      <HiOutlineViewList
        onClick={() => setProjectView("list")}
        className={`${
          view === "list"
            ? "text-Appearance-Slate-300"
            : "text-Appearance-Slate-500"
        } transition-all duration-200 ease-linear hover:text-Appearance-Slate-300 cursor-pointer`}
      />
    </div>
  );
};

export default SecondarySideBar;
