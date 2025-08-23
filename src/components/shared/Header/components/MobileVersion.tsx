import { IHeaderProps } from "@/components/shared/Header/assets/header.type";
import {
  firstMenuItems,
  secondMenuItems,
} from "@/components/shared/Header/assets/items";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const MobileVersion = ({ pathname }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex justify-between items-center text-Appearance-Slate-400 text-1 w-full border-b border-Appearance-Slate-700 p-5">
      <h1 className="">ali hooshangi</h1>
      <IoIosMenu className="text-4" onClick={() => setIsOpen(true)} />

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "96vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-5 left-5 right-5 bottom-5 bg-Appearance-Slate-950 z-10 overflow-hidden"
          >
            <div className="border border-Appearance-Slate-700 h-full rounded-default flex flex-col justify-start items-center">
              <div className="flex justify-between items-center text-Appearance-Slate-400 text-1 w-full border-b border-Appearance-Slate-700 p-5">
                <h1 className="">ali hooshangi</h1>
                <IoMdClose
                  className="text-4"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
              <span className="w-full pb-4 pt-6 px-6 border-b border-Appearance-Slate-700 text-Appearance-Slate-400">
                # navigate:
              </span>
              {firstMenuItems.map((item, index) => {
                if (!item.disable) {
                  return (
                    <Link
                      href={item.url}
                      key={index}
                      className={`${pathname === item.url && "border-b-2 border-b-Primary-Orange-300_Main text-Primary-Orange-300_Main"} w-full transition-all duration-200 ease-in-out py-4 px-6 border-b border-Appearance-Slate-700 text-white`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {item.title}
                    </Link>
                  );
                }
              })}
              {secondMenuItems.map((item, index) => {
                if (!item.disable) {
                  return (
                    <Link
                      href={item.url}
                      key={index}
                      className={`${pathname === item.url && "border-b-2 border-b-Primary-Orange-300_Main text-Primary-Orange-300_Main"} w-full transition-all duration-200 ease-in-out py-4 px-6 border-b border-Appearance-Slate-700 text-white`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {item.title}
                    </Link>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileVersion;
