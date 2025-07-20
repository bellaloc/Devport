"use client";
import Link from "next/link";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { is_animation_trigger_once, social_links } from "@/data/global";
import { cn } from "@/lib/utils";
import { COLORS, ColorType } from "@/shared/colors";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

const SocialLink = ({
  link,
  color,
  Icon,
  idx,
}: {
  link: string;
  color: ColorType;
  Icon: IconDefinition;
  idx: number;
}) => {
  const { ref: socialLinkRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  const [isHover, setIsHover] = useState(false);

  return (
    <Button>
      <div
        ref={socialLinkRef}
        style={{ transitionDuration: `${(idx + 1) * 300}ms` }}
        className={
          animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-50"
        }
      >
        <Link
          href={link}
          target="_blank"
          className={cn(
            "group size-12 rounded-full border flex-center text-[var(--text-primary)] duration-300",
            color === "black" ? "dark:!text-white" : "",
            color === "black" && isHover ? "dark:!border-white" : ""
          )}
          style={{
            color: COLORS[color],
            borderColor: isHover ? COLORS[color] : "transparent",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <FAI
            icon={Icon}
            className="group-hover:scale-125 text-inherit duration-300"
            size="xl"
          />
        </Link>
      </div>
    </Button>
  );
};

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-wrap gap-8", className)}>
      {social_links.map((item, i) => (
        <SocialLink key={i} idx={i} {...item} />
      ))}
    </div>
  );
};

export default SocialLinks;
