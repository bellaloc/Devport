"use client";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { is_animation_trigger_once } from "@/data/global";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ArrowLink = ({
  text,
  onClick,
  className,
  size = "base",
}: {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "base" | "xl";
}) => {
  const { ref: arrowLinkRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  return (
    <span
      ref={arrowLinkRef}
      className={cn(
        "flex items-center text-[var(--text-tertiary)] group-hover:text-[var(--main)] hover:text-[var(--main)] group relative w-fit",
        size === "base" ? "text-base h-[25.6px]" : "text-xl h-8",
        className
      )}
      style={{
        transition: "opacity var(--animation-duration), color 300ms",
      }}
      onClick={onClick}
    >
      <TextEffect
        trigger={animate}
        className=" group-hover:text-[var(--main)]! uppercase"
      >
        {text}
      </TextEffect>
      <MoveLeft
        size={16}
        className="translate-x-8 opacity-0 text-inherit group-hover:translate-x-2 group-hover:opacity-100 duration-300"
      />
      <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px opacity-40 duration-300 group-hover:bg-[var(--main)]" />
    </span>
  );
};

export default ArrowLink;
