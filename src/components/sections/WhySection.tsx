import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyItems } from "@/data/why";
import { BlobShape } from "@/components/illustrations/BackgroundDecor";
import {
  Palette,
  Smartphone,
  Gauge,
  Ruler,
  HeartHandshake,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Smartphone,
  Gauge,
  Ruler,
  HeartHandshake,
  TrendingUp,
};

export function WhySection() {
  return (
    <Section id="pourquoi" className="relative">
      <BlobShape className="right-0 bottom-10 h-[400px] w-[400px] opacity-50" />
      <div className="relative">
      <SectionHeading
        eyebrow="Pourquoi RL Dev ?"
        title="Un développement pensé pour votre activité"
        subtitle="Je ne me contente pas de créer une interface qui fonctionne. Chaque projet est pensé autour de vos besoins, de vos utilisateurs et de vos objectifs."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyItems.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Palette;
          return (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/40 to-zinc-950/20 p-6 transition-colors hover:border-zinc-700">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
      </div>
    </Section>
  );
}