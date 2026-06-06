export const fadeUp = {
  from: { opacity: 0, y: 50 },
  to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
};

export const fadeScale = {
  from: { opacity: 0, scale: 0.9 },
  to: { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
};

export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 0.8, ease: "power2.out" },
};

export const staggerChildren = (stagger: number = 0.15) => ({
  from: { opacity: 0, y: 50 },
  to: {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger,
  },
});
