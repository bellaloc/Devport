import { personal_data } from "@/data/home";
import SocialLinks from "../common/global/SocialLinks";
import { cn } from "@/lib/utils";
import styles from "../../styles.module.css";
import { TextEffect } from "../motion-primitives/text-effect";
import HomeBackground from "../common/home/HomeBackground";
import HeroImage from "../common/home/HeroImage";
import GoDown from "../common/home/GoDown";
import { landing_background_image_path } from "@/data/global";
const { showAnimation } = styles;

const hero_job_text_class =
  "font-black sm:tracking-wider select-none 2xl:text-[10.5rem] 2xl:leading-[10.5rem] xl:text-[9rem] xl:leading-[9rem] md:text-[6.5rem] md:leading-[6.5rem] sm:text-[4.5rem] sm:leading-[4.5rem] text-[3.5rem] leading-[3.5rem] text-wrap";

const Home = () => {
  return (
    <section
      className="!sticky top-0 left-0 z-10 bg-no-repeat bg-center bg-cover"
      id="home"
      style={{ backgroundImage: `url(${landing_background_image_path})` }}
    >
      <HomeBackground />

      <HeroImage />

      <GoDown />

      <div className="absolute md:p-8 p-4 rad top-[50%] translate-y-[-50%] z-50">
        <div
          className="uppercase space-y-8"
          style={{ wordBreak: "break-word" }}
        >
          <h1
            className={cn(
              showAnimation,
              "font-[800] text-gradient 2xl:text-[6.5rem] select-none 2xl:leading-[5rem] xl:text-[4rem] xl:leading-[4rem] md:text-[3rem] md:leading-[3rem] text-[2.75rem] leading-[2.75rem] text-wrap"
            )}
          >
            {personal_data.name}
          </h1>

          <div className="space-y-4">
            <TextEffect
              per="char"
              as="h1"
              speedSegment={0.1}
              speedReveal={0.1}
              preset="slide"
              className={cn(hero_job_text_class, "outlinedPureText")}
            >
              {personal_data.job.part1}
            </TextEffect>

            <TextEffect
              per="char"
              as="h1"
              speedSegment={0.1}
              speedReveal={0.1}
              preset="slide"
              className={cn(hero_job_text_class, "outlinedPureText")}
            >
              {personal_data.job.part2}
            </TextEffect>
          </div>

          <div className="bg-white/15 dark:bg-black/15 dark:md:bg-transparent md:bg-transparent rad w-fit">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
