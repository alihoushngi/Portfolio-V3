"use client";

import { useEffect, useState } from "react";
import {
  IoIosClose,
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";

const SnakeGameBoard = () => {
  // check game is start or not
  const [isStart, setIsStart] = useState<"true" | "false" | "pause">("false");

  // how many don't eat snake food

  // handle keyboard keydown
  useEffect(() => {
    const keyClickHandler = (e: KeyboardEvent) => {
      console.log(e.key);
      if ("Enter".includes(e.key)) {
        setIsStart("true");
      }

      if ("Escape".includes(e.key)) {
        setIsStart("pause");
      }

      if (isStart === "false") {
        if (
          ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
        ) {
          console.log("کلید جهت‌نما زده شد:", e.key);
        }
      }
    };

    window.addEventListener("keydown", keyClickHandler);

    return () => {
      window.removeEventListener("keydown", keyClickHandler);
    };
  }, [isStart]);

  return (
    <div className="flex justify-start items-start h-full gap-4 w-[500px] rounded-lg border border-Appearance-Slate-700 p-7 bg-glass-gradient bg-opacity-70 shadow-inner-white backdrop-blur-60 z-20 relative">
      <IoIosClose className="bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute top-3 left-3" />
      <IoIosClose className="bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute top-3 right-3" />
      <IoIosClose className="bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute bottom-3 left-3" />
      <IoIosClose className="bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute bottom-3 right-3" />

      {/* Snake Game Board */}
      <div className="h-full bg-Appearance-Slate-800 rounded-lg w-2/3 relative">
        <div className="w-4 h-4 bg-[#43d9ad] absolute top-1/4 left-1/2 rounded-full animate-bounce-halo" />
        <div className="w-4 h-20 bg-snake-gradient absolute top-2/4 left-1/2 rounded-t-full" />
      </div>

      {/* Snake Game hint */}
      <div className="h-full w-1/2">
        <div className="bg-Appearance-Slate-800 rounded-lg p-3 flex flex-col justify-start items-start ">
          <div className="flex flex-col justify-start items-start gap-1 flex-wrap text-1 text-Appearance-Slate-50 font-light">
            <span>{"//"} use keyboard</span>
            <span>{"//"} arrows to play</span>
          </div>
          <div className="mt-4 w-full flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-center items-center">
              <IoMdArrowDropup className="bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-5 text-white w-9" />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <IoMdArrowDropleft className="bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-5 text-white w-9" />
              <IoMdArrowDropdown className="bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-5 text-white w-9" />
              <IoMdArrowDropright className="bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-5 text-white w-9" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 flex-wrap text-1 text-Appearance-Slate-50 font-light mt-6 p-3">
          <span>{"//"} food left</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGameBoard;
