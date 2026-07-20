"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CaseAvatarProps = {
  src: string;
  displayName: string;
  /** フォールバックの頭文字生成に使うユーザー名(装飾文字対策) */
  username?: string;
  /** アバターの直径(px) */
  size?: number;
  /** Instagramらしいグラデーションのリングを付けるか */
  ring?: boolean;
  className?: string;
};

/**
 * 頭文字を安全に取り出す。
 * 表示名の先頭が装飾ユニコード(𝒑 等・フォント非対応)の場合は、
 * ユーザー名の先頭の英数字を大文字で使う。
 */
function safeInitial(displayName: string, username?: string): string {
  const first = Array.from(displayName.trim())[0];
  if (first && (first.codePointAt(0) ?? 0) <= 0xffff && /\S/.test(first)) {
    return first;
  }
  const alnum = username?.match(/[a-zA-Z0-9]/)?.[0];
  if (alnum) return alnum.toUpperCase();
  return "@";
}

/**
 * Instagram風の丸型プロフィールアイコン。
 * 画像が未配置の場合は、グラデーション背景＋表示名の頭文字にフォールバックする。
 */
export function CaseAvatar({
  src,
  displayName,
  username,
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

  const initial = safeInitial(displayName, username);

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
