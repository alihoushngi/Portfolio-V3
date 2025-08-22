import { IHeaderProps } from "@/components/shared/Header/assets/header.type";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const MobileVersion = ({ pathname }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(pathname);
  return (
    <div className="md:hidden flex justify-between items-center text-Appearance-Slate-400 text-1 w-full border-b border-Appearance-Slate-700 p-5">
      <h1 className="">ali hooshangi</h1>
      <IoIosMenu className="" onClick={() => setIsOpen(true)} />

      {/* Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 w-full bg-Appearance-Slate-950 h-screen z-10 p-5">
          <div className="border border-Appearance-Slate-700 h-full rounded-default">
            <div className="flex justify-between items-center text-Appearance-Slate-400 text-1 w-full border-b border-Appearance-Slate-700 p-5">
              <h1 className="">ali hooshangi</h1>
              <IoIosMenu className="" onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileVersion;
