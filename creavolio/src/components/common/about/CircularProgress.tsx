"use client";
import { is_animation_trigger_once } from "@/data/global";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const CircularProgress = ({
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
    <div
      ref={progressRef}
      className={cn("animated-duration", animate ? "" : " opacity-0")}
    >
      <div
        className="rounded-full flex justify-center items-center transition-colors size-[140px]"
        style={{
          background: `conic-gradient(var(--main) ${
            value / 2
          }%, var(--gradient-to) ${value}%, var(--border-secondary) ${0}%)`,
        }}
      >
        <div className="absolute rounded-full bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)] size-[127px]" />

        <div className="relative m-0 text-center flex flex-col gap-1 font-[500]">
          <span className="text-[var(--text-secondary)] uppercase">
            {title}
          </span>
          <span className="text-base font-mono text-gradient">{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
