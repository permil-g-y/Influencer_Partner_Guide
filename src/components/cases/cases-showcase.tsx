"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Instagram, Play } from "lucide-react";
import type { CaseStudy } from "@/lib/cases";
import { cases } from "@/lib/cases";
import { FadeIn } from "@/components/fade-in";
import { CaseAvatar } from "@/components/cases/case-avatar";
import { StoryViewer } from "@/components/cases/story-viewer";
import { cn } from "@/lib/utils";

export function CasesShowcase() {
  const [viewer, setViewer] = useState<{
    caseData: CaseStudy;
    index: number;
  } | null>(null);

  return (
    <>
      <div className="space-y-8 md:space-y-10">
        {cases.map((c, i) => (
          <FadeIn key={c.id} delay={Math.min(i * 0.08, 0.24)}>
            <CaseCard
              caseData={c}
              onOpen={(index) => setViewer({ caseData: c, index })}
            />
          </FadeIn>
        ))}
      </div>

      <StoryViewer
        caseData={viewer?.caseData ?? null}
        startIndex={viewer?.index ?? 0}
        onClose={() => setViewer(null)}
      />
    </>
  );
}

function CaseCard({
  caseData,
  onOpen,
}: {
  caseData: CaseStudy;
  onOpen: (index: number) => void;
}) {
  // 1枚目の画像が読み込めるかで「掲載済み / 準備中」を判定
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let alive = true;
    const img = new Image();
    img.onload = () => alive && setAvailable(true);
    img.onerror = () => alive && setAvailable(false);
    img.src = caseData.stories[0]?.src ?? "";
    return () => {
      alive = false;
    };
  }, [caseData]);

  return (
    <article className="overflow-hidden rounded-3xl border border-paper-line bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="grid gap-0 lg:grid-cols-[minmax(280px,340px)_1fr]">
        {/* 左: Instagram風プロフィール */}
        <div className="flex flex-col border-b border-paper-line p-7 md:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-4">
            <CaseAvatar
              src={caseData.avatar}
              displayName={caseData.displayName}
              size={72}
            />
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-base font-bold leading-tight">
                <span className="truncate">{caseData.displayName}</span>
              </p>
              <a
                href={`https://www.instagram.com/${caseData.username}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ig-pink"
              >
                <Instagram className="h-3.5 w-3.5" />@{caseData.username}
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-ig-gradient-soft px-3 py-1 text-xs font-semibold text-ig-pink">
              {caseData.genre}
            </span>
            {caseData.followers && (
              <span className="inline-flex items-baseline gap-1 rounded-full border border-paper-line px-3 py-1 text-xs text-ink-soft">
                <span className="font-bold text-ink">{caseData.followers}</span>
                フォロワー
              </span>
            )}
          </div>

          {caseData.bio && (
            <p className="mt-5 text-sm leading-7 text-ink-muted">
              {caseData.bio}
            </p>
          )}

          <div className="mt-auto pt-6">
            <p className="text-xs leading-relaxed text-ink-faint">
              世界観に馴染むよう設計したPRストーリーズです。タップで実際の投稿をご覧いただけます。
            </p>
          </div>
        </div>

        {/* 右: ストーリーズ(主役) */}
        <div className="bg-paper-alt/60 p-7 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              PR Stories
            </p>
            {available !== false && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                <Eye className="h-3.5 w-3.5" />
                タップで拡大
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {caseData.stories.map((story, i) => (
              <StoryThumb
                key={story.src}
                src={story.src}
                label={story.label}
                clickable={available === true}
                onClick={() => onOpen(i)}
              />
            ))}
          </div>

          {available === false && (
            <p className="mt-4 text-xs text-ink-faint">
              ※ スクリーンショットは順次追加予定です。
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function StoryThumb({
  src,
  label,
  clickable,
  onClick,
}: {
  src: string;
  label: string;
  clickable: boolean;
  onClick: () => void;
}) {
  const [missing, setMissing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // ハイドレーション前に読み込み失敗した画像の onError 取りこぼしを補完
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  const inner = missing ? (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-paper-line bg-paper-alt p-3 text-center">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink-faint shadow-sm">
        <Play className="h-3.5 w-3.5" />
      </span>
      <span className="text-[10px] font-medium text-ink-muted">{label}</span>
    </div>
  ) : (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={label}
        onError={() => setMissing(true)}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      {/* 再生アフォーダンス */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur">
          <Play className="h-4 w-4 translate-x-[1px] text-ink" />
        </span>
      </span>
    </>
  );

  const cls =
    "group relative aspect-[9/16] overflow-hidden rounded-xl border border-paper-line bg-paper-alt";

  if (!clickable) {
    return <div className={cls}>{inner}</div>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        cls,
        "cursor-pointer ring-offset-2 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ig-pink"
      )}
    >
      {inner}
    </button>
  );
}
