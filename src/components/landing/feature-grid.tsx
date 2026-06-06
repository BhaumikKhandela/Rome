import { GsapReveal } from "./gsap-reveal";

const features = [
  { title: "Code Intelligence", desc: "Smart autocomplete, syntax highlighting, and real-time error detection." },
  { title: "AI Chat Agent", desc: "Chat with AI to generate, refactor, and manage your entire codebase." },
  { title: "Live Browser Preview", desc: "Run npm install && npm run dev in your browser. See changes live." },
  { title: "AI-Powered", desc: "Multi-model AI support (Groq, Gemini, Kimi K2) for inline suggestions, quick edits, and debugging." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {features.map((feature, i) => (
            <GsapReveal key={feature.title} animation="fade-up" delay={i * 0.08}>
              <div className="bg-[#050505] p-8 sm:p-10 h-full transition-colors duration-300 hover:bg-white/[0.02]">
                <h3 className="text-base font-semibold text-white/80 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
