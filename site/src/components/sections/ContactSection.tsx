import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Parlons de votre projet."
        subtitle="Vous avez besoin d'un site web pour votre activité ? Vous souhaitez moderniser votre présence en ligne ? Ou vous avez simplement une idée et vous voulez savoir si elle est réalisable ?"
      />

      <Reveal>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg font-semibold text-indigo-400">
          Écrivez-moi. Je prendrai le temps de comprendre votre besoin et de
          vous orienter vers la solution adaptée.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
        {/* WhatsApp */}
        <Reveal delay={0}>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 text-center transition-all hover:border-indigo-500/40 hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 ring-1 ring-green-500/20">
              <MessageCircle size={26} />
            </div>
            <div>
              <h3 className="font-bold text-white">WhatsApp</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Discuter sur WhatsApp
              </p>
            </div>
          </a>
        </Reveal>

        {/* Email */}
        <Reveal delay={100}>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 text-center transition-all hover:border-indigo-500/40 hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
              <Mail size={26} />
            </div>
            <div>
              <h3 className="font-bold text-white">Email</h3>
              <p className="mt-1 text-sm text-zinc-400">
                {siteConfig.contact.email}
              </p>
            </div>
          </a>
        </Reveal>

        {/* Location */}
        <Reveal delay={200}>
          <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20">
              <MapPin size={26} />
            </div>
            <div>
              <h3 className="font-bold text-white">Localisation</h3>
              <p className="mt-1 text-sm text-zinc-400">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="mt-12 text-center">
          <Button href={siteConfig.contact.whatsappUrl} variant="primary" external>
            <MessageCircle size={18} />
            Démarrer la conversation
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}