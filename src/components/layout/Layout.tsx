import Header from "@/components/shared/Header/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-11 max-md:p-5 bg-Appearance-Slate-950 h-screen">
      <div className="border border-Appearance-Slate-700 h-full rounded-default">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
