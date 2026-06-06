"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseRevealOptions {
  animation?: "fade-up" | "fade-scale" | "fade-in" | "stagger";
  delay?: number;
  stagger?: number;
  start?: string;
  toggleActions?: string;
}

export function useReveal<T extends HTMLElement>(options: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const {
    animation = "fade-up",
    delay = 0,
    stagger,
    start = "top 85%",
    toggleActions = "play none none reverse",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isStagger = animation === "stagger";

    const vars: gsap.TweenVars = {
      opacity: 0,
      y: animation === "fade-scale" || animation === "fade-in" ? 0 : 50,
      scale: animation === "fade-scale" ? 0.9 : 1,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      delay,
      stagger: isStagger ? (stagger ?? 0.15) : undefined,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions,
      },
    };

    const targets = isStagger ? el.children : el;
    const tl = gsap.fromTo(targets, vars, toVars);

    return () => {
      tl.kill();
    };
  }, [animation, delay, stagger, start, toggleActions]);

  return ref;
}
