import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-7 max-md:p-5 bg-Appearance-Slate-950 h-screen">
      <div className="border border-Appearance-Slate-700 h-full rounded-default flex flex-col justify-between">
        <Header />
        <main className="h-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
