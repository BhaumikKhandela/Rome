import Link from "next/link";
import { GsapReveal } from "./gsap-reveal";

const features = [
  "AI-powered code generation",
  "30+ language support",
  "One-click GitHub export",
  "Live browser preview",
];

const companies = [
  { name: "GitHub" },
  { name: "Vercel" },
  { name: "Linear" },
  { name: "Notion" },
  { name: "Slack" },
  { name: "Figma" },
  { name: "Raycast" },
  { name: "Sentry" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-10 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left column - 65% */}
          <GsapReveal animation="stagger" stagger={0.2} className="lg:col-span-8">
            <div className="mt-8 sm:mt-12">
              <h1 className="font-bold tracking-tight text-white leading-[0.9]">
                <span className="block text-[80px] sm:text-[120px] md:text-[150px] lg:text-[170px] bg-gradient-to-r from-[#C8D9FF] via-[#C7E0FF] to-[#D2E5FF] bg-clip-text text-transparent">
                  Code.
                </span>
                <span className="block text-[80px] sm:text-[120px] md:text-[150px] lg:text-[170px] mt-6 sm:mt-8 bg-gradient-to-r from-[#C8D9FF] via-[#C7E0FF] to-[#D2E5FF] bg-clip-text text-transparent">
                  Editor.
                </span>
                <span className="block text-[80px] sm:text-[120px] md:text-[150px] lg:text-[170px] mt-6 sm:mt-8 bg-gradient-to-r from-[#C8D9FF] via-[#C7E0FF] to-[#D2E5FF] bg-clip-text text-transparent">
                  Deploy.
                </span>
              </h1>
            </div>
          </GsapReveal>

          {/* Right column - 35% */}
          <GsapReveal animation="fade-up" delay={0.35} className="lg:col-span-4 lg:pt-16">
            <div>
              <p className="text-sm sm:text-base text-white/35 leading-relaxed">
                The modern development environment that helps you build, iterate,
                and ship faster than ever before. No setup required.
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-[3px] h-[3px] rounded-full bg-white/20 shrink-0" />
                    <span className="text-sm text-white/35">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/[0.08] hover:text-white/70"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Import source code
                </Link>
              </div>
            </div>
          </GsapReveal>
        </div>

        {/* Trusted by companies */}
       <GsapReveal animation="fade-up" delay={0.5}>
  <div className="mt-32 sm:mt-40">
    <p className="mb-10 text-center text-sm uppercase tracking-[0.35em] text-white/25">
      TRUSTED BY COMPANIES
    </p>

    <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8">
      {companies.map((company) => (
        <span
          key={company.name}
          className="
            text-lg
            md:text-xl
            font-medium
            tracking-tight
            text-white/35
            transition-all
            duration-300
            hover:text-white/60
          "
        >
          {company.name}
        </span>
      ))}
    </div>
  </div>
</GsapReveal>
      </div>
    </section>
  );
}
