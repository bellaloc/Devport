"use client";
import { personal_data } from "@/data/home";
import Image from "next/image";
import styles from "../../../styles.module.css";
import { cn } from "@/lib/utils";
import { useState } from "react";
import HeroSpinningText from "../global/HeroSpinningText";
const { showAnimation } = styles;

const HeroImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 75;
    const y = (clientY - top - height / 2) / 75;

    setPosition({ x, y });
  };

  return (
    <div
      className="absolute left-0 top-0 size-full z-40"
      onMouseMove={handleMouseMove}
    >
      <Image
        src={personal_data.image}
        alt={personal_data.name}
        fill
        sizes="(max-width: 767px) 100vw, 60vw"
        className={cn(
          "object-contain object-right-bottom !w-auto !max-w-full !h-[78%] md:!h-[112%] -z-10 duration-1000",
          showAnimation
        )}
        style={{
          left: "unset",
          top: "unset",
          right: 0,
          bottom: "-32px",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        quality={80}
        priority
      />

      <div className="sm:block hidden">
        <HeroSpinningText />
      </div>
    </div>
  );
};

export default HeroImage;
