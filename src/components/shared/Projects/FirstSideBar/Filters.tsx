"use client";

import { FiltersItems } from "@/assets/list/FiltersList";
import FilterSelection from "@/components/ui/FilterSelection/FilterSelection";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Filters = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const check = window.matchMedia("(max-width: 768px)");
    setIsMobile(check.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    check.addEventListener("change", handler);
    return () => check.removeEventListener("change", handler);
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(isMobile ? false : true);
  }, [isMobile]);

  useEffect(() => {
    const query = searchParams.get("category");
    if (query) {
      setSelectedCategories(query.split(","));
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  const filterChangeHandler = (value: string) => {
    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(value)) {
      updatedCategories = updatedCategories.filter((cat) => cat !== value);
    } else {
      updatedCategories.push(value);
    }

    setSelectedCategories(updatedCategories);

    const queryString =
      updatedCategories.length > 0
        ? `?category=${updatedCategories.join(",")}`
        : "";
    router.push(pathname + queryString);
  };

  return (
    <div className="border-r border-Appearance-Slate-700 min-w-[14rem] h-[84vh] max-md:h-[unset] max-md:border-r-0 overflow-auto">
      {FiltersItems.map((item, index) => (
        <FilterSelection
          key={index}
          isOpen={isOpen}
          title={item.title}
          setIsOpen={setIsOpen}
          subItem={item.subItem && item.subItem}
          onFilterChange={filterChangeHandler}
          selectedCategories={selectedCategories}
        />
      ))}
    </div>
  );
};

export default Filters;
