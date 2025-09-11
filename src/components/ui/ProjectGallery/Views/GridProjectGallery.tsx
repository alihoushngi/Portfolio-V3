import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { IProjectCardProps } from "@/components/ui/ProjectCard/ProjectCard.type";
import { FC } from "react";

export interface GridProjectGalleryProps {
  list: IProjectCardProps[];
}

const GridProjectGallery: FC<GridProjectGalleryProps> = ({ list }) => {
  if (!list || list.length === 0) {
    return <div>No Projects Found</div>;
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {list.map((item, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <ProjectCard
            ProjectDescription={item.ProjectDescription}
            ProjectImage={item.ProjectImage}
            ProjectLink={item.ProjectLink || "#"}
            ProjectTitle={item.ProjectTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default GridProjectGallery;
