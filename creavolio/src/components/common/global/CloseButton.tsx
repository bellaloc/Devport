"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Button from "./Button";

const CloseButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "animated-duration fixed right-4 group top-0 z-[42]",
        className
      )}
    >
      <Button type="button" aria-label="Close project details" onClick={onClick}>
        <div className="bg-[var(--main)] rounded-full flex-center text-white p-2 sm:p-3">
          <X size={28} className="group-hover:rotate-90 duration-300" />
        </div>
      </Button>
    </div>
  );
};

export default CloseButton;
