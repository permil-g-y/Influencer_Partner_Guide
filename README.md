# DACHO インフルエンサー向け案件説明サイト

合同会社DACHOがキャスティングを行うInstagramインフルエンサー向けの、SNSスクールPR案件説明サイトです。
DMでやり取りしたインフルエンサーの方へ送付し、「一度Zoomで詳細を聞いてみよう」と思っていただくことを目的としています。

## 技術スタック

- Next.js (App Router) / TypeScript
- Tailwind CSS
- shadcn/ui スタイルのUIコンポーネント (Radix UI ベース)
- Framer Motion (控えめなフェードインのみ)
- Lucide Icons

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # 本番ビルド
```

## 素材の差し替え

スクリーンショット等の画像は `public/assets/` 配下にファイルを置くだけで反映されます。
詳細は [`public/assets/README.md`](public/assets/README.md) を参照してください。

- **Zoom日程調整URL**: `src/lib/site.ts` の `zoomSchedulingUrl`
- **会社概要・サイト文言の基本情報**: `src/lib/site.ts`

## 構成

| ページ | セクション | ファイル |
| --- | --- | --- |
| 01 | Hero | `src/components/sections/hero.tsx` |
| 02 | 私たちがスクール案件を扱う理由 | `src/components/sections/why.tsx` |
| 02 | 参加者の声 (差し替え用ダミー) | `src/components/sections/voices.tsx` |
| 03 | 合同会社DACHOについて | `src/components/sections/about.tsx` |
| 04 | DACHOの強み | `src/components/sections/strengths.tsx` |
| 05 | 報酬 | `src/components/sections/reward.tsx` |
| 06 | 案件の流れ | `src/components/sections/flow.tsx` |
| 07 | 投稿内容 | `src/components/sections/posting.tsx` |
| 08 | 投稿実績 (差し替え用ダミー) | `src/components/sections/cases.tsx` |
| 09 | よくある質問 | `src/components/sections/faq.tsx` |
| 10 | CTA (Zoom日程調整) | `src/components/sections/cta.tsx` |
