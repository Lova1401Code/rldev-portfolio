import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { DotPattern } from "@/components/illustrations/BackgroundDecor";
import {
  Globe,
  AppWindow,
  RefreshCw,
  Wrench,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  AppWindow,
  RefreshCw,
  Wrench,
  Sparkles,
};

export function ServicesSection() {
  return (
    <Section id="services" className="relative">
      <DotPattern className="inset-0 h-full w-full opacity-50" />
      <div className="relative">
      <SectionHeading
        eyebrow="Services"
        title="Des solutions web adaptées à votre activité"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Globe;
          return (
            <Reveal key={service.id} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition-all duration-300 hover:border-indigo-500/40 hover:bg-zinc-900/60 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20 transition-colors group-hover:bg-indigo-500/20">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm font-medium text-indigo-400">
                  {service.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                {service.items && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-zinc-800 bg-zinc-950/50 px-2.5 py-1 text-xs text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {service.price && (
                  <p className="mt-5 text-sm font-semibold text-white">
                    {service.price}
                  </p>
                )}

                <div className="mt-auto pt-6">
                  <Button
                    href={service.ctaHref}
                    variant="ghost"
                    className="group/btn"
                  >
                    {service.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Button>
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