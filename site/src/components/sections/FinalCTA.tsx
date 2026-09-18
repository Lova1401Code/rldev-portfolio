import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <Section id="cta-final">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-10 text-center sm:p-16">
          {/* Glow accents */}
          <div className="glow-indigo absolute -left-20 -top-20 h-[300px] w-[300px] opacity-50" />
          <div className="glow-indigo absolute -bottom-20 -right-20 h-[300px] w-[300px] opacity-30" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Votre projet commence par une conversation.
            </h2>
            <p className="mt-5 text-xl font-semibold text-indigo-400 sm:text-2xl">
              Parlez-moi de votre idée.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Que vous soyez au début de votre réflexion ou que vous ayez déjà un
              projet précis, échangeons sur vos besoins.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="#contact" variant="primary">
                Démarrer mon projet
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}