# 画像素材の差し替えガイド

このフォルダに画像ファイルを置くだけで、サイト上のプレースホルダーが自動的に実画像へ切り替わります。
**コードの変更は一切不要です。**（ファイル名・拡張子を下記の通りに合わせてください）

## 一覧

| 掲載箇所 | パス | 推奨サイズ |
| --- | --- | --- |
| ヒーロー背景写真 | `hero/hero.jpg` | 1920×1080以上 (横長) |
| 参加者の声 01〜06 | `voices/voice-01.png` 〜 `voice-06.png` | 縦長 (4:5) |
| 投稿実績 Case01 プロフィール | `cases/case01/profile.png` | 任意 |
| 投稿実績 Case01 フィード | `cases/case01/feed-01.png` 〜 `feed-03.png` | 正方形 (1:1) |
| 投稿実績 Case01 ストーリーズ | `cases/case01/story-01.png` 〜 `story-03.png` | 縦長 (9:16) |
| 投稿実績 Case02〜04 | `cases/case02/` 〜 `cases/case04/` に同上の構成 | 同上 |

## その他の差し替えポイント

- **Zoom日程調整URL**: `src/lib/site.ts` の `zoomSchedulingUrl` にURLを設定すると、
  すべてのCTAボタンがそのリンクを開くようになります。
- **会社概要**: 同じく `src/lib/site.ts` の `companyOverview` を編集してください。
