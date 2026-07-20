"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CaseAvatarProps = {
  src: string;
  displayName: string;
  /** アバターの直径(px) */
  size?: number;
  /** Instagramらしいグラデーションのリングを付けるか */
  ring?: boolean;
  className?: string;
};

/**
 * Instagram風の丸型プロフィールアイコン。
 * 画像が未配置の場合は、グラデーション背景＋表示名の頭文字にフォールバックする。
 */
export function CaseAvatar({
  src,
  displayName,
  size = 72,
  ring = true,
  className,
}: CaseAvatarProps) {
  const [missing, setMissing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  const initial = displayName.trim().charAt(0) || "@";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        ring ? "bg-ig-gradient p-[2.5px]" : "",
        className
      )}
      style={{ width: size, height: size }}
    >
      <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white p-[2px]">
        {!missing ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={src}
            alt={`${displayName} のプロフィール画像`}
            onError={() => setMissing(true)}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center rounded-full bg-ig-gradient-soft">
            <span
              className="font-bold text-ig-pink"
              style={{ fontSize: size * 0.4 }}
            >
              {initial}
            </span>
          </span>
        )}
      </span>
    </span>
  );
}
