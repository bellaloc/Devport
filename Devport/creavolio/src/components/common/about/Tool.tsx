"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ToolTip from "../global/ToolTip";
import { cn } from "@/lib/utils";
import { is_animation_trigger_once } from "@/data/global";
import { Tilt } from "@/components/motion-primitives/tilt";
import { useState } from "react";
import { ColorType, LIGHT_COLORS } from "@/shared/colors";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const Tool = ({
  name,
  image,
  duration,
  color,
}: {
  name: string;
  image: string;
  duration: number;
  color?: ColorType;
}) => {
  const { ref: toolRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  const [isHover, setIsHover] = useState(false);

  return (
    <Magnetic intensity={0.1}>
      <Tilt rotationFactor={20} isRevese>
        <div
          className={cn(
            "flex flex-col items-center justify-center group relative",
            animate ? "" : "opacity-50 translate-y-16"
          )}
          style={{ transitionDuration: `${duration}ms` }}
          ref={toolRef}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ToolTip title={name} />
          <div
            className="bg-[var(--bg-secondary)] dark:bg-[var(--bg-primary)] w-full p-8 flex justify-center items-center rad duration-300"
            style={{
              backgroundColor: color
                ? isHover
                  ? LIGHT_COLORS[color]
                  : ""
                : "",
            }}
          >
            <Image
              src={image}
              width={42}
              height={42}
              alt={name}
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 70vw"
              className="group-hover:scale-110 duration-300"
            />
          </div>
        </div>
      </Tilt>
    </Magnetic>
  );
};

export default Tool;
