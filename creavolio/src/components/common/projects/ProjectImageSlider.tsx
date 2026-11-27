"use client";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft, ZoomIn } from "lucide-react";
import Image from "next/image";

import Button from "../global/Button";
import { useProjectContext } from "@/context/ProjectContext";
import { project_image_aspect } from "@/data/projects";

const ProjectImageSlider = ({
  projectIdx,
  images,
  title,
  openProject,
  isInDialog = false,
}: {
  projectIdx: number;
  images: string[];
  title: string;
  openProject?: () => void;
  isInDialog?: boolean;
}) => {
  const { projectImageIdxMap, setProjectImageIdx } = useProjectContext();

  const imageIdx = Math.min(projectImageIdxMap[projectIdx] || 0, Math.max(0, images.length - 1));

  const isCanMoveNext = imageIdx < images.length - 1;

  const isCanMovePrev = imageIdx > 0;

  const next = () => {
    if (isCanMoveNext) {
      setProjectImageIdx(projectIdx, imageIdx + 1);
    }
  };

  const prev = () => {
    if (isCanMovePrev) {
      setProjectImageIdx(projectIdx, imageIdx - 1);
    }
  };

  return (
    <div
      className={cn(
        "relative group overflow-hidden size-full border border-[var(--border-secondary)] shadow-md",
        project_image_aspect == "video" ? "aspect-video" : "aspect-square",
        isInDialog ? "aspect-video" : "border-b-0"
      )}
    >
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={title}
          fill
          sizes={isInDialog ? "(max-width: 640px) 100vw, 90vw" : "(max-width: 1023px) 100vw, (max-width: 1535px) 75vw, 38vw"}
          className={cn(
            "object-cover pointer-events-auto duration-1000 ease-in-out",

            project_image_aspect == "video"
              ? "rounded-t-[var(--radius)]"
              : "rad",
            isInDialog ? "rounded-none" : "",
            i <= imageIdx ? "translate-y-0" : "translate-y-full"
          )}
          onClick={openProject}
        />
      ))}

      <div
        className={cn(
          "absolute pointer-events-none left-0 top-0 size-full opacity-0 duration backdrop-blur-[1px] bg-gradient-to-t from-black/50 to-black/0",
          isInDialog ? "" : "group-hover:opacity-100",
          project_image_aspect == "video" ? "rounded-t-[var(--radius)]" : "rad"
        )}
      />

      <ProjectImageSliderButton
        dir="right"
        onClick={next}
        isVisiable={isCanMoveNext}
      />

      <ProjectImageSliderButton
        dir="left"
        onClick={prev}
        isVisiable={isCanMovePrev}
      />

      {isInDialog ? null : (
        <div className="absolute position-center">
          <Button type="button" onClick={openProject} aria-label={`View details for ${title}`} className="project-control bg-white hover:text-[var(--main)] border border-[var(--border)] hover:border-[var(--main)] shadow-xl group-hover:opacity-100 focus-visible:opacity-100 opacity-0 duration-300 size-12 sm:size-16 !rounded-full flex-center">
            <ZoomIn size={36} strokeWidth={1.25} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectImageSlider;

const ProjectImageSliderButton = ({
  dir,
  onClick,
  isVisiable,
}: {
  dir: "left" | "right";
  onClick: () => void;
  isVisiable: boolean;
}) => {
  if (!isVisiable) return null;
  return (
    <div
      className={cn(
        "absolute top-1/2 group-hover:-translate-y-1/2 translate-y-4 duration-300",
        dir === "right" ? "right-4" : "left-4",
        isVisiable
          ? ""
          : dir === "right"
          ? "opacity-0 translate-x-full"
          : "opacity-0 -translate-x-full"
      )}
    >
      <Button type="button" onClick={onClick} aria-label={dir === "right" ? "Next project image" : "Previous project image"} className="project-control shadow-xl text-black hover:text-[var(--main)] hover:border-[var(--main)] bg-white border border-[var(--border)] group-hover:opacity-100 focus-visible:opacity-100 opacity-0 duration-300 size-12 !rounded-full flex-center">
        {dir === "right" ? <ChevronRight /> : <ChevronLeft />}
      </Button>
    </div>
  );
};
