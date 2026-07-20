import { BadgeCheck, Palette, TrendingUp } from "lucide-react";
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
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
            <span className="inline-block h-[3px] w-6 rounded-full bg-ig-gradient" />
            For Instagram Influencers
          </p>
          <p className="mb-4 text-sm font-semibold text-ink-soft md:text-base">
            SNSスクールPR案件 ｜ Instagramインフルエンサー募集
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.2] tracking-tight md:text-6xl md:leading-[1.15]">
            あなたの世界観のまま、
            <br />
            <span className="text-ig-gradient">新しい報酬のかたち</span>を。
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-ink-muted md:text-base">
            合同会社DACHOがキャスティングを行う、SNSスクールPR案件のご案内です。
            台本づくりから画像・動画制作まで当社が伴走し、あなたのアカウントの空気感を
            大切にしたままPRを実現します。
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-paper-line bg-white/80 p-5 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
              >
                <h.icon className="mb-3 h-5 w-5 text-ig-pink" />
                <p className="text-sm font-bold">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12">
          <div className="flex flex-wrap items-center gap-5">
            <CtaButton label="まずはZoomで話を聞いてみる" />
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
