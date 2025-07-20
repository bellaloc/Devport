import { cn } from "@/lib/utils";

const ImageOverlay = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 bg-black/15 dark:bg-black/25 group-hover:bg-black/0 size-full duration-300",
        className
      )}
    />
  );
};

export default ImageOverlay;
