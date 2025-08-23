import { IHeaderProps } from "@/components/shared/Header/assets/header.type";
import {
  firstMenuItems,
  secondMenuItems,
} from "@/components/shared/Header/assets/items";
import Link from "next/link";

const DesktopVersion = ({ pathname }: IHeaderProps) => {
  return (
    <div className="max-md:hidden w-full border-b border-Appearance-Slate-700 text-Appearance-Slate-400 text-1 flex justify-between items-center">
      <div className="w-full flex justify-start items-center gap-24">
        <h1 className="py-4 px-7">ali hooshangi</h1>
        <div className="flex justify-center items-center">
          {firstMenuItems.map((item, index) => {
            if (!item.disable) {
              return (
                <Link
                  href={item.url}
                  key={index}
                  className={`${pathname === item.url && "border-b-2 border-b-Primary-Orange-300_Main"} transition-all duration-200 ease-in-out py-4 px-7 border-r border-l border-Appearance-Slate-700`}
                >
                  {item.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className="flex justify-center items-center w-fit text-nowrap">
        {secondMenuItems.map((item, index) => {
          if (!item.disable) {
            return (
              <Link
                href={item.url}
                key={index}
                className={`${pathname === item.url && "border-b-2 border-b-Primary-Orange-300_Main"} transition-all duration-200 ease-in-out py-4 px-7 border-l border-Appearance-Slate-700`}
              >
                {item.title}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default DesktopVersion;
