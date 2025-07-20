"use client";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { cn } from "@/lib/utils";

export type ButtonVariants = "default" | "ghost" | "outline" | "primary";

const VARIANTS = {
  default: "",
  ghost:
    "text-[var(--main)] hover:text-white hover:background-gradient h-14 overflow-hidden group",
  outline:
    "text-[var(--main)] border-[2px] border-[var(--main)] border-dashed hover:text-white bg-transparent hover:bg-[var(--main)] h-14 overflow-hidden group",
  primary: "background-gradient text-white h-14 overflow-hidden group",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children?: React.ReactNode; // Text displayed on the button
  magneticIntensity?: number;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  className,
  magneticIntensity = 0.25,
  ...props
}) => {
  return (
    <Magnetic intensity={magneticIntensity}>
      <button
        {...props}
        className={cn(
          "rad flex-center duration-300 relative flex-center uppercase text-nowrap",
          props.disabled
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "",
          VARIANTS[variant],
          className
        )}
      >
        {children}
      </button>
    </Magnetic>
  );
};

export default Button;
