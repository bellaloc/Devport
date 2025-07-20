"use client";
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  CSSProperties,
} from "react";
import { motion, useSpring, useTransform, SpringOptions } from "motion/react";
import { cn } from "@/lib/utils";

export type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  style?: CSSProperties | undefined;
  parentPosition?: "relative" | "sticky";
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
  style,
  parentPosition = "relative",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = parentPosition;
        parent.style.overflow = "hidden";
        setParentElement(parent);
      }
    }
  }, [parentPosition]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    const abortController = new AbortController();

    parentElement.addEventListener("mousemove", handleMouseMove, {
      signal: abortController.signal,
    });
    parentElement.addEventListener("mouseenter", () => setIsHovered(true), {
      signal: abortController.signal,
    });
    parentElement.addEventListener("mouseleave", () => setIsHovered(false), {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] transition-opacity duration-300",
        "blur-3xl bg-[var(--main)]",
        isHovered ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        ...style,
      }}
    />
  );
}
