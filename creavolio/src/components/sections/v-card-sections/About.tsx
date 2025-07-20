"use client";
import AboutCard from "../../common/about/AboutCard";
import { languages, skills, tools } from "@/data/about";
import Tool from "../../common/about/Tool";
import LinearProgress1 from "../../common/about/LinearProgress1";
import CircularProgress from "../../common/about/CircularProgress";
import ArrowLink from "../../common/global/ArrowLink";
import HappyClientsTicker from "../../common/about/HappyClientsTicker";
import Goals from "../../common/about/Goals";
import VCardSection from "@/components/common/global/VCardSection";
import ProjectsTicker from "@/components/common/projects/ProjectsTicker";
import Link from "next/link";

const About = () => {
  return (
    <VCardSection title="about-me">
      <div className="lg:grid lg:grid-cols-12 lg:space-y-0 space-y-8 lg:gap-8">
        <AboutCard title="What I Use">
          <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-8">
            {tools.map((item, i) => (
              <Tool {...item} key={i} duration={(i + 1) * 300} />
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Skills" className="2xl:col-span-7 xl:col-span-6">
          <div className="flex flex-col gap-8">
            {skills.map((item, i) => (
              <LinearProgress1
                key={i}
                value={item.percent}
                title={item.skill}
              />
            ))}
          </div>
        </AboutCard>

        <AboutCard title="Languages" className="2xl:col-span-5 xl:col-span-6">
          <div className="flex flex-wrap gap-8">
            {languages.map((item, i) => (
              <CircularProgress
                key={i}
                value={item.percent}
                title={item.language}
              />
            ))}
          </div>
        </AboutCard>

        <div className="col-span-12">
          <AboutCard title="Resent Projects">
            <div className="space-y-8">
              <ProjectsTicker />

              <Link href="#portfolio" className="block">
                <ArrowLink text="All Projects" />
              </Link>
            </div>
          </AboutCard>
        </div>

        <AboutCard title="Clients Says">
          <HappyClientsTicker />
        </AboutCard>

        <AboutCard title="my Goals">
          <Goals />
        </AboutCard>
      </div>
    </VCardSection>
  );
};

export default About;
