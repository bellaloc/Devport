"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useProjectContext } from "@/context/ProjectContext";
import CloseButton from "../global/CloseButton";
import Overlay from "../global/Overlay";
import ProjectImageSlider from "./ProjectImageSlider";
import { AnimatePresence, motion } from "motion/react";
import ProjectTag from "./ProjectTag";
import ProjectLink from "./ProjectLink";

const ProjectDialog = () => {
  const { projectIdx } = useProjectContext();
  const { title, description, tags, images, link, tools_used, duration } =
    projects[projectIdx];

  const { setIsOpenProject, isOpenProject } = useProjectContext();

  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpenProject) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpenProject(false);
      if (event.key === "Tab" && dialog) {
        const items = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'));
        const first = items[0], last = items[items.length - 1];
        if (!first || !last) { event.preventDefault(); return; }
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => { document.removeEventListener("keydown", handleKey); previous?.focus(); };
  }, [isOpenProject, setIsOpenProject]);

  return (
    <>
      <Overlay
        onClick={() => setIsOpenProject(false)}
        className={
          isOpenProject
            ? "opacity-100 translate-y-0"
            : "translate-y-full opacity-0 pointer-events-none"
        }
        style={{
          transitionDuration: isOpenProject
            ? "calc(var(--animation-duration)/2)"
            : "calc(var(--animation-duration)*2)",
        }}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal={isOpenProject ? true : undefined}
        aria-label={title}
        tabIndex={-1}
        inert={!isOpenProject}
        className={cn(
          "fixed inset-0 z-[41] bg-[var(--bg-primary)] overflow-y-auto overflow-x-hidden w-full h-[100dvh] rad overscroll-contain",
          "border border-[var(--border)] px-4 pt-20 pb-12 sm:p-8 sm:pt-24 lg:p-16 lg:pt-24",
          isOpenProject ? "translate-y-0" : "translate-y-full"
        )}
        style={{
          transitionDuration: "var(--animation-duration)",
        }}
      >
        <CloseButton onClick={() => setIsOpenProject(false)} className="translate-y-4 opacity-100" />
        <div className="grid gap-4 sm:gap-8 min-w-0">
          <AnimatePresence>
            {isOpenProject ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <ProjectImageSlider
                  projectIdx={projectIdx}
                  images={images}
                  title={title}
                  isInDialog
                />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl sm:text-4xl break-words min-w-0">{title}</h1>

              <ProjectLink link={link} />
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <ProjectTag key={i} tag={t} />
              ))}
            </div>
          </div>

          <p className="text-lg">{description}</p>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Tools Used:</h3>

            <div className="flex gap-2 flex-wrap">
              {tools_used.map((tool, i) => (
                <div
                  className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] py-2 px-4 rad"
                  key={i}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl text-[var(--text-secondary)]">
            Duration: <span className="text-[var(--main)]">{duration}</span> to
            finish
          </h3>
        </div>
      </div>
    </>
  );
};

export default ProjectDialog;
