/**
 * 投稿実績(Case Studies)のデータ定義。
 *
 * 画像は /public/assets/cases/<id>/ 配下に置くだけで反映されます。
 *   - avatar.jpg          … プロフィール画像(丸くトリミングして表示)
 *   - story-01.jpg 〜 03   … ストーリーズ3枚(9:16の縦長スクショ)
 *
 * displayName は「正式なアカウント名＋さん」で表記しています。
 * followers / bio は未確定のため未設定(表示側で自動的に省略)。
 */

export type CaseStory = {
  src: string;
  /** 差し替え前プレースホルダー用ラベル */
  label: string;
};

export type CaseStudy = {
  id: string;
  /** Instagram 表示名(＋さん) */
  displayName: string;
  /** @ユーザー名(＠は不要) */
  username: string;
  /** プロフィール画像パス */
  avatar: string;
  /** 案件のジャンル(1行タグ) */
  genre: string;
  /** フォロワー数の表示文字列。未確定なら未設定で非表示 */
  followers?: string;
  /** 自己紹介文(bio)。未確定なら未設定で非表示 */
  bio?: string;
  /** ストーリーズ3枚 */
  stories: CaseStory[];
};

/**
 * 画像配信元。
 * 本番ビルドのペイロード軽量化のため、実画像は公開リポジトリ(raw.githubusercontent)
 * から配信しています。差し替え時は該当ファイルをコミットし、下記のコミットSHAを更新します。
 * (将来、画像をVercel側で直接ホストする場合は "/assets" に戻すだけで動作します)
 */
const ASSET_BASE =
  "https://raw.githubusercontent.com/permil-g-y/Influencer_Partner_Guide/51171fc44f396b0f9b52e51f4255418ebed8e2f7/public/assets";

export function caseAsset(path: string): string {
  return `${ASSET_BASE}/${path}`;
}

function stories(id: string): CaseStory[] {
  return [1, 2, 3].map((n) => ({
    src: caseAsset(`cases/${id}/story-0${n}.jpg`),
    label: `ストーリーズ ${n}`,
  }));
}

export const cases: CaseStudy[] = [
  {
    id: "case01",
    displayName: "さっくんさん",
    username: "__sakkusaku__",
    avatar: caseAsset("cases/case01/avatar.jpg"),
    genre: "育児・ライフスタイル",
    stories: stories("case01"),
  },
  {
    id: "case02",
    displayName: "𝒑𝒊𝒄𝒉𝒊さん",
    username: "pichi__o0",
    avatar: caseAsset("cases/case02/avatar.jpg"),
    genre: "ライフスタイル",
    stories: stories("case02"),
  },
  {
    id: "case03",
    displayName: "マキパパさん",
    username: "maki_daddy0815",
    avatar: caseAsset("cases/case03/avatar.jpg"),
    genre: "育児・ライフスタイル",
    stories: stories("case03"),
  },
];
