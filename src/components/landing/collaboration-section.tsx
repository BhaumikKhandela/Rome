import Image from "next/image";
import Link from "next/link";
import { GsapReveal } from "./gsap-reveal";

export function CollaborationSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width green background */}
      <div className="absolute inset-0 bg-[#B7F28E]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px] py-28 sm:py-36">
          {/* Left: Screenshot */}
          <GsapReveal animation="fade-up" delay={0.2}>
            <div className="relative flex justify-center">
              <div className="absolute -inset-10 mx-auto h-[120%] w-[90%] rounded-full bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-[90px] pointer-events-none" />
              <div className="relative w-full max-w-[600px]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#111318] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
                  <div className="mb-3 flex items-center justify-between rounded-t-[20px] bg-[#1a1d24] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/90" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
                      <div className="h-3 w-3 rounded-full bg-green-500/90" />
                    </div>
                    <div className="h-2 w-28 rounded-full bg-white/10" />
                  </div>
                  <div className="relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-black">
                    <Image
                      src="/app.png"
                      alt="Rome Editor"
                      width={1600}
                      height={900}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="mx-auto -mt-1 h-7 w-[96%] rounded-b-[28px] bg-gradient-to-b from-[#3a3f47] to-[#1f2329] shadow-[0_16px_40px_rgba(0,0,0,0.6)]" />
                <div className="mx-auto h-4 w-[42%] rounded-b-[18px] bg-[#0d0f12]" />
              </div>
            </div>
          </GsapReveal>

          {/* Right: Content */}
          <GsapReveal animation="fade-up">
            <div className="max-w-md">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40 mb-4">
                AI-Powered Development
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                Built for
                <br />
                AI-native workflows
              </h2>
              <p className="mt-5 text-base sm:text-lg text-black/50 leading-relaxed">
                Leverage AI to build faster from day one. Generate, refactor,
                and manage your projects with multi-model AI support.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
