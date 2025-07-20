"use client";
import { is_animation_trigger_once } from "@/data/global";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const LinearProgress1 = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  const { ref: progressRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  return (
    <div ref={progressRef}>
      <div className="flex justify-between items-center mb-3 font-[500]">
        <h3>{title}</h3>
        <span className="font-mono text-gradient text-base">{value}%</span>
      </div>
      <div className="w-full relative overflow-hidden h-1.5 bg-[var(--border-secondary)] rad">
        <div
          className={cn(
            "animated-duration absolute h-full ease-in-out origin-left rad background-gradient ",
            animate ? "scale-x-100" : "scale-x-0"
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress1;
