import Link from "next/link";
import { FC } from "react";

export interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  isLink?: boolean;
  LinkUrl?: string;
  classname?: string;
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  isLink,
  LinkUrl,
  classname,
}) => {
  if (isLink) {
    return (
      <Link
        className={`text-xs px-3 py-1 max-md:w-full max-md:px-1 rounded-md bg-Appearance-Slate-700 text-gray-200 hover:opacity-80 transition max-md:text-center ${classname && classname}`}
        href={LinkUrl || "#"}
      >
        {children}
      </Link>
    );
  } else
    return (
      <button
        className={`text-xs px-3 py-1 max-md:w-full max-md:px-1 rounded-md bg-Appearance-Slate-700 text-gray-200 hover:opacity-80 transition max-md:text-center ${classname && classname}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default Button;
