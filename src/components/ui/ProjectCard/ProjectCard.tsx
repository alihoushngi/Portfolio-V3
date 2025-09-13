import Button from "@/components/ui/Button/Button";
import { IProjectCardProps } from "@/components/ui/ProjectCard/ProjectCard.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProjectCard: FC<IProjectCardProps> = ({
  ProjectLink,
  ProjectImage,
  ProjectDescription,
  ProjectTitle,
  onClickButton,
  haveButton,
  isLink,
}) => {
  return (
    <Link
      href={ProjectLink}
      target="_blank"
      className="flex flex-col w-full justify-start items-start gap-4 bg-Appearance-Slate-950 rounded-lg p-4 hover:bg-Appearance-Slate-800 transition-all ease-linear duration-200 max-md:gap-2 text-white"
    >
      <Image
        src={ProjectImage}
        alt={ProjectDescription}
        aria-label={ProjectDescription}
        priority
        width={2000}
        height={2000}
        className="w-full h-auto rounded-lg"
      />
      <h3 className="text-3 font-extrabold max-md:text-1">{ProjectTitle}</h3>
      <p className="text-1 font-light text-left tracking-tighter max-md:text-xs">
        {ProjectDescription}
      </p>
      {!isLink && haveButton && (
        <Button
          onClick={onClickButton}
          classname="bg-Appearance-Slate-500 text-Appearance-Slate-900 w-full hover:bg-Appearance-Slate-200 hover:text-Appearance-Slate-950 rounded"
        >
          Read More
        </Button>
      )}
    </Link>
  );
};

export default ProjectCard;
