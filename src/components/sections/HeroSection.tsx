import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      {/* Grid + glow background */}
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="glow-indigo absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2" />
      <div className="glow-indigo absolute top-20 -right-40 -z-10 h-[300px] w-[400px] opacity-50" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32 lg:flex-row lg:items-center lg:text-left">
        {/* Text */}
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur">
            <Sparkles size={14} className="text-indigo-400" />
            Développement web sur mesure
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
            Un site web moderne pour{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              donner vie
            </span>{" "}
            à votre projet.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Je conçois et développe des sites web modernes, rapides et adaptés à
            vos besoins pour vous aider à présenter votre activité, gagner en
            visibilité et développer votre présence en ligne.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="primary">
              Parler de mon projet
            </Button>
            <Button href="#realisations" variant="secondary">
              Voir mes réalisations
            </Button>
          </div>

          <p className="mt-10 text-sm font-medium text-zinc-500">
            Développement sur mesure • Design moderne • Accompagnement personnalisé
          </p>
        </div>

        {/* Illustration */}
        <div className="mt-14 flex-1 lg:mt-0 lg:pl-8">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}