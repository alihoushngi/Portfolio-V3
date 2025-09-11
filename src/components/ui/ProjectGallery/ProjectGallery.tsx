import { ProjectsEn } from "@/app/projects/assets/ProjectList";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";

const ProjectGallery = () => {
  return (
    <div className="w-1/2 max-w-full px-6 flex max-md:px-2 flex-col h-[72vh] max-md:w-full max-md:h-full">
      <h2 className="text-xl font-bold mb-6 mt-4 text-Appearance-Slate-200">
        My Projects Gallery
      </h2>
      <div className="flex flex-col gap-7 flex-1 overflow-y-auto pb-4">
        {ProjectsEn.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              ProjectImage={item.img}
              ProjectDescription={item.description}
              ProjectLink={item.link}
              ProjectTitle={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;
