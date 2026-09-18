export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Glow */}
      <div className="absolute -inset-4 -z-10 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Floating badges */}
      <div className="float-anim absolute -left-6 top-8 z-20 flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-3 py-2 shadow-xl backdrop-blur">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-bold text-indigo-300">
          TS
        </span>
        <span className="text-xs font-semibold text-zinc-200">TypeScript</span>
      </div>

      <div className="float-anim-delay absolute -right-4 top-24 z-20 flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-3 py-2 shadow-xl backdrop-blur">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 text-xs font-bold text-violet-300">
          N
        </span>
        <span className="text-xs font-semibold text-zinc-200">Next.js</span>
      </div>

      <div className="float-anim-slow absolute -bottom-4 left-12 z-20 flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-3 py-2 shadow-xl backdrop-blur">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-xs font-bold text-emerald-300">
          R
        </span>
        <span className="text-xs font-semibold text-zinc-200">React</span>
      </div>

      {/* Code window SVG */}
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Window body */}
        <rect
          x="24"
          y="24"
          width="432"
          height="312"
          rx="16"
          fill="#18181b"
          stroke="#3f3f46"
          strokeWidth="1.5"
        />
        <rect x="24" y="24" width="432" height="312" rx="16" fill="url(#heroGrad)" />

        {/* Title bar */}
        <rect x="24" y="24" width="432" height="44" rx="16" fill="#27272a" />
        <rect x="24" y="52" width="432" height="16" fill="#27272a" />

        {/* Window dots */}
        <circle cx="46" cy="46" r="6" fill="#ef4444" opacity="0.8" />
        <circle cx="66" cy="46" r="6" fill="#eab308" opacity="0.8" />
        <circle cx="86" cy="46" r="6" fill="#22c55e" opacity="0.8" />

        {/* Filename */}
        <rect x="120" y="40" width="90" height="12" rx="6" fill="#52525b" />

        {/* Sidebar */}
        <rect x="40" y="84" width="96" height="236" rx="8" fill="#1f1f23" />
        <rect x="52" y="100" width="72" height="8" rx="4" fill="#3f3f46" />
        <rect x="52" y="118" width="56" height="8" rx="4" fill="#3f3f46" />
        <rect x="52" y="136" width="64" height="8" rx="4" fill="#6366f1" opacity="0.6" />
        <rect x="52" y="154" width="48" height="8" rx="4" fill="#3f3f46" />
        <rect x="52" y="172" width="60" height="8" rx="4" fill="#3f3f46" />
        <rect x="52" y="190" width="52" height="8" rx="4" fill="#3f3f46" />

        {/* Code lines */}
        <g>
          <rect x="152" y="100" width="40" height="8" rx="4" fill="#8b5cf6" opacity="0.7" />
          <rect x="200" y="100" width="80" height="8" rx="4" fill="#6366f1" opacity="0.8" />
          <rect x="288" y="100" width="100" height="8" rx="4" fill="#52525b" />
        </g>
        <g>
          <rect x="168" y="122" width="60" height="8" rx="4" fill="#22c55e" opacity="0.7" />
          <rect x="236" y="122" width="120" height="8" rx="4" fill="#52525b" />
        </g>
        <g>
          <rect x="168" y="144" width="48" height="8" rx="4" fill="#8b5cf6" opacity="0.7" />
          <rect x="224" y="144" width="72" height="8" rx="4" fill="#6366f1" opacity="0.8" />
          <rect x="304" y="144" width="60" height="8" rx="4" fill="#52525b" />
        </g>
        <g>
          <rect x="184" y="166" width="90" height="8" rx="4" fill="#22c55e" opacity="0.7" />
          <rect x="282" y="166" width="80" height="8" rx="4" fill="#52525b" />
        </g>
        <g>
          <rect x="168" y="188" width="56" height="8" rx="4" fill="#8b5cf6" opacity="0.7" />
          <rect x="232" y="188" width="140" height="8" rx="4" fill="#52525b" />
        </g>
        <g>
          <rect x="152" y="210" width="36" height="8" rx="4" fill="#8b5cf6" opacity="0.7" />
          <rect x="196" y="210" width="100" height="8" rx="4" fill="#6366f1" opacity="0.8" />
          <rect x="304" y="210" width="70" height="8" rx="4" fill="#52525b" />
        </g>
        <g>
          <rect x="168" y="232" width="70" height="8" rx="4" fill="#22c55e" opacity="0.7" />
          <rect x="246" y="232" width="110" height="8" rx="4" fill="#52525b" />
        </g>

        {/* Bottom bar */}
        <rect x="40" y="300" width="400" height="12" rx="6" fill="#1f1f23" />
        <rect x="40" y="300" width="120" height="12" rx="6" fill="url(#heroStroke)" opacity="0.5" />

        {/* Decorative gradient line */}
        <rect x="152" y="260" width="200" height="2" rx="1" fill="url(#heroStroke)" opacity="0.4" />
      </svg>
    </div>
  );
}