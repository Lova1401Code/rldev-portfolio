"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { GridPattern } from "@/components/illustrations/BackgroundDecor";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Nouveau message de ${form.name || "un visiteur"} — rldev.com`
    );
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" className="relative">
      <GridPattern className="inset-0 h-full w-full opacity-40" />
      <div className="relative">
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

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Cartes de contact */}
        <div className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
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
          </div>

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

          <Reveal delay={300}>
            <div className="text-center">
              <Button href={siteConfig.contact.whatsappUrl} variant="secondary" external>
                <MessageCircle size={18} />
                Démarrer la conversation
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Formulaire */}
        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8"
          >
            <h3 className="mb-6 text-lg font-bold text-white">
              Envoyez-moi un message
            </h3>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Envoyer le message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
      </div>
    </Section>
  );
}