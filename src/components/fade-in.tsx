"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** 上方向へのスライド量(px)。0で純粋なフェードのみ */
  y?: number;
};

/**
 * スクロールで表示領域に入ったときに一度だけフェードインするラッパー。
 * 演出は「気づかれない程度」に留める(過度なアニメーション禁止のため)。
 */
export function FadeIn({ children, delay = 0, className, y = 24 }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
