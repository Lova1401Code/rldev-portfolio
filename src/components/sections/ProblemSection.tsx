import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BlobShape } from "@/components/illustrations/BackgroundDecor";

export function ProblemSection() {
  return (
    <Section id="probleme" className="relative">
      <BlobShape className="left-0 top-10 h-[400px] w-[400px] opacity-60" />
      <div className="relative">
      <Reveal>
        <p className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-relaxed text-white sm:text-3xl md:leading-relaxed">
          Votre activité mérite une présence en ligne à la hauteur de vos
          ambitions.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center">
        <Reveal delay={100}>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            Aujourd'hui, votre site web est souvent le premier contact entre
            votre entreprise et vos clients.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            Un site lent, dépassé ou difficile à utiliser peut donner une
            mauvaise première impression.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-lg font-semibold leading-relaxed text-indigo-400 sm:text-xl">
            RL Dev vous accompagne dans la création d'une solution web claire,
            moderne et adaptée à votre activité.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            Que vous soyez entrepreneur, commerçant, association, établissement,
            professionnel ou petite entreprise, l'objectif reste le même :
          </p>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-xl font-bold text-white sm:text-2xl">
            transformer votre idée en une présence web professionnelle.
          </p>
        </Reveal>
      </div>
      </div>
    </Section>
  );
}