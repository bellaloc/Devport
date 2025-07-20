import { cn } from "@/lib/utils";

const DashSeparator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-8 border h-[1px] border-dashed border-[var(--border)] relative",
        className
      )}
    />
  );
};

export default DashSeparator;
