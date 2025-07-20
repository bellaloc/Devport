"use client";
import { Spotlight } from "../../motion-primitives/spotlight";
import { useEffect, useState } from "react";

const GridPattern = () => {
  const [isSurfaceExist, setIsSurfaceExist] = useState(true);

  useEffect(() => setIsSurfaceExist(false), []);
  return (
    <>
      {/* to make Spotlight animation work in the first time */}
      {isSurfaceExist ? (
        <div className="absolute left-0 top-0 size-full z-[100]"></div>
      ) : null}
      <Spotlight className="-z-1" size={350} parentPosition="sticky" />
      <div className="absolute left-0 top-0 w-screen h-screen grid grid-cols-8 grid-rows-4 gap-[1px]">
        {Array.from({ length: 32 }).map((_, index) => (
          <div key={index} className="bg-[var(--bg-secondary)]" />
        ))}
      </div>
    </>
  );
};

export default GridPattern;
