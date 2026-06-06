"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { GsapReveal } from "./gsap-reveal";

const developers = [
  { name: "Sarah Chen", avatar: "/avatars/avatar-1.svg" },
  { name: "Marcus Johnson", avatar: "/avatars/avatar-2.svg" },
  { name: "Elena Rodriguez", avatar: "/avatars/avatar-3.svg" },
  { name: "Arjun Kapoor", avatar: "/avatars/avatar-4.svg" },
  { name: "Taylor Liu", avatar: "/avatars/avatar-5.svg" },
  { name: "Riley Nakamura", avatar: "/avatars/avatar-6.svg" },
  { name: "Dani Park", avatar: "/avatars/avatar-7.svg" },
  { name: "Liam Wescott", avatar: "/avatars/avatar-8.svg" },
];

function MarqueeRow({ items, direction = "left" }: { items: typeof developers; direction?: "left" | "right" }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;
    const duration = totalWidth / 30;

    gsap.to(el, {
      x: direction === "left" ? -totalWidth : 0,
      duration,
      ease: "none",
      repeat: -1,
    });
  }, [direction]);

  return (
    <div className="overflow-hidden" ref={rowRef}>
      <div className="flex gap-8 sm:gap-12 items-center w-max">
        {[...items, ...items].map((dev, i) => (
          <div key={`${dev.name}-${i}`} className="flex flex-col items-center gap-3 shrink-0">
            <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden ring-2 ring-white/5">
              <Image
                src={dev.avatar}
                alt={dev.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-white/60 whitespace-nowrap">
              {dev.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DeveloperShowcase() {
  return (
    <section className="py-40 sm:py-48 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <GsapReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Loved by{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
                developers
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/35 max-w-xl mx-auto leading-relaxed">
              Join thousands of developers who ship faster with Rome.
            </p>
          </div>
        </GsapReveal>
      </div>

      <div className="space-y-8 sm:space-y-10">
        <MarqueeRow items={developers} direction="left" />
        <MarqueeRow items={[...developers].reverse()} direction="right" />
      </div>
    </section>
  );
}
