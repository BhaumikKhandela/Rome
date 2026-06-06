import { GsapReveal } from "./gsap-reveal";

const technologies = [
  { name: "React" },
  { name: "Vue" },
  { name: "Angular" },
  { name: "Node" },
  { name: "Next" },
  { name: "Svelte" },
  { name: "Astro" },
];

export function DeployAnywhere() {
  return (
    <section className="py-40 sm:py-48">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <GsapReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              Deploy anywhere,
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
                with metabox
              </span>
            </h2>
          </div>
        </GsapReveal>

        <GsapReveal animation="fade-up" delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="text-sm sm:text-base font-medium text-white/25 transition-colors duration-300 hover:text-white/50"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
