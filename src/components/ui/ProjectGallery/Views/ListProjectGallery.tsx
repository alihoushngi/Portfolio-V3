"use client";

import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { IProjectCardProps } from "@/components/ui/ProjectCard/ProjectCard.type";
import { useRouter } from "next/navigation";
import { FC } from "react";

export interface ListProjectGalleryProps {
  list: IProjectCardProps[];
}

const ListProjectGallery: FC<ListProjectGalleryProps> = ({ list }) => {
  const router = useRouter();

  if (!list || list.length === 0) {
    return <div>No Projects Found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      {list.map((item, index) => (
        <ProjectCard
          key={index}
          ProjectDescription={item.ProjectDescription}
          ProjectImage={item.ProjectImage}
          ProjectLink={item.ProjectLink || "#"}
          ProjectTitle={item.ProjectTitle}
          haveButton
          onClickButton={() => router.push(item.ProjectTitle)}
        />
      ))}
    </div>
  );
};

export default ListProjectGallery;
