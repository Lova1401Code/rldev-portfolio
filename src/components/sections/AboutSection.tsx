import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <Section id="a-propos">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              À propos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bonjour, moi c'est le développeur derrière RL Dev.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <p>
              Je suis développeur web Full-Stack et j'accompagne les
              entreprises, entrepreneurs et porteurs de projets dans la création
              de solutions web modernes.
            </p>
            <p>
              Je travaille principalement avec des technologies comme{" "}
              <span className="font-semibold text-white">
                React, Next.js, NestJS, PostgreSQL et Docker
              </span>
              .
            </p>
            <p>
              Mon approche est simple :{" "}
              <span className="font-semibold text-indigo-400">
                comprendre votre besoin avant de commencer à coder.
              </span>
            </p>
            <p>
              L'objectif n'est pas simplement de vous livrer un site web, mais
              de créer une solution utile à votre activité.
            </p>
            <p>
              Je peux intervenir sur un projet complet, depuis la réflexion et
              la conception jusqu'au développement et la mise en ligne.
            </p>
          </div>
        </Reveal>

        {/* Decorative code block */}
        <Reveal delay={300} className="lg:col-span-2">
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-2 text-xs text-zinc-500">rl-dev.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-zinc-400">
              <code>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-indigo-400">rlDev</span> = {"{"}{"\n"}
                {"  "}philosophie:{" "}
                <span className="text-emerald-400">
                  "comprendre avant de coder"
                </span>
                ,{"\n"}
                {"  "}stack: [
                <span className="text-emerald-400">"React"</span>,{" "}
                <span className="text-emerald-400">"Next.js"</span>,{" "}
                <span className="text-emerald-400">"NestJS"</span>,{" "}
                <span className="text-emerald-400">"PostgreSQL"</span>,{" "}
                <span className="text-emerald-400">"Docker"</span>],{"\n"}
                {"  "}approche:{" "}
                <span className="text-emerald-400">
                  "du concept à la mise en ligne"
                </span>
                ,{"\n"}
                {"  "}objectif:{" "}
                <span className="text-emerald-400">
                  "une solution utile à votre activité"
                </span>
                ,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}