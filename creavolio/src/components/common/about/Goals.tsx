"use client";
import { goals } from "@/data/about";
import { is_animation_trigger_once } from "@/data/global";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import CountTitle from "../global/CountTitle";

const Goal = ({
  goal,
  description,
  idx,
}: {
  goal: string;
  description: string;
  idx: number;
}) => {
  const { ref: goalRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  return (
    <li
      className={cn(
        "animated-duration flex items-start sm:flex-row flex-col sm:gap-8 gap-4 group",
        animate ? "opacity-100" : "opacity-0"
      )}
      ref={goalRef}
    >
      <CountTitle idx={idx} />

      <div className="space-y-4">
        <h2 className="font-[500] text-2xl">{goal}</h2>
        <p className="text-[var(--text-tertiary)]">{description}</p>
      </div>
    </li>
  );
};

const Goals = () => {
  return (
    <ul className="space-y-8">
      {goals.map((item, i) => (
        <Goal key={i} idx={i} {...item} />
      ))}
    </ul>
  );
};

export default Goals;
