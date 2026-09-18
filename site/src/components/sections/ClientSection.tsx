import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const points = [
  "ce qu'il faut réellement développer ;",
  "quelles fonctionnalités sont nécessaires ;",
  "quelles fonctionnalités peuvent attendre ;",
  "quelle solution technique utiliser ;",
  "comment faire évoluer le projet.",
];

export function ClientSection() {
  return (
    <Section id="client">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-zinc-900/40 to-zinc-950 p-8 sm:p-12">
          <div className="glow-indigo absolute -right-20 -top-20 h-[300px] w-[300px] opacity-40" />

          <div className="relative">
            <h2 className="max-w-2xl text-2xl font-bold leading-relaxed text-white sm:text-3xl">
              Vous avez une idée, mais vous ne savez pas par où commencer ?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">C'est normal.</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Vous n'avez pas besoin de connaître les technologies, les
              frameworks ou l'architecture d'une application.
            </p>
            <p className="mt-5 text-xl font-bold text-indigo-400 sm:text-2xl">
              Expliquez-moi simplement votre idée.
            </p>

            <p className="mt-6 text-base text-zinc-400">Je vous aide à déterminer :</p>

            <ul className="mt-4 space-y-2.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base text-zinc-300"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-indigo-400"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="#contact" variant="primary">
                Parler de mon projet gratuitement
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}