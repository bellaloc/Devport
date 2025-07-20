import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const PageProgress = ({
  isShow,
  scrollPercent,
}: {
  isShow: boolean;
  scrollPercent: number;
}) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 right-4 z-30 cursor-pointer group rounded-full duration-300",
        isShow ? "sm:-translate-y-4 -translate-y-20" : "translate-y-full"
      )}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="back to home section"
    >
      <Magnetic>
        <div
          className="rounded-full flex justify-center items-center transition-colors size-16"
          style={{
            background: `conic-gradient(var(--main) ${scrollPercent}%, var(--border) 0)`,
          }}
        >
          <div
            className={cn(
              "absolute rounded-full bg-[var(--bg-secondary)] size-14"
            )}
          />
          <div className=" rounded-full flex justify-center items-center duration-300 cursor-pointer group">
            <Home
              size={20}
              className="relative text-[var(--text-primary)]"
              strokeWidth={1.5}
            />
            <div className="absolute top-0 group-hover:opacity-100 opacity-0 -translate-y-6 group-hover:-translate-y-8 rad px-2 py-0.5 text-xs !bg-[var(--bg-primary-inverse)] !text-[var(--text-primary-inverse)] border-none duration-300 uppercase">
              home
            </div>
          </div>
        </div>
      </Magnetic>
    </div>
  );
};

export default PageProgress;
