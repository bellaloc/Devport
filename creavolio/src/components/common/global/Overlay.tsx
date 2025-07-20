import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

const Overlay = ({
  onClick,
  className,
  style,
}: {
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "fixed bg-white/50 dark:bg-black/50 backdrop-blur-sm left-0 top-0 size-full z-40",
        className
      )}
      style={style}
      onClick={onClick}
    />
  );
};

export default Overlay;
