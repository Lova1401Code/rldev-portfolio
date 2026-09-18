export function AboutIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-full bg-violet-500/10 blur-3xl" />

      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="aboutStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Monitor */}
        <rect
          x="60"
          y="50"
          width="280"
          height="180"
          rx="12"
          fill="#18181b"
          stroke="#3f3f46"
          strokeWidth="1.5"
        />
        <rect x="60" y="50" width="280" height="180" rx="12" fill="url(#aboutGrad)" />

        {/* Screen content - code */}
        <rect x="76" y="66" width="248" height="148" rx="6" fill="#0f0f12" />
        <circle cx="88" cy="78" r="4" fill="#ef4444" opacity="0.7" />
        <circle cx="100" cy="78" r="4" fill="#eab308" opacity="0.7" />
        <circle cx="112" cy="78" r="4" fill="#22c55e" opacity="0.7" />

        {/* Code lines */}
        <rect x="88" y="96" width="16" height="6" rx="3" fill="#8b5cf6" opacity="0.7" />
        <rect x="112" y="96" width="60" height="6" rx="3" fill="#6366f1" opacity="0.7" />
        <rect x="180" y="96" width="80" height="6" rx="3" fill="#3f3f46" />

        <rect x="100" y="112" width="48" height="6" rx="3" fill="#22c55e" opacity="0.7" />
        <rect x="156" y="112" width="100" height="6" rx="3" fill="#3f3f46" />

        <rect x="100" y="128" width="36" height="6" rx="3" fill="#8b5cf6" opacity="0.7" />
        <rect x="144" y="128" width="56" height="6" rx="3" fill="#6366f1" opacity="0.7" />
        <rect x="208" y="128" width="50" height="6" rx="3" fill="#3f3f46" />

        <rect x="112" y="144" width="70" height="6" rx="3" fill="#22c55e" opacity="0.7" />
        <rect x="190" y="144" width="60" height="6" rx="3" fill="#3f3f46" />

        <rect x="100" y="160" width="40" height="6" rx="3" fill="#8b5cf6" opacity="0.7" />
        <rect x="148" y="160" width="90" height="6" rx="3" fill="#3f3f46" />

        <rect x="88" y="176" width="20" height="6" rx="3" fill="#8b5cf6" opacity="0.7" />
        <rect x="116" y="176" width="70" height="6" rx="3" fill="#6366f1" opacity="0.7" />
        <rect x="194" y="176" width="56" height="6" rx="3" fill="#3f3f46" />

        <rect x="100" y="192" width="50" height="6" rx="3" fill="#22c55e" opacity="0.7" />
        <rect x="158" y="192" width="80" height="6" rx="3" fill="#3f3f46" />

        {/* Cursor */}
        <rect x="244" y="190" width="2" height="10" fill="#6366f1">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
        </rect>

        {/* Stand */}
        <rect x="180" y="230" width="40" height="24" fill="#27272a" />
        <rect x="150" y="254" width="100" height="10" rx="5" fill="#3f3f46" />

        {/* Floating chat bubble */}
        <g className="float-anim" style={{ transformOrigin: "320px 120px" }}>
          <rect x="280" y="20" width="100" height="56" rx="12" fill="#1f1f23" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" />
          <rect x="294" y="34" width="72" height="6" rx="3" fill="#6366f1" opacity="0.6" />
          <rect x="294" y="48" width="56" height="6" rx="3" fill="#3f3f46" />
          <path d="M310 76 L320 88 L330 76 Z" fill="#1f1f23" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" />
        </g>

        {/* Floating gear */}
        <g className="float-anim-delay" style={{ transformOrigin: "60px 200px" }}>
          <circle cx="40" cy="180" r="18" fill="#1f1f23" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="40" cy="180" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.6" />
          <rect x="38" y="158" width="4" height="8" rx="2" fill="#8b5cf6" opacity="0.5" />
          <rect x="38" y="194" width="4" height="8" rx="2" fill="#8b5cf6" opacity="0.5" />
          <rect x="18" y="178" width="8" height="4" rx="2" fill="#8b5cf6" opacity="0.5" />
          <rect x="54" y="178" width="8" height="4" rx="2" fill="#8b5cf6" opacity="0.5" />
        </g>

        {/* Decorative dots */}
        <circle cx="350" cy="260" r="3" fill="url(#aboutStroke)" opacity="0.5" />
        <circle cx="340" cy="280" r="2" fill="#6366f1" opacity="0.4" />
        <circle cx="362" cy="290" r="2.5" fill="#8b5cf6" opacity="0.4" />
      </svg>
    </div>
  );
}