import FirstSideBar from "@/components/shared/Projects/FirstSideBar/Filters";
import SecondarySideBar from "@/components/shared/Projects/SecondarySideBar/SecondarySideBar";

import React from "react";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full flex justify-stretch items-stretch max-md:flex-col">
      <div className="max-md:hidden">
        <SecondarySideBar />
      </div>
      <FirstSideBar />
      <div className="h-full">{children}</div>
    </section>
  );
};

export default ProjectsLayout;
