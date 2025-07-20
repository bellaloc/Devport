import { cn } from "@/lib/utils";

const ToolTip = ({ title }: { title: string }) => {
  return (
    <div
      className={cn(
        " uppercase px-2 py-1 absolute left-1/2 -translate-x-1/2 duration-300 dark:font-[500] text-sm rounded-full",
        "group-hover:opacity-100 opacity-0 -translate-y-12",
        "bg-[var(--bg-primary-inverse)] text-[var(--text-primary-inverse)]"
      )}
    >
      {title}
      <div className="absolute border-[4px] border-transparent border-t-[var(--bg-primary-inverse)] left-[50%] translate-x-[-50%] -bottom-3 translate-y-[-50%]" />
    </div>
  );
};

export default ToolTip;
