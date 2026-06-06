import Link from "next/link";
import Image from "next/image";
import { GsapReveal } from "./gsap-reveal";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col items-center pt-4">
      <GsapReveal animation="fade-up" delay={0.1} className="w-full flex flex-col items-center">
        <div className="w-[92vw] max-w-[1400px] mx-auto px-4 sm:px-6">
          <div
            className="flex items-center justify-between h-[52px] rounded-xl px-5"
            style={{ background: "rgba(15,15,15,0.65)", backdropFilter: "blur(10px)" }}
          >
            {/* Left group: Logo + App name + Nav links */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Rome"
                  width={16}
                  height={16}
                  className="opacity-70"
                />
                <span className="text-sm font-medium text-white/60">Rome</span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs font-medium tracking-wide text-white/40 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white/80"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Announcement bar */}
        <div className="w-[92vw] max-w-[1400px] mx-auto px-4 sm:px-6 mt-2">
          <div
            className="flex items-center justify-center gap-2 h-[36px] rounded-lg border border-white/[0.03]"
            style={{ background: "rgba(15,15,15,0.4)", backdropFilter: "blur(10px)" }}
          >
            <span className="inline-flex items-center rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium text-white/50 uppercase tracking-wide">
              New
            </span>
            <span className="text-xs text-white/35">
              Introduction to product update — shipping faster with Rome
            </span>
          </div>
        </div>
      </GsapReveal>
    </header>
  );
}
