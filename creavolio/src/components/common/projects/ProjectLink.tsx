"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ProjectLink({ link }: { link: string }) {
  if (!link || link === "#") return null;
  return <Link href={link} target="_blank" rel="noopener noreferrer" aria-label="Open project in a new tab" className="rad background-gradient text-white p-4 inline-flex items-center justify-center hover:opacity-80 focus-visible:outline focus-visible:outline-2"><ArrowRight aria-hidden="true" /></Link>;
}
