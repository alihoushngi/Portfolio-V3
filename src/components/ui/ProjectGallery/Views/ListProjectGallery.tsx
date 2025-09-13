"use client";

import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { IProjectCardProps } from "@/components/ui/ProjectCard/ProjectCard.type";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export interface ListProjectGalleryProps {
  list: IProjectCardProps[];
}

const ListProjectGallery: FC<ListProjectGalleryProps> = ({ list }) => {
  const query = useSearchParams().get("category");

  const selectedCategories = query ? query.split(",") : [];

  const filteredList =
    selectedCategories.length > 0
      ? list.filter((item) =>
          selectedCategories.includes(item.Category ? item.Category : ""),
        )
      : list;
  return (
    <div className="flex flex-col gap-4 w-full h-[72vh] overflow-auto p-2 max-md:h-full">
      {filteredList.map((item, index) => (
        <ProjectCard
          key={index}
          ProjectDescription={item.ProjectDescription}
          ProjectImage={item.ProjectImage}
          ProjectLink={item.ProjectLink || "#"}
          ProjectTitle={item.ProjectTitle}
          isLink
          Category={item.Category}
        />
      ))}
    </div>
  );
};

export default ListProjectGallery;
