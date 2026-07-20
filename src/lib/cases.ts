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

function stories(id: string): CaseStory[] {
  return [1, 2, 3].map((n) => ({
    src: `/assets/cases/${id}/story-0${n}.jpg`,
    label: `ストーリーズ ${n}`,
  }));
}

export const cases: CaseStudy[] = [
  {
    id: "case01",
    displayName: "さっくんさん",
    username: "__sakkusaku__",
    avatar: "/assets/cases/case01/avatar.jpg",
    genre: "育児・ライフスタイル",
    stories: stories("case01"),
  },
  {
    id: "case02",
    displayName: "𝒑𝒊𝒄𝒉𝒊さん",
    username: "pichi__o0",
    avatar: "/assets/cases/case02/avatar.jpg",
    genre: "ライフスタイル",
    stories: stories("case02"),
  },
  {
    id: "case03",
    displayName: "マキパパさん",
    username: "maki_daddy0815",
    avatar: "/assets/cases/case03/avatar.jpg",
    genre: "育児・ライフスタイル",
    stories: stories("case03"),
  },
];
