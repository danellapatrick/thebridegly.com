import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
}

/** Overlapping circles — brand gradient #2F7D62 → #54BD95 */
export default function Logo({
  size = 40,
  className,
  showWordmark = false,
  variant = "dark",
}: LogoProps) {
  const height = Math.round(size * 0.6);

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={height}
        viewBox="0 0 80 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={showWordmark ? undefined : true}
        role={showWordmark ? undefined : "img"}
        aria-label={showWordmark ? undefined : "TheBridgely"}
      >
        <circle cx="28" cy="24" r="20" fill="#2F7D62" />
        <circle cx="52" cy="24" r="20" fill="#54BD95" />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-primary"
          )}
        >
          TheBridgely
        </span>
      )}
    </span>
  );
}
