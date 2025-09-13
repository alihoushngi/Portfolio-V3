"use client";

import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { IProjectCardProps } from "@/components/ui/ProjectCard/ProjectCard.type";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export interface GridProjectGalleryProps {
  list: IProjectCardProps[];
}

const GridProjectGallery: FC<GridProjectGalleryProps> = ({ list }) => {
  const query = useSearchParams().get("category");

  const selectedCategories = query ? query.split(",") : [];

  const filteredList =
    selectedCategories.length > 0
      ? list.filter((item) =>
          selectedCategories.includes(item.Category ? item.Category : ""),
        )
      : list;

  return (
    <div className="grid grid-cols-3 gap-4 h-[85vh] overflow-auto p-4 max-md:grid-cols-1 max-md:h-full">
      {filteredList.map((item, index) => (
        <ProjectCard
          key={index}
          ProjectDescription={item.ProjectDescription}
          ProjectImage={item.ProjectImage}
          ProjectLink={item.ProjectLink || "#"}
          ProjectTitle={item.ProjectTitle}
          haveButton
          isLink
          Category={item.Category}
        />
      ))}
    </div>
  );
};

export default GridProjectGallery;
