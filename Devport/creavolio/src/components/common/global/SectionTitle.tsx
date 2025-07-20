import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { is_animation_trigger_once } from "@/data/global";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  const { ref: titleRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });
  return (
    <h1
      className={cn(
        "animated-duration relative md:text-8xl sm:text-6xl text-5xl",
        "mb-24 select-none ease-out font-black text-center w-fit mx-auto",
        animate
          ? "opacity-100 translate-y-0 scale-y-100"
          : "opacity-50 translate-y-24 scale-y-50"
      )}
      ref={titleRef}
    >
      <span className="absolute position-center md:size-48 sm:size-32 size-24 bg-[var(--border)] rounded-full z-[-1] opacity-35" />

      {title}
      {description ? (
        <p className="text-lg tracking-wide font-semibold mt-4">
          {description}
        </p>
      ) : null}
    </h1>
  );
};

export default SectionTitle;
