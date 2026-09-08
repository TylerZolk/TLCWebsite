interface InstagramIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/**
 * lucide-react dropped brand icons — this is a small stand-in drawn in the
 * same stroke style so it drops into the same call sites.
 */
export function InstagramIcon({
  size = 20,
  strokeWidth = 1.5,
  className,
}: InstagramIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
