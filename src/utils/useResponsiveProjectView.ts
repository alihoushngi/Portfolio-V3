"use client";

import { useProjectViewStore } from "@/store/projectView";
import { useEffect } from "react";

export const useResponsiveProjectView = (mobileBreakpoint = 768) => {
  const view = useProjectViewStore((state) => state.projectView.view);
  const setProjectView = useProjectViewStore((state) => state.setProjectView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < mobileBreakpoint) {
        setProjectView("grid");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setProjectView, mobileBreakpoint]);

  return { view, setProjectView };
};
