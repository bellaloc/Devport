"use client";
import { ChevronsDown } from "lucide-react";


import Link from "next/link";

const GoDown = () => {
  return (
    <div className="absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] md:bottom-8 left-1/2 -translate-x-1/2 z-[100] group">
      <Link href="#main" aria-label="Scroll to portfolio details" className="size-12 flex-center rounded-full border border-transparent hover:border-[var(--text-primary)]">
        <ChevronsDown className="text-[var(--text-primary)]" strokeWidth={1} size={32} aria-hidden="true" />
      </Link>
    </div>
  );
};

export default GoDown;
