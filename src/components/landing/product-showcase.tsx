import Image from "next/image";
import { GsapReveal } from "./gsap-reveal";

export function ProductShowcase() {
  return (
    <section id="product" className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <GsapReveal animation="fade-up" delay={0.2}>
          <div className="relative flex justify-center">
            {/* Glow behind laptop */}
            <div className="absolute -inset-10 mx-auto h-[120%] w-[90%] rounded-full bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-[90px] pointer-events-none" />

            {/* Laptop mockup */}
            <div className="relative w-full max-w-[1240px]">
              {/* Screen section */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#111318] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
                {/* Top bar / bezel */}
                <div className="mb-3 flex items-center justify-between rounded-t-[20px] bg-[#1a1d24] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/90" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
                    <div className="h-3 w-3 rounded-full bg-green-500/90" />
                  </div>

                  <div className="h-2 w-28 rounded-full bg-white/10" />
                </div>

                {/* Screen image */}
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

              {/* Laptop base */}
              <div className="mx-auto -mt-1 h-7 w-[96%] rounded-b-[28px] bg-gradient-to-b from-[#3a3f47] to-[#1f2329] shadow-[0_16px_40px_rgba(0,0,0,0.6)]" />
              <div className="mx-auto h-4 w-[42%] rounded-b-[18px] bg-[#0d0f12]" />
            </div>
          </div>
        </GsapReveal>

        <GsapReveal animation="fade-up" delay={0.35}>
          <p className="mx-auto mt-10 max-w-[620px] text-center text-sm leading-relaxed text-white/35 sm:text-base">
            A powerful AI code editor with multi-model support, live browser
            preview, and one-click GitHub export — all in your browser.
          </p>
        </GsapReveal>
      </div>
    </section>
  );
}