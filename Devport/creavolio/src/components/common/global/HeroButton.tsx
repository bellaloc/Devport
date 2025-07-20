"use client";
import { cn } from "@/lib/utils";
import Button, { ButtonVariants } from "./Button";

const HeroButton = ({
  text,
  className,
  variant = "primary",
}: {
  text: string;
  className?: string;
  variant?: ButtonVariants;
}) => {
  return (
    <Button
      className={cn(className, "relative w-full text-2xl px-8 h-20")}
      title={text}
      variant={variant}
    >
      <div className="flex h-8 overflow-hidden">
        <div className="text-inherit flex flex-col select-none group-hover:-translate-y-full transition-transform duration-300">
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </Button>
  );
};

export default HeroButton;
