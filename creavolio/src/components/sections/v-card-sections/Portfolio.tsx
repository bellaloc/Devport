"use client";
import { projects } from "@/data/projects";
import Project from "../../common/projects/Project";
import { useState } from "react";
import ArrowLink from "../../common/global/ArrowLink";
import VCardSection from "@/components/common/global/VCardSection";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const MAX = 4;
  return (
    <VCardSection title="portfolio">
      <div className="grid 2xl:grid-cols-2 mt-4 gap-8">
        {projects.slice(0, MAX).map((item, i) => (
          <Project key={i} idx={i} {...item} />
        ))}

        {showAll
          ? projects
              .slice(MAX)
              .map((item, i) => <Project key={i} idx={i + MAX} {...item} />)
          : ""}
      </div>

      {projects.length > MAX && !showAll ? (
        <ArrowLink
          text={`Show All (+${projects.length - MAX})`}
          onClick={() => setShowAll(true)}
          className="mx-auto mt-8"
          size="xl"
        />
      ) : null}
    </VCardSection>
  );
};

export default Portfolio;
