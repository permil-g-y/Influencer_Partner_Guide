/**
 * 投稿実績(Case Studies)のデータ定義。
 *
 * 画像は /public/assets/cases/<id>/ 配下に置くだけで反映されます。
 *   - avatar.jpg          … プロフィール画像(丸くトリミングして表示)
 *   - story-01.jpg 〜 03   … ストーリーズ3枚(9:16の縦長スクショ)
 *
 * プロフィール情報(表示名・フォロワー数・自己紹介文)は実在アカウントのため、
 * 判明している範囲のみ記載しています。未確定の項目は空文字/undefinedにしておくと
 * 表示側で自動的に省略されます。
 */

export type CaseStory = {
  src: string;
  /** 差し替え前プレースホルダー用ラベル */
  label: string;
};

export type CaseStudy = {
  id: string;
  /** Instagram 表示名 */
  displayName: string;
  /** @ユーザー名(＠は不要) */
  username: string;
  /** プロフィール画像パス */
  avatar: string;
  /** 案件のジャンル(1行タグ) */
  genre: string;
  /** フォロワー数の表示文字列。未確定なら空文字で非表示 */
  followers?: string;
  /** 自己紹介文(bio)。未確定なら undefined で非表示 */
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
    displayName: "さっくん｜育児日記",
    username: "__sakkusaku__",
    avatar: "/assets/cases/case01/avatar.jpg",
    genre: "育児・ライフスタイル",
    // followers: "", // 確定次第記載
    bio: "初めての育児の記録を「育児日記」として発信。フォロワーさんとの何気ないやり取りを大切にしています。",
    stories: stories("case01"),
  },
  {
    id: "case02",
    displayName: "ぴち",
    username: "pichi__o0",
    avatar: "/assets/cases/case02/avatar.jpg",
    genre: "育児・ライフスタイル",
    stories: stories("case02"),
  },
  {
    id: "case03",
    displayName: "まき",
    username: "maki_daddy0815",
    avatar: "/assets/cases/case03/avatar.jpg",
    genre: "育児・ライフスタイル",
    stories: stories("case03"),
  },
];
