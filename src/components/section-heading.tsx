import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fade-in";

type SectionHeadingProps = {
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-14 max-w-3xl md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold leading-tight tracking-tight md:text-[2.75rem] md:leading-[1.25]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 text-[15px] leading-8 md:text-base md:leading-8",
            dark ? "text-white/70" : "text-ink-muted"
          )}
        >
          {lead}
        </p>
      )}
    </FadeIn>
  );
}
