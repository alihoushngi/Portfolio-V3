import FirstSideBar from "@/components/shared/About/FirstSideBar/FirstSideBar";
import SecondarySideBar from "@/components/shared/About/SecondarySideBar/SecondarySideBar";
import OpenedFileBar from "@/components/ui/OpenedFileBar/OpenedFileBar";
import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full flex justify-stretch items-stretch max-md:flex-col">
      <SecondarySideBar />
      <FirstSideBar />
      <div className="flex flex-col">
        <OpenedFileBar />
        <div className="h-full">{children}</div>
      </div>
    </section>
  );
};

export default AboutLayout;
