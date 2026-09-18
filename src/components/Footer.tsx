import Image from "next/image";
import { Mail, MessageCircle, MapPin } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.53 3.29-1.21 3.29-1.21.65 1.66.24 2.88.12 3.18.77.83 1.23 1.88 1.23 3.17 0 4.54-2.81 5.54-5.49 5.83.43.36.81 1.08.81 2.18 0 1.57-.01 2.84-.01 3.23 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="RL Dev"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">
                RL<span className="text-indigo-400"> Dev</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Développement web sur mesure pour entreprises, entrepreneurs et
              porteurs de projets.
            </p>
            <p className="mt-3 text-sm font-medium text-indigo-400">
              Vos idées, mes lignes de code.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-indigo-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-indigo-400"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-indigo-400"
                >
                  <Mail size={16} /> {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin size={16} /> {siteConfig.location}
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {siteConfig.contact.github && (
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {siteConfig.contact.linkedin && (
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800/80 pt-6 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 RL Dev — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}