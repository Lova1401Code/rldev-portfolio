type IconProps = { size?: number; className?: string };

export function ProcessIconChat({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M8 10c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H18l-6 5v-5h-0c-2.2 0-4-1.8-4-4V10z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="15" cy="16" r="1.5" fill="#6366f1" />
      <circle cx="20" cy="16" r="1.5" fill="#6366f1" />
      <circle cx="25" cy="16" r="1.5" fill="#6366f1" />
    </svg>
  );
}

export function ProcessIconProposal({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="6" width="22" height="28" rx="3" stroke="#6366f1" strokeWidth="2" />
      <path d="M14 14h12M14 20h12M14 26h8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="30" r="5" fill="#1f1f23" stroke="#22c55e" strokeWidth="2" />
      <path d="M28 30l1.5 1.5L32 29" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProcessIconDesign({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="8" width="28" height="20" rx="3" stroke="#6366f1" strokeWidth="2" />
      <path d="M14 32h12M20 28v4" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
      <rect x="11" y="13" width="8" height="5" rx="1" fill="#6366f1" opacity="0.5" />
      <rect x="22" y="13" width="7" height="3" rx="1" fill="#8b5cf6" opacity="0.5" />
      <rect x="11" y="21" width="18" height="2" rx="1" fill="#3f3f46" />
    </svg>
  );
}

export function ProcessIconCode({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M16 12l-8 8 8 8" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 12l8 8-8 8" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 10l-4 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function ProcessIconTest({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 6l12 5v8c0 7-5 12-12 15-7-3-12-8-12-15v-8l12-5z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 20l4 4 7-8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProcessIconRocket({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M24 8c4 2 8 7 8 14l-6 6c-2-5-4-9-8-12l6-8z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="23" cy="16" r="2.5" fill="#8b5cf6" opacity="0.7" />
      <path d="M18 22l-5 5c-1 1-1 3 0 4l3-2 4 4 2-3-4-4 2-4z" stroke="#22c55e" strokeWidth="1.8" strokeLinejoin="round" opacity="0.7" />
      <path d="M10 30c-2 1-3 4-3 4s3-1 4-3" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ProcessIconSupport({ size = 32, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="18" r="12" stroke="#6366f1" strokeWidth="2" />
      <path d="M14 30l-2 6 8-3 8 3-2-6" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 12v6l4 3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const processIcons = [
  ProcessIconChat,
  ProcessIconProposal,
  ProcessIconDesign,
  ProcessIconCode,
  ProcessIconTest,
  ProcessIconRocket,
  ProcessIconSupport,
];