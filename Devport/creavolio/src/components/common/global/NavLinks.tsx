"use client";
import {
  FlaskConical,
  Layers3,
  MailCheck,
  ScrollText,
  User,
} from "lucide-react";
import PageProgress from "./PageProgress";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollPercent(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const router = useRouter();

  const sections = [
    { name: "about-me", Icon: User },
    { name: "services", Icon: ScrollText },
    { name: "experience", Icon: FlaskConical },
    { name: "portfolio", Icon: Layers3 },
    { name: "contact", Icon: MailCheck },
  ];

  const isShow = scrollPercent > 3;

  return (
    <>
      <nav
        className={cn(
          "fixed z-30 bottom-0 left-1/2 max-w-full -translate-x-1/2 duration-300",
          isShow ? "-translate-y-4" : "translate-y-full"
        )}
      >
        <Dock className="items-end pb-3 hover:backdrop-blur-0 hover:bg-[var(--bg-primary)] dark:hover:bg-[var(--bg-primary)] bg-[#bbb]/25 dark:bg-[#666]/25 backdrop-blur-lg rounded-full duration-300 border border-[var(--border)]">
          {sections.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <DockItem
                key={idx}
                onClick={() => router.push(`#${item.name.toLowerCase()}`)}
                className="aspect-square rounded-full transition-colors duration-300 group bg-[var(--bg-secondary)] hover:bg-[var(--bg-primary-inverse)] flex-center border border-[var(--border)]"
              >
                <DockLabel className="!bg-[var(--bg-primary-inverse)] !text-[var(--text-primary-inverse)] uppercase border-none">
                  {item.name.split("-").join(" ")}
                </DockLabel>
                <DockIcon className="text-[var(--text-primary)] group-hover:text-[var(--text-primary-inverse)] duration-300">
                  <Icon className="text-inherit" strokeWidth={1.5} />
                </DockIcon>
              </DockItem>
            );
          })}
        </Dock>
      </nav>
      <PageProgress isShow={isShow} scrollPercent={scrollPercent} />
    </>
  );
};

export default NavLinks;
