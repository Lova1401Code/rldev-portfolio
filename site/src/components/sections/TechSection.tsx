import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { techCategories } from "@/data/tech";
import {
  Monitor,
  Server,
  Database,
  Container,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Container,
  BrainCircuit,
};

export function TechSection() {
  return (
    <Section id="technologies">
      <SectionHeading
        eyebrow="Technologies"
        title="Les technologies au service de votre projet"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Monitor;
          return (
            <Reveal key={cat.id} delay={i * 70}>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}