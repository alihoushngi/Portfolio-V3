"use client";

import DesktopVersion from "@/components/shared/Header/components/DesktopVersion";
import MobileVersion from "@/components/shared/Header/components/MobileVersion";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <DesktopVersion pathname={pathname} />
      <MobileVersion pathname={pathname} />
    </div>
  );
};

export default Header;
