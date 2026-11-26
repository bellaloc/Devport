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
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(range > 0 ? Math.min(100, Math.max(0, window.scrollY / range * 100)) : 0);
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", scrollHandler);
    return () => { window.removeEventListener("scroll", scrollHandler); window.removeEventListener("resize", scrollHandler); };
  });


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
      <nav aria-label="Portfolio sections"
        inert={!isShow}
        className={cn(
          "fixed z-30 bottom-[env(safe-area-inset-bottom,0px)] left-1/2 max-w-[calc(100%-1rem)] -translate-x-1/2 duration-300",
          isShow ? "-translate-y-4" : "translate-y-full"
        )}
      >
        <div className="hidden md:block">
        <Dock className="items-end pb-3 hover:backdrop-blur-0 hover:bg-[var(--bg-primary)] dark:hover:bg-[var(--bg-primary)] bg-[#bbb]/25 dark:bg-[#666]/25 backdrop-blur-lg rounded-full duration-300 border border-[var(--border)]">
          {sections.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <DockItem
                key={idx}
                ariaLabel={item.name.replace("-", " ")}
                onClick={() => { window.location.hash = item.name; }}
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
        </div>
        <div className="md:hidden flex items-center justify-center gap-1 min-[400px]:gap-2 p-2 rounded-full border border-[var(--border)] bg-[var(--bg-primary)] shadow-lg">
          {sections.map(({ name, Icon }) => (
            <Link key={name} href={`#${name}`} aria-label={name.replace("-", " ")} className="size-11 flex-center shrink-0 rounded-full border border-[var(--border)] text-[var(--text-primary)] active:bg-[var(--bg-secondary)]">
              <Icon size={22} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>
      <PageProgress isShow={isShow} scrollPercent={scrollPercent} />
    </>
  );
};

export default NavLinks;
