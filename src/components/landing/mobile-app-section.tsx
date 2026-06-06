import Image from "next/image";
import Link from "next/link";
import { GsapReveal } from "./gsap-reveal";

export function MobileAppSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width light blue background */}
      <div className="absolute inset-0 bg-[#AFC8FF]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px] py-28 sm:py-36">
          {/* Left: Content */}
          <GsapReveal animation="fade-up">
            <div className="max-w-md">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40 mb-4">
                Mobile App
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                Your code editor,
                <br />
                in your pocket
              </h2>
              <p className="mt-5 text-base sm:text-lg text-black/50 leading-relaxed">
                Access your projects from any device. The editor is fully
                responsive, so you can review and edit code on the go.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </GsapReveal>

          {/* Right: Device image */}
          <GsapReveal animation="fade-up" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-lg w-full">
                <Image
                  src="/app.png"
                  alt="Rome Mobile App"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
