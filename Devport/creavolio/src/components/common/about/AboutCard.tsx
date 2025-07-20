import { Spotlight } from "../../motion-primitives/spotlight";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const AboutCard = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative  p-[1px] bg-[var(--bg-primary)] rad transition-shadow lg:col-span-12 border border-[var(--border-secondary)]",
        className
      )}
    >
      <Spotlight size={400} />
      <div className="relative space-y-8 p-8 bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)] rad h-full">
        <h1 className="animated-duration text-3xl font-semibold tracking-wide transition-transform">
          {title}
        </h1>
        <>{children}</>
      </div>
    </div>
  );
};

export default AboutCard;
