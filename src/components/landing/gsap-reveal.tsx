"use client";

import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-scale" | "fade-in" | "stagger";
  delay?: number;
  stagger?: number;
  as?: "div" | "section" | "article";
}

export function GsapReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  stagger,
  as: Tag = "div",
}: GsapRevealProps) {
  const ref = useReveal<HTMLDivElement>({ animation, delay, stagger });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
