export type Voice = {
  /** 匿名化・再現生成済みのメッセージ画像パス */
  src: string;
  /** 個人名を含まない匿名の代替テキスト */
  alt: string;
};

/**
 * 画像配信ベース。匿名化・再現生成済みの webp を公開リポジトリ(raw)から配信する。
 * 画像を追加・差し替えたら、その画像を含むコミットSHAへ更新する。
 */
const ASSET_BASE =
  "https://raw.githubusercontent.com/permil-g-y/Influencer_Partner_Guide/44c8e70f9fab21d6440c18ce776066f8e9b59e04/public/assets/voices";

/**
 * 無料勉強会・個別相談に参加された方からのメッセージ。
 * 画像は個人情報を匿名化したうえで再現生成したもの。
 * 7件目以降は画像を追加し、この配列の length を増やすだけで反映される。
 */
export const voices: Voice[] = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `${ASSET_BASE}/voice-${n}.webp`,
    alt: `無料勉強会参加者からのメッセージ ${n}`,
  };
});
