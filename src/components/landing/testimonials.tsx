import Image from "next/image";
import { GsapReveal } from "./gsap-reveal";

const testimonials = [
  {
    quote:
      "Rome has fundamentally changed how our team ships software. The integrated environment eliminates context switching.",
    name: "Sarah Chen",
    role: "Frontend Lead",
    avatar: "/avatars/avatar-1.svg",
  },
  {
    quote:
      "The AI-powered code generation is incredible. I can prototype entire features in minutes, and the live preview shows me exactly what I'm building.",
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    avatar: "/avatars/avatar-2.svg",
  },
  {
    quote:
      "The preview feature is a game-changer. Being able to see AI-generated code come to life instantly has completely transformed our prototyping process.",
    name: "Elena Rodriguez",
    role: "Tech Lead",
    avatar: "/avatars/avatar-3.svg",
  },
  {
    quote:
      "Rome is the only tool I need to go from idea to production. The AI assistant alone saves me hours of work every single day.",
    name: "Taylor Liu",
    role: "Product Engineer",
    avatar: "/avatars/avatar-5.svg",
  },
];

export function Testimonials() {
  return (
    <section className="py-40 sm:py-48">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <GsapReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              What developers say
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/35 max-w-xl mx-auto leading-relaxed">
              Trusted by engineers at the world&apos;s best teams.
            </p>
          </div>
        </GsapReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <GsapReveal key={testimonial.name} animation="fade-up" delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.025]">
                <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/70">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-white/35">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
