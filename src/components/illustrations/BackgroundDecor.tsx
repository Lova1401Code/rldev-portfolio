type DecorProps = { className?: string };

export function DotPattern({ className = "" }: DecorProps) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <pattern id="dotPattern" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#6366f1" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  );
}

export function BlobShape({ className = "" }: DecorProps) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M200 80c60 0 120 30 120 100s-40 140-120 140-120-70-120-140 60-100 120-100z"
        fill="url(#blobGrad)"
      />
    </svg>
  );
}

export function GridPattern({ className = "" }: DecorProps) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="#6366f1" strokeWidth="0.5" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
    </svg>
  );
}

export function WaveDivider({ className = "" }: DecorProps) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 30c200-20 400-20 600 0s400 20 600 0"
        stroke="#6366f1"
        strokeWidth="1.5"
        opacity="0.15"
      />
    </svg>
  );
}