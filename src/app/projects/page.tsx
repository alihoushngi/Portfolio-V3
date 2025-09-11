"use client";

import { ProjectsEn } from "@/app/projects/assets/ProjectList";
import GridProjectGallery from "@/components/ui/ProjectGallery/Views/GridProjectGallery";
import ListProjectGallery from "@/components/ui/ProjectGallery/Views/ListProjectGallery";
import { useProjectViewStore } from "@/store/projectView";

const ProjectsPage = () => {
  const view = useProjectViewStore((state) => state.projectView.view);

  const formattedProjects = ProjectsEn.map((p) => ({
    ProjectImage: p.img,
    ProjectTitle: p.title,
    ProjectDescription: p.description,
    ProjectLink: p.link,
  }));

  if (view === "grid") {
    return (
      <div className="w-full p-4 max-md:p-2 overflow-auto max-h-[82vh]">
        <GridProjectGallery list={formattedProjects} />
      </div>
    );
  } else if (view === "list") {
    return (
      <div className="w-full p-4 max-md:p-2 overflow-auto max-h-[82vh]">
        <ListProjectGallery list={formattedProjects} />
      </div>
    );
  }
};

export default ProjectsPage;
