import Image from "next/image";
import { GsapReveal } from "./gsap-reveal";

export function WorkspacePreview() {
  return (
    <section className="py-40 sm:py-48">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <GsapReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Every day the metabox
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
                is always growing
              </span>
            </h2>
          </div>
        </GsapReveal>

        {/* Layered device mockups */}
        <GsapReveal animation="fade-up" delay={0.2}>
          <div className="relative flex flex-col items-center">
            {/* Desktop */}
            <div className="relative w-full max-w-[1100px] rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.015] p-2 sm:p-3 shadow-2xl z-30">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/app.png"
                  alt="Rome Desktop"
                  width={1400}
                  height={788}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.04] pointer-events-none" />
            </div>

            {/* Laptop (offset behind) */}
            <div className="relative -mt-16 sm:-mt-24 w-full max-w-[900px] rounded-2xl border border-white/[0.04] bg-white/[0.01] p-2 shadow-lg z-20 opacity-60 scale-[0.92]">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/app.png"
                  alt="Rome Laptop"
                  width={1400}
                  height={788}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Phone (offset further behind) */}
            <div className="relative -mt-16 sm:-mt-24 w-full max-w-[700px] rounded-2xl border border-white/[0.03] bg-white/[0.01] p-2 shadow-lg z-10 opacity-30 scale-[0.84]">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/app.png"
                  alt="Rome Phone"
                  width={1400}
                  height={788}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
