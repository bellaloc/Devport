"use client";
import { spinning_text_words } from "@/data/home";
import { ArrowDown } from "lucide-react";
import Button from "./Button";
import CircularText from "@/components/motion-primitives/spinning-text";
import { cn } from "@/lib/utils";
import styles from "../../../styles.module.css";
import Link from "next/link";
const { showAnimation } = styles;

const HeroSpinningText = () => {
  return (
    <div className="absolute right-56 bottom-36">
      <Link href="#contact" className={cn("group", showAnimation)}>
        <Button className="animated-duration absolute position-center  size-44 hover:bg-[var(--main)] flex-center !rounded-full">
          <CircularText
            text={spinning_text_words}
            onHover="slowDown"
            spinDuration={20}
            className="text-white size-60 absolute position-center text-sm!"
          />

          <div className="animated-duration size-12 !rounded-full flex-center group-hover:bg-[var(--bg-primary-inverse)] text-white group-hover:text-[var(--text-primary-inverse)]">
            <ArrowDown className="text-inherit" />
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default HeroSpinningText;
