"use client";
import Image from "next/image";
import { about_image, cv, is_available, is_freelancer } from "@/data/about";
import { personal_data } from "@/data/home";
import HireAvailability from "./HireAvailability";
import DashSeparator from "./DashSeparator";
import Link from "next/link";
import HeroButton from "./HeroButton";

import styles from "../../../styles.module.css";
import { cn } from "@/lib/utils";
const { rotation } = styles;

const HeroImageCard = () => {
  return (
    <div className="animated-duration lg:col-span-3 lg:h-[100vh] h-fit p-8 bg-[var(--bg-primary)] lg:sticky relative lg:top-0 transition-shadow border-b border-r border-[var(--border)]">
      <div className="p-4 relative rounded-full group">
        <Image
          src={about_image}
          alt={"me"}
          width={1000}
          height={1000}
          className="object-cover lg:group-hover:scale-110 group-hover:scale-[1.025] duration mx-auto border border-[var(--border-secondary)] rounded-full"
        />
        <div
          className={cn(
            "absolute left-0 top-0 size-full bg-transparent rounded-full border-[2px] border-[var(--main)] border-dashed",
            rotation
          )}
        />
      </div>

      <div className="mt-4 space-y-8 rounded-b-lg">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex justify-center">
            <h1 className="text-3xl text-center text-gradient font-[800]">
              {personal_data.name}
            </h1>
            <span className="text-3xl">👋🏼</span>
          </div>

          <div className="flex gap-1 uppercase justify-center items-center font-[600] flex-wrap">
            <p className="text-center text-sm!">
              {personal_data.job.part1} {personal_data.job.part2}
            </p>
            <DashSeparator className="w-4" />
            <p className="text-sm!">{is_freelancer ? "Freelancer" : ""}</p>
          </div>

          <HireAvailability isAvailable={is_available} />
        </div>

        <div className="flex flex-wrap gap-8">
          {is_available ? (
            <Link href="#contact" className="flex-1">
              <HeroButton text="Hire me" variant="primary" />
            </Link>
          ) : null}

          {cv.source ? (
            <Link href={cv.source} target="_blank" className="flex-1">
              <HeroButton text="Show CV" variant="outline" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HeroImageCard;
