"use client";
import { ChevronsDown } from "lucide-react";
import Button from "../global/Button";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import Link from "next/link";

const GoDown = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[100] group">
      <Link href="#main">
        <Button className="border !rounded-full border-transparent group-hover:border-[var(--text-primary)] p-4">
          <Magnetic intensity={0.25}>
            <ChevronsDown
              className="text-[var(--text-primary)]"
              strokeWidth={1}
              size={32}
            />
          </Magnetic>
        </Button>
      </Link>
    </div>
  );
};

export default GoDown;
