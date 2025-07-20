import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import ArrowLink from "../global/ArrowLink";
import { is_animation_trigger_once } from "@/data/global";
import { Tilt } from "@/components/motion-primitives/tilt";
import DashSeparator from "../global/DashSeparator";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { useRef } from "react";
import CountTitle from "../global/CountTitle";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/motion-primitives/disclosure";
import { Spotlight } from "../../motion-primitives/spotlight";

type TimelineCardProps = {
  idx: number;
  year: {
    from: string;
    to: string;
  };
  event: string;
  description: string;
} & {
  isOpen: boolean;
  onOpenChange: (idx: number) => void;
};

const TimelineCard = ({
  idx,
  year: { from, to },
  event,
  description,
  isOpen,
  onOpenChange,
}: TimelineCardProps) => {
  const { ref: timelineCardRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleTriggerClick = () => triggerRef.current?.click();

  return (
    <div
      className="flex gap-8 group"
      ref={timelineCardRef}
      onClick={handleTriggerClick}
    >
      <div
        className={cn(
          "border-[2px] border-[var(--border)] group-hover:border-[var(--main)] border-dashed p-8 text-[var(--text-tertiary)] text-xl font-semibold group-hover:text-[var(--main)] hidden md:flex items-center gap-4 rad",
          animate ? "" : "opacity-0"
        )}
        style={{
          transition:
            "opacity var(--animation-duration), border 300ms, color 300ms",
        }}
      >
        <span>{from}</span>
        <DashSeparator />
        <span>{to}</span>
      </div>

      <div
        className={cn(
          "animated w-full",
          animate ? "" : "translate-y-8 opacity-50"
        )}
      >
        <Magnetic intensity={0.1}>
          <Tilt className="w-full" rotationFactor={2.5}>
            <div
              className={cn(" rad  relative w-full p-[1px]")}
              style={{
                transition:
                  "box-shadow var(--animation-duration), opacity var(--animation-duration), transform var(--animation-duration)",
              }}
            >
              <Spotlight size={250} />

              <div className="p-8 bg-[var(--bg-primary)] relative rad space-y-8">
                <div className="text-[var(--text-tertiary)] text-xl font-semibold flex md:hidden items-center gap-4">
                  <span>{from}</span>
                  <DashSeparator />
                  <span>{to}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-[var(--main)] duration-300">
                    {event}
                  </h3>

                  <Disclosure
                    open={isOpen}
                    onOpenChange={() => onOpenChange(idx)}
                    className={isOpen ? "space-y-8" : "space-y-0"}
                  >
                    <DisclosureContent>
                      <p>{description}</p>
                    </DisclosureContent>

                    <DisclosureTrigger ref={triggerRef}>
                      <div className="flex items-center justify-between">
                        <ArrowLink text={isOpen ? "hide" : "read more"} />
                        <CountTitle idx={idx} />
                      </div>
                    </DisclosureTrigger>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tilt>
        </Magnetic>
      </div>
    </div>
  );
};

export default TimelineCard;
