import { cn } from "@/lib/utils";
import styles from "../../../styles.module.css";
import { about_hero_sentences } from "@/data/about";
const { animateScroll, animateSmallScroll } = styles;

const TickerPart = ({ size }: { size: "sm" | "lg" }) => {
  return (
    <div
      className={cn(
        "flex text-[var(--text-primary-inverse)]",
        size === "sm"
          ? "font-[500] text-lg gap-8"
          : "font-semibold text-5xl gap-16",
        size === "sm" ? animateSmallScroll : animateScroll
      )}
      style={{ animationDuration: `${about_hero_sentences.length * 8}s` }}
    >
      {about_hero_sentences.map((sentence, i) => (
        <span key={i} className="whitespace-nowrap uppercase text-nowrap">
          {sentence}
        </span>
      ))}
    </div>
  );
};

const InfiniteTicker = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  return (
    <div
      className={cn(
        size === "sm" ? "gap-8 py-2" : "gap-16 py-8",
        "w-full relative bg-[var(--bg-primary-inverse)] overflow-hidden flex"
      )}
    >
      <TickerPart size={size} />
      <TickerPart size={size} />
    </div>
  );
};

export default InfiniteTicker;
