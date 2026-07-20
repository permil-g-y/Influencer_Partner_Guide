import { BadgeCheck, Palette, Sparkles, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { ImageSlot } from "@/components/image-slot";
import { CtaButton } from "@/components/cta-button";

const highlights = [
  {
    icon: BadgeCheck,
    title: "固定報酬を保証",
    body: "フォロワー数 × ¥1 以上",
  },
  {
    icon: TrendingUp,
    title: "成果報酬あり",
    body: "平均 約¥80,000 / 件",
  },
  {
    icon: Palette,
    title: "世界観を壊さない",
    body: "台本・制作は全て当社対応",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* 背景: ライフスタイル写真(差し替え可) + 白グラデーションで可読性を確保 */}
      <div className="absolute inset-0 -z-10">
        <ImageSlot
          src="/assets/hero/hero.jpg"
          alt=""
          className="h-full w-full [&>div]:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="absolute inset-0 bg-ig-gradient-soft" />
      </div>

      <div className="mx-auto flex min-h-svh w-full max-w-slide flex-col justify-center px-6 py-28 md:px-10">
        <FadeIn>
          {/* 上部ラベル: グラデーション枠の「限定」バッジで特別感を演出 */}
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex rounded-full bg-ig-gradient p-px shadow-[0_6px_20px_-10px_rgba(225,48,108,0.6)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-ig-pink" />
                <span className="text-ig-gradient text-xs font-bold tracking-[0.08em]">
                  Instagramインフルエンサー限定
                </span>
              </span>
            </span>
            <p className="pl-1 text-sm font-semibold tracking-[0.04em] text-ink-soft">
              SNSスクールPRパートナー募集
            </p>
          </div>

          {/* メインコピー: 2行目「収益につながるPRを。」を一まとまりで視認性重視 */}
          <h1 className="mt-8 max-w-3xl text-[2rem] font-bold leading-[1.28] tracking-tight sm:text-5xl md:text-[4.25rem] md:leading-[1.12]">
            世界観を守りながら、
            <br />
            <span className="whitespace-nowrap text-ig-gradient">
              収益につながるPRを。
            </span>
          </h1>

          {/* リード文: インフルエンサー目線・段落ごとに余白と広めの行間で可読性を確保 */}
          <div className="mt-9 max-w-md space-y-5 text-[15px] leading-8 text-ink-muted md:text-base md:leading-9">
            <p className="text-base font-bold text-ink md:text-lg">
              固定報酬＋成果報酬をご用意。
            </p>
            <p>
              台本・画像・動画制作はすべて当社が担当。
              <br />
              あなたは内容を確認して投稿するだけ。
            </p>
            <p>
              世界観を大切にしながら、
              <br />
              無理なく収益につながるPRをご提案します。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14">
          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-paper-line bg-white/85 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-ig-gradient-soft">
                  <h.icon className="h-[18px] w-[18px] text-ig-pink" />
                </span>
                <p className="text-sm font-bold">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <CtaButton
              label="まずはZoomで話を聞いてみる"
              className="h-16 px-10 text-base"
            />
            <p className="text-xs leading-relaxed text-ink-faint">
              所要時間は30分ほど。
              <br className="sm:hidden" />
              その場で契約をお願いすることはありません。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
