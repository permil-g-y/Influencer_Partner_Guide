"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CaseStudy } from "@/lib/cases";
import { CaseAvatar } from "@/components/cases/case-avatar";

type StoryViewerProps = {
  caseData: CaseStudy | null;
  startIndex: number;
  onClose: () => void;
};

/** 1枚あたりの自動送り時間(ms) */
const DURATION = 6000;

/**
 * Instagramのストーリーズ閲覧を再現した全画面モーダル。
 * - 上部に枚数ぶんの進捗バー(現在の1本がDURATIONで伸びる)
 * - 自動送り / 押している間は一時停止
 * - 画面左タップ=戻る / 右タップ=進む、左右ボタン・キーボードにも対応
 */
export function StoryViewer({
  caseData,
  startIndex,
  onClose,
}: StoryViewerProps) {
  const [index, setIndex] = useState(startIndex);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setIndex(startIndex), [startIndex, caseData]);

  const total = caseData?.stories.length ?? 0;

  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i + 1 >= total) {
        onClose();
        return i;
      }
      return i + 1;
    });
  }, [total, onClose]);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  // キーボード操作 & スクロールロック
  useEffect(() => {
    if (!caseData) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [caseData, goNext, goPrev, onClose]);

  if (!mounted || !caseData) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="story-backdrop"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* 閉じるボタン */}
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        {/* 左右送りボタン(デスクトップ) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="前のストーリーズ"
          className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="次のストーリーズ"
          className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* ストーリーズ本体(9:16) */}
        <motion.div
          key="story-card"
          className="relative flex h-[88svh] max-h-[860px] w-auto flex-col overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl"
          style={{ aspectRatio: "9 / 16" }}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 進捗バー */}
          <div className="absolute inset-x-0 top-0 z-10 flex gap-1.5 p-3">
            {caseData.stories.map((_, i) => (
              <div
                key={i}
                className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/35"
              >
                <ProgressFill
                  active={i === index}
                  filled={i < index}
                  paused={paused}
                  duration={DURATION}
                  onComplete={goNext}
                />
              </div>
            ))}
          </div>

          {/* ヘッダー: アカウント情報 */}
          <div className="absolute inset-x-0 top-0 z-[9] flex items-center gap-3 bg-gradient-to-b from-black/55 to-transparent px-4 pb-8 pt-8">
            <CaseAvatar
              src={caseData.avatar}
              displayName={caseData.displayName}
              size={38}
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {caseData.displayName}
              </p>
              <p className="truncate text-xs text-white/70">
                @{caseData.username}
              </p>
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseData.stories[index]?.src}
            alt={`${caseData.displayName} ${caseData.stories[index]?.label}`}
            className="h-full w-full select-none object-cover"
            draggable={false}
          />

          {/* タップ領域: 左1/3=戻る, 右2/3=進む。長押しで一時停止 */}
          <button
            type="button"
            aria-label="前へ"
            className="absolute inset-y-0 left-0 z-[8] w-1/3 cursor-default"
            onClick={goPrev}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onPointerLeave={() => setPaused(false)}
          />
          <button
            type="button"
            aria-label="次へ"
            className="absolute inset-y-0 right-0 z-[8] w-2/3 cursor-default"
            onClick={goNext}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onPointerLeave={() => setPaused(false)}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

/**
 * 進捗バーの中身。active のときのみ 0→100% に伸び、完了で onComplete を呼ぶ。
 * key を index に紐づけることで、送るたびにアニメーションがリセットされる。
 */
function ProgressFill({
  active,
  filled,
  paused,
  duration,
  onComplete,
}: {
  active: boolean;
  filled: boolean;
  paused: boolean;
  duration: number;
  onComplete: () => void;
}) {
  const startRef = useRef<number | null>(null);
  const elapsedRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) {
      elapsedRef.current = 0;
      startRef.current = null;
      if (barRef.current) {
        barRef.current.style.width = filled ? "100%" : "0%";
      }
      return;
    }

    let cancelled = false;
    const tick = (ts: number) => {
      if (cancelled) return;
      if (paused) {
        startRef.current = ts - elapsedRef.current;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (startRef.current === null) startRef.current = ts - elapsedRef.current;
      elapsedRef.current = ts - startRef.current;
      const pct = Math.min(100, (elapsedRef.current / duration) * 100);
      if (barRef.current) barRef.current.style.width = `${pct}%`;
      if (pct >= 100) {
        onComplete();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // active/paused の変化で再スケジュール
  }, [active, paused, filled, duration, onComplete]);

  return (
    <div
      ref={barRef}
      className="h-full rounded-full bg-white"
      style={{ width: filled ? "100%" : "0%" }}
    />
  );
}
