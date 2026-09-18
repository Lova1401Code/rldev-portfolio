import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { ArrowUpRight, Lock } from "lucide-react";

export function ProjectsSection() {
  return (
    <Section id="realisations">
      <SectionHeading
        eyebrow="Réalisations"
        title="Des projets concrets, pas seulement des maquettes."
        subtitle="Découvrez quelques projets réalisés et les solutions développées."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => {
          const disabled = project.href === null;
          const Wrapper = disabled
            ? ({ children }: { children: React.ReactNode }) => (
                <div className="block">{children}</div>
              )
            : ({ children }: { children: React.ReactNode }) => (
                <a
                  href={project.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {children}
                </a>
              );

          return (
            <Reveal key={project.id} delay={i * 90}>
              <Wrapper>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.badge && (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 backdrop-blur">
                        <Lock size={12} />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-indigo-400">
                          {project.subtitle}
                        </p>
                      </div>
                      {!disabled && (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-all group-hover:border-indigo-500/50 group-hover:text-indigo-400">
                          <ArrowUpRight size={18} />
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-zinc-800 bg-zinc-950/50 px-2.5 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm font-semibold text-indigo-400">
                      {disabled ? "En savoir plus →" : "Voir le projet →"}
                    </p>
                  </div>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}