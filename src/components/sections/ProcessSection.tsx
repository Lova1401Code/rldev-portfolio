import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { processIcons } from "@/components/illustrations/ProcessIllustrations";

export function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Comment ça marche ?"
        title="De votre idée à votre site en quelques étapes"
      />

      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-800 to-transparent lg:block" />

        <div className="space-y-6">
          {processSteps.map((step, i) => {
            const Icon = processIcons[i] ?? processIcons[0];
            return (
              <Reveal key={step.number} delay={i * 60}>
                <div
                  className={`flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:flex-row sm:items-start lg:w-[calc(50%-1.5rem)] ${
                    i % 2 === 0 ? "lg:ml-0" : "lg:ml-auto"
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/20">
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-400/70">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}