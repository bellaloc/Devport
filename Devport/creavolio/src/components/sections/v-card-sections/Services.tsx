"use client";
import { services } from "@/data/services";
import { useState } from "react";
import ArrowLink from "../../common/global/ArrowLink";
import Service from "../../common/services/Service";
import VCardSection from "@/components/common/global/VCardSection";

const Services = () => {
  const MAX = 8;
  const [showAll, setShowAll] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);

  const onOpenChange = (idx: number) => {
    setActiveServiceIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <VCardSection title="services">
      <div className="grid xl:grid-cols-2 gap-8 mt-4">
        {services.slice(0, MAX).map((item, i) => (
          <Service
            key={i}
            idx={i}
            {...item}
            isOpen={activeServiceIdx === i}
            onOpenChange={() => onOpenChange(i)}
          />
        ))}

        {showAll
          ? services.slice(MAX).map((item, i) => {
              const index = i + MAX;
              return (
                <Service
                  key={index}
                  idx={index}
                  {...item}
                  isOpen={activeServiceIdx === index}
                  onOpenChange={() => onOpenChange(index)}
                />
              );
            })
          : ""}
      </div>

      {services.length > MAX && !showAll ? (
        <ArrowLink
          text={`Show All (+${services.length - MAX})`}
          onClick={() => setShowAll(true)}
          className="mx-auto mt-8"
          size="xl"
        />
      ) : null}
    </VCardSection>
  );
};

export default Services;
