"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectLink = ({ link }: { link: string }) => {
  if (!/^https?:\/\//i.test(link)) return null;
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open project website (opens in a new tab)"
      className="rad flex-center duration-300 relative background-gradient text-white h-14 overflow-hidden p-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <ArrowRight aria-hidden="true" className="inline ml-1 duration group-hover:-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
};

export default ProjectLink;
