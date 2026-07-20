"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  /** /public 配下のパス。例: /assets/voices/voice-01.png */
  src: string;
  alt: string;
  /** 画像未配置時にプレースホルダーへ表示するラベル */
  label?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * 素材差し替え前提の画像スロット。
 * - /public/assets 配下に該当ファイルを置くだけで自動的に表示される
 * - ファイルが存在しない間は、差し替え先パスを示す上品なプレースホルダーを表示
 */
export function ImageSlot({
  src,
  alt,
  label,
  className,
  imgClassName,
}: ImageSlotProps) {
  const [missing, setMissing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // ハイドレーション前に error イベントが発火し onError を取り逃すケースへの対策
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setMissing(true);
    }
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-paper-alt", className)}>
      {!missing ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setMissing(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-paper-line bg-paper-alt p-4 text-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <ImageIcon className="h-4 w-4 text-ink-faint" />
          </span>
          {label && (
            <span className="text-xs font-medium text-ink-muted">{label}</span>
          )}
          <code className="text-[10px] text-ink-faint">{src}</code>
        </div>
      )}
    </div>
  );
}
