import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SlideProps = {
  id: string;
  /** ページ番号。例: "01" */
  page: string;
  /** 英語のチャプターラベル。例: "Why We Do This" */
  chapter: string;
  children: ReactNode;
  tone?: "white" | "alt" | "dark";
  className?: string;
  innerClassName?: string;
};

/**
 * 「PowerPoint資料を1枚ずつ読む」体験のためのページラッパー。
 * 16:9の資料を意識した最大幅と、ページ切り替わりが明確になる余白・背景交互を持つ。
 */
export function Slide({
  id,
  page,
  chapter,
  children,
  tone = "white",
  className,
  innerClassName,
}: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[85svh] items-center border-t border-paper-line py-24 md:py-32 lg:min-h-screen",
        tone === "white" && "bg-paper",
        tone === "alt" && "bg-paper-alt",
        tone === "dark" && "border-transparent bg-ink text-white",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-slide px-6 md:px-10",
          innerClassName
        )}
      >
        {/* ページ番号 + チャプターラベル(参考資料のCHAPTER表記を踏襲) */}
        <div className="mb-12 flex items-center gap-3 md:mb-16">
          <span className="inline-block h-[3px] w-6 rounded-full bg-ig-gradient" />
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              tone === "dark" ? "text-white/60" : "text-ink-faint"
            )}
          >
            {page} / {chapter}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
