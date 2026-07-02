
type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
};

export function Window({ size = 24, color = "currentColor", className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="2"
        stroke={color} strokeWidth="1.8" />
      <path d="M12 4v16M4 12h16"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}