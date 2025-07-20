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
      onClick={onClick}
    >
      <Button>
        <div className="bg-[var(--main)] rounded-full flex-center text-white p-4">
          <X size={60} className="group-hover:rotate-90 duration-300" />
        </div>
      </Button>
    </div>
  );
};

export default CloseButton;
