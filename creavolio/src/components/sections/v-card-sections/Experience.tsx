"use client";
import { experience } from "@/data/experience";
import TimelineCard from "../../common/experience/TimelineCard";
import { useState } from "react";
import ArrowLink from "../../common/global/ArrowLink";
import VCardSection from "@/components/common/global/VCardSection";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { SvgIconComponent } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { is_animation_trigger_once } from "@/data/global";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <VCardSection title="experience">
      <div className="grid gap-32">
        <div className="relative lg:mt-0 mt-32">
          <History resumePart="working" />
        </div>

        <div className="relative">
          <History resumePart="education" />
        </div>
      </div>
    </VCardSection>
  );
};

export default Experience;

const HistoryIcon = ({ Icon }: { Icon: SvgIconComponent }) => {
  const { ref: IconRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  return (
    <div className="mb-16 lg:mx-0 mx-auto rounded-full relative w-fit border-[3px] border-dashed p-8 border-[var(--border)] overflow-hidden">
      <div className={cn("animated", animate ? "" : "opacity-0")} ref={IconRef}>
        <Icon
          style={{ width: "64px", height: "64px" }}
          className="text-[var(--text-secondary)]"
        />
      </div>
    </div>
  );
};

const History = ({ resumePart }: { resumePart: "education" | "working" }) => {
  const [showAll, setShowAll] = useState(false);
  const MAX = 3;

  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);

  const onOpenChange = (idx: number) => {
    setActiveServiceIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <div className="space-y-8">
        <HistoryIcon
          Icon={
            resumePart === "education" ? SchoolRoundedIcon : WorkRoundedIcon
          }
        />
        <div className="grid gap-8">
          {experience[resumePart].slice(0, MAX).map((item, i) => (
            <TimelineCard
              key={i}
              idx={i}
              resumePart={resumePart}
              {...item}
              isOpen={activeServiceIdx === i}
              onOpenChange={() => onOpenChange(i)}
            />
          ))}

          {showAll
            ? experience[resumePart].slice(MAX).map((item, i) => {
                const index = i + MAX;
                return (
                  <TimelineCard
                    key={index}
                    idx={index}
                    resumePart={resumePart}
                    {...item}
                    isOpen={activeServiceIdx === index}
                    onOpenChange={() => onOpenChange(index)}
                  />
                );
              })
            : ""}
        </div>
      </div>

      {experience[resumePart].length > MAX && !showAll ? (
        <ArrowLink
          text={`Show All (+${experience[resumePart].length - MAX})`}
          onClick={() => setShowAll(true)}
          className="mx-auto mt-8"
          size="xl"
        />
      ) : null}
    </>
  );
};
