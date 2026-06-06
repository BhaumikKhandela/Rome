import Link from "next/link";
import { GsapReveal } from "./gsap-reveal";

export function CTA() {
  return (
    <section className="py-40 sm:py-48">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <GsapReveal animation="fade-scale">
          <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-12 sm:p-20 lg:p-28 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-cyan-500/8 to-sky-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Ready to start{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
                  building?
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-white/45 max-w-lg mx-auto leading-relaxed">
                Join thousands of developers already shipping faster with Rome.
                No credit card required.
              </p>

              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/landing"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started Free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white/90 hover:bg-white/[0.06]"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
