"use client";
import { useProjectContext } from "@/context/ProjectContext";
import { useInView } from "react-intersection-observer";
import { is_animation_trigger_once } from "@/data/global";
import { useEffect, useState } from "react";
import ProjectImageSlider from "./ProjectImageSlider";
import { cn } from "@/lib/utils";
import { project_image_aspect } from "@/data/projects";
import CountTitle from "../global/CountTitle";
import ProjectLink from "./ProjectLink";

export type ProjectProps = {
  title: string;
  images: string[];
  tags: string[];
  link: string;
  idx: number;
};

const ProjectFooter = ({
  title,
  link,
  idx,
  isOut = false,
}: Omit<ProjectProps, "images"> & { isOut?: boolean }) => {
  return (
    <div
      className={cn(
        isOut
          ? "bg-[var(--bg-primary)] border border-[var(--border)] border-t-transparent rounded-b-[var(--radius)]"
          : "absolute left-0 bottom-0 bg-black/15 backdrop-blur-sm w-full",
        " p-8  space-y-8"
      )}
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-end gap-4">
          <CountTitle idx={idx} className="hidden sm:inline" />
          <h1 className="text-2xl line-clamp-1">{title}</h1>
        </div>
        <ProjectLink link={link} />
      </div>
    </div>
  );
};

const Project = ({ title, images, tags, link, idx }: ProjectProps) => {
  const { ref: projectRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  const { setIsOpenProject, setProjectIdx, isOpenProject, projectIdx } =
    useProjectContext();

  const [isCanOpenProjectDialog, setIsCanOpenProjectDialog] = useState(true);

  useEffect(() => {
    if (!isOpenProject) setIsCanOpenProjectDialog(false);
    const time = setTimeout(() => {
      setIsCanOpenProjectDialog(true);
    }, 1500);
    return () => clearTimeout(time);
  }, [isOpenProject]);

  const openProjectDialog = () => {
    if (isCanOpenProjectDialog) {
      setIsOpenProject(true);
      setProjectIdx(idx);
    }
  };

  return (
    <div
      ref={projectRef}
      className={cn("animated", animate ? "" : "opacity-50 translate-y-16")}
    >
      <div
        className={cn(
          "relative border border-[var(--border)] overflow-hidden ",
          project_image_aspect == "video" ? "rounded-t-[var(--radius)]" : "rad"
        )}
      >
        <ProjectImageSlider
          projectIdx={projectIdx}
          images={images}
          title={title}
          openProject={openProjectDialog}
        />

        {project_image_aspect == "square" ? (
          <ProjectFooter title={title} link={link} idx={idx} tags={tags} />
        ) : null}
      </div>

      {project_image_aspect == "video" ? (
        <ProjectFooter title={title} link={link} idx={idx} tags={tags} isOut />
      ) : null}
    </div>
  );
};

export default Project;
