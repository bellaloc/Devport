"use client";
import { ReactNode, useState } from "react";
import { is_animation_trigger_once } from "@/data/global";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowDownwardSharp } from "@mui/icons-material";

const VCardSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section id={title}>
      <VCardSectionTitle title={title} />
      <>{children}</>
    </section>
  );
};

export default VCardSection;

const VCardSectionTitle = ({ title }: { title: string }) => {
  const { ref: titleRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  const [backgroundWidth, setBackgroundWidth] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = 1000 / 60;

    const run = () => {
      start += step;
      const newProgress = Math.min((start / duration) * 100, 100);
      setBackgroundWidth(newProgress);
      if (animate && newProgress < 100) requestAnimationFrame(run);
    };

    if (!animate) setBackgroundWidth(0);

    requestAnimationFrame(run);
  }, [animate]);

  return (
    <div className="mb-16 flex gap-8 items-center lg:justify-start justify-center">
      <h1
        className={cn(
          "animated font-extrabold md:text-8xl sm:text-7xl text-5xl tracking-wide",
          "relative bg-clip-text bg-no-repeat inline"
        )}
        ref={titleRef}
        style={{
          WebkitTextFillColor: "var(--text-fill)",
          WebkitBackgroundClip: "text",
          backgroundImage:
            "linear-gradient(var(--text-primary), var(--text-primary))",
          backgroundSize: `${backgroundWidth}% 100%`,
          willChange: "background-size",
        }}
      >
        {title.split("-").join(" ")}
      </h1>
      <span
        className={cn(
          "animated bg-[var(--bg-primary-inverse)] -translate-y-[2px] xl:block hidden",
          animate ? "" : "-translate-x-8 -rotate-180"
        )}
      >
        <ArrowDownwardSharp
          style={{ width: "68px", height: "68px" }}
          className="text-[var(--text-primary-inverse)] "
        />
      </span>
    </div>
  );
};
