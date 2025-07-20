import { ReactNode } from "react";
import HeroImageCard from "./HeroImageCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import InfiniteTicker from "../about/InfiniteTicker";

const VCardSectionsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main id="main">
      <InfiniteTicker />

      <div className="lg:grid lg:grid-cols-12 gap-0">
        <HeroImageCard />

        <div className="lg:grid lg:col-span-9 lg:mt-0 ">
          <MaxWidthWrapper className="mt-32">{children}</MaxWidthWrapper>
        </div>
      </div>
    </main>
  );
};

export default VCardSectionsLayout;
