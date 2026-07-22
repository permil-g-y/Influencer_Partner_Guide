export type Voice = {
  /** 匿名化・再現生成済みのメッセージ画像パス */
  src: string;
  /** 個人名を含まない匿名の代替テキスト */
  alt: string;
};

/**
 * 無料勉強会・個別相談に参加された方からのメッセージ。
 * 画像は個人情報を匿名化したうえで再現生成したもの。
 * 7件目以降は画像を追加し、この配列に1行足すだけで反映される。
 */
export const voices: Voice[] = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/voices/voice-${n}.webp`,
    alt: `無料勉強会参加者からのメッセージ ${n}`,
  };
});
