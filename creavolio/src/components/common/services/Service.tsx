"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ArrowLink from "../global/ArrowLink";
import { is_animation_trigger_once } from "@/data/global";
import { Tilt } from "@/components/motion-primitives/tilt";
import { Spotlight } from "../../motion-primitives/spotlight";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import CountTitle from "../global/CountTitle";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/motion-primitives/disclosure";
import { useRef } from "react";
import Button from "../global/Button";
import { useServiceContext } from "@/context/ServiceContext";
import Link from "next/link";

export type ServiceProps = {
  service: string;
  description: string;
  Icon: LucideIcon;
  idx: number;
} & {
  isOpen: boolean;
  onOpenChange: (idx: number) => void;
};

const Service = ({
  service,
  description,
  Icon,
  idx,
  isOpen,
  onOpenChange,
}: ServiceProps) => {
  const { ref: serviceRef, inView: animate } = useInView({
    triggerOnce: is_animation_trigger_once,
  });

  const { setIsGetService, setServiceIdx } = useServiceContext();

  const getService = () => {
    setServiceIdx(idx);
    setIsGetService(true);
  };

  const triggerRef = useRef<HTMLButtonElement>(null); // Ref for the DisclosureTrigger

  const handleTriggerClick = () => triggerRef.current?.click();

  return (
    <div
      className={cn("animated", animate ? "" : "translate-y-16 opacity-50")}
      ref={serviceRef}
      onClick={handleTriggerClick}
    >
      <Magnetic intensity={0.1}>
        <Tilt rotationFactor={isOpen ? 0 : 8}>
          <div className="overflow-hidden rad group relative p-[1px]">
            <Spotlight size={200} parentPosition="relative" />
            <div className="relative h-full w-full rad flex gap-8 bg-[var(--bg-primary)] p-8">
              <div className="size-24 duration-300 sm:flex items-center justify-center hidden rad  bg-[var(--bg-secondary)]">
                <Icon
                  strokeWidth={1}
                  className="text-[var(--text-secondary)] md:size-12 size-12 duration-300 group-hover:text-[var(--main)]"
                />
              </div>

              <div className="flex flex-col gap-4 justify-between flex-1">
                <h2
                  className={cn(
                    "text-xl duration-300 font-[600] group-hover:text-[var(--main)]"
                  )}
                >
                  {service}
                </h2>

                <Disclosure
                  open={isOpen}
                  onOpenChange={() => onOpenChange(idx)}
                  className={isOpen ? "space-y-8" : "space-y-0"}
                >
                  <DisclosureContent className="overflow-visible">
                    <p>{description}</p>
                    <Link href="#contact">
                      <Button
                        variant="outline"
                        className="p-8 mt-4 rad"
                        magneticIntensity={0}
                        onClick={getService}
                      >
                        Get the service
                      </Button>
                    </Link>
                  </DisclosureContent>

                  <DisclosureTrigger
                    ref={triggerRef}
                    className="flex justify-between items-end"
                  >
                    <div className="flex justify-between items-end">
                      <ArrowLink text={isOpen ? "hide" : "read more"} />
                      <CountTitle idx={idx} className="hidden sm:inline" />
                    </div>
                  </DisclosureTrigger>
                </Disclosure>
              </div>
            </div>
          </div>
        </Tilt>
      </Magnetic>
    </div>
  );
};

export default Service;
