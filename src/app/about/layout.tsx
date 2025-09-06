import FirstSideBar from "@/components/shared/About/FirstSideBar/FirstSideBar";
import OpenedFileBar from "@/components/shared/About/OpenedFileBar/OpenedFileBar";
import SecondarySideBar from "@/components/shared/About/SecondarySideBar/SecondarySideBar";
import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-full flex justify-stretch items-stretch max-md:flex-col">
      <SecondarySideBar />
      <FirstSideBar />
      <div className="flex flex-col w-full">
        <OpenedFileBar />
        <div className="h-full">{children}</div>
      </div>
    </section>
  );
};

export default AboutLayout;
