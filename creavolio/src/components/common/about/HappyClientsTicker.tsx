import { clients } from "@/data/about";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";
import styles from "../../../styles.module.css";
import { Quote } from "lucide-react";
import DashSeparator from "../global/DashSeparator";
import CountTitle from "../global/CountTitle";
const { slider, sliderContainer } = styles;

const Clients = () => {
  return (
    <div
      className={cn("space-y-8", slider)}
      style={{ animationDuration: `${clients.length * 4}s` }}
    >
      {clients.map((item, i) => (
        <div
          key={i}
          className="space-y-2 group p-8 bg-[var(--bg-primary)] rad border border-[var(--border-secondary)]"
        >
          <p className="italic">
            {"“"}
            {item.comment}
            {"”"}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="capitalize">{item.name}</h3>
            <DashSeparator />
            <StarRating averageRate={item.rate} />
            <Quote className="ml-auto text-[var(--text-tertiary)] opacity-25" />
            <CountTitle idx={i} />
          </div>
        </div>
      ))}
    </div>
  );
};

const HappyClientsTicker = () => {
  return (
    <div
      className={cn(
        "h-96 overflow-hidden flex flex-col vertical-mask gap-8",
        sliderContainer
      )}
    >
      <Clients />
      <Clients />
    </div>
  );
};

export default HappyClientsTicker;
