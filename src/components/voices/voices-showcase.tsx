"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { voices } from "@/lib/voices";
import { FadeIn } from "@/components/fade-in";

export function VoicesShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* ───── PC / タブレット: 3列 × 2行のコンパクトなグリッド ───── */}
      <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {voices.map((v, i) => (
          <FadeIn key={v.src} delay={(i % 3) * 0.08}>
            <VoiceCard voice={v} onOpen={() => setActive(i)} />
          </FadeIn>
        ))}
      </div>

      {/* ───── モバイル: 横スクロール（カルーセル風・scroll-snap） ───── */}
      <div className="sm:hidden">
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollPaddingLeft: "0.25rem", scrollPaddingRight: "0.25rem" }}
        >
          {voices.map((v, i) => (
            <div key={v.src} className="w-[80%] flex-none snap-center">
              <VoiceCard voice={v} onOpen={() => setActive(i)} />
            </div>
          ))}
          {/* 末尾の余白（最後のカードが見切れないように） */}
          <div className="w-px flex-none" aria-hidden="true" />
        </div>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-ink-faint">
          <span aria-hidden="true">←</span>
          横にスワイプしてご覧いただけます
          <span aria-hidden="true">→</span>
        </p>
      </div>

      <VoiceLightbox
        index={active}
        onClose={() => setActive(null)}
        onNav={setActive}
      />
    </>
  );
}

function VoiceCard({
  voice,
  onOpen,
}: {
  voice: (typeof voices)[number];
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${voice.alt}を拡大表示`}
      className="group block w-full overflow-hidden rounded-2xl border border-paper-line bg-white shadow-sm ring-offset-2 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ig-pink"
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-[#e9ebef]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={voice.src}
          alt={voice.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </button>
  );
}

function VoiceLightbox({
  index,
  onClose,
  onNav,
}: {
  index: number | null;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      const next = (index + dir + voices.length) % voices.length;
      onNav(next);
    },
    [index, onNav]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  if (!mounted) return null;

  const voice = index !== null ? voices[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && voice && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            key={voice.src}
            className="max-h-[88vh] w-auto max-w-[440px] overflow-y-auto rounded-2xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={voice.src}
              alt={voice.alt}
              className="block h-auto w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
