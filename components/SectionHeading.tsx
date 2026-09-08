import { AnimatedText } from "@/components/AnimatedText";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  lines: string[];
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  lines,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {kicker && (
        <p className="mb-3 font-body text-xs tracking-[0.3em] text-silver uppercase">
          {kicker}
        </p>
      )}
      <AnimatedText
        lines={lines}
        className="text-[13vw] leading-[0.86] sm:text-[8vw] lg:text-[6vw]"
      />
    </div>
  );
}
