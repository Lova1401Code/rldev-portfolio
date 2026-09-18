export function CTAIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-0 hidden h-full w-1/2 opacity-20 lg:block"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ctaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Large chat bubble */}
      <path
        d="M120 40c-22 0-40 14-40 32s18 32 40 32c4 0 8-.5 12-1.5l16 6-4-14c10-6 16-14 16-24 0-18-18-32-40-32z"
        stroke="url(#ctaGrad)"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx="108" cy="70" r="3" fill="#6366f1" opacity="0.5" />
      <circle cx="122" cy="70" r="3" fill="#8b5cf6" opacity="0.5" />
      <circle cx="136" cy="70" r="3" fill="#6366f1" opacity="0.5" />

      {/* Floating dots */}
      <circle cx="40" cy="50" r="4" fill="#6366f1" opacity="0.3" />
      <circle cx="30" cy="120" r="3" fill="#8b5cf6" opacity="0.3" />
      <circle cx="170" cy="160" r="5" fill="#6366f1" opacity="0.2" />
      <circle cx="60" cy="170" r="3" fill="#8b5cf6" opacity="0.25" />

      {/* Decorative lines */}
      <path d="M20 100 Q60 80 100 100 T180 100" stroke="url(#ctaGrad)" strokeWidth="1.5" opacity="0.2" fill="none" />
      <path d="M20 130 Q60 110 100 130 T180 130" stroke="url(#ctaGrad)" strokeWidth="1" opacity="0.15" fill="none" />

      {/* Small shapes */}
      <rect x="150" y="40" width="16" height="16" rx="4" stroke="#6366f1" strokeWidth="1.5" opacity="0.3" />
      <circle cx="50" cy="80" r="10" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.25" />
    </svg>
  );
}