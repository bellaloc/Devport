"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const BlurryBallCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 81);
      mouseY.set(e.clientY - 81);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute left-0 top-0 size-48 bg-[var(--main)] z-0 rounded-full pointer-events-none opacity-10 blur-[8rem]"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
};

export default BlurryBallCursor;
