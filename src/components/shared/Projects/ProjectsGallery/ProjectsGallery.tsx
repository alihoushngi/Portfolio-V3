import { ProjectsEn } from "@/assets/list/ProjectList";
import GridProjectGallery from "@/components/ui/ProjectGallery/Views/GridProjectGallery";
import ListProjectGallery from "@/components/ui/ProjectGallery/Views/ListProjectGallery";
import { useProjectViewStore } from "@/store/projectView";

const ProjectsGallery = () => {
  const view = useProjectViewStore((state) => state.projectView.view);

  const formattedProjects = ProjectsEn.map((p) => ({
    ProjectImage: p.img,
    ProjectTitle: p.title,
    ProjectDescription: p.description,
    ProjectLink: p.link,
    Category: p.Category,
  }));

  return view === "grid" ? (
    <GridProjectGallery list={formattedProjects} />
  ) : (
    <ListProjectGallery list={formattedProjects} />
  );
};

export default ProjectsGallery;
