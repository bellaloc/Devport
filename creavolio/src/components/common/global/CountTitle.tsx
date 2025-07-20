import { cn } from "@/lib/utils";

const CountTitle = ({
  idx,
  className,
}: {
  idx: number;
  className?: string;
}) => {
  return (
    <h4
      className={cn(
        "text-[3rem] sm:leading-[2rem] leading-[3rem] font-bold opacity-25 group-hover:opacity-100 duration-300",
        idx === 0 ? "pr-2" : "",
        className
      )}
    >
      {`${idx >= 9 ? "" : 0}${idx + 1}`}
    </h4>
  );
};

export default CountTitle;
