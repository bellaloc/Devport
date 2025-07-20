import { is_default_background, is_grid_spotlight } from "@/data/global";
import GridPattern from "../background/GridPattern";
import SparklesBackground from "../background/SparklesBackgronud";
import CircularBackground from "../background/CircularBackground";
import HexagonBG from "../background/HexagonBG";
import BlurryBallCursor from "../background/BlurryBallCursor";

const HomeBackground = () => {
  return (
    <>
      {is_grid_spotlight ? (
        <>
          <GridPattern />
          <BlurryBallCursor />
        </>
      ) : null}
      {is_default_background ? (
        <>
          <CircularBackground className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] dark:opacity-100" />
          <CircularBackground className="-right-48 -bottom-48 dark:opacity-100" />

          <HexagonBG />
          <SparklesBackground />
        </>
      ) : null}
    </>
  );
};

export default HomeBackground;
