import { Clapperboard, Image as ImageIcon, CircleDashed } from "lucide-react";
import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const days = [
  {
    day: "Day 1",
    main: { icon: Clapperboard, label: "リール または フィード投稿" },
    stories: "ストーリーズ 5〜7枚",
    note: null,
  },
  {
    day: "Day 2",
    main: null,
    stories: "ストーリーズ 5〜7枚",
    note: null,
  },
  {
    day: "Day 3",
    main: null,
    stories: "ストーリーズ 5〜7枚",
    note: null,
  },
  {
    day: "Day 4",
    main: null,
    stories: "ストーリーズ 5〜7枚",
    note: "案件による",
  },
];

export function Posting() {
  return (
    <Slide id="posting" page="06" chapter="Posting Plan" tone="alt">
      <SectionHeading
        title={
          <>
            投稿内容は<span className="text-ig-gradient">4日間</span>
            のシンプルな構成
          </>
        }
        lead="投稿はまとめて一気にではなく、数日に分けて自然に。台本・デザイン・動画編集はすべて当社が用意するので、あなたは投稿するだけです。"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {days.map((d, i) => (
          <FadeIn key={d.day} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-line bg-white p-7 shadow-sm">
              <div className="flex items-baseline justify-between">
                <p className="stat-number text-3xl">
                  <span className="text-ig-gradient">{d.day}</span>
                </p>
                {d.note && (
                  <span className="rounded-full bg-paper-alt px-3 py-1 text-[11px] font-semibold text-ink-muted">
                    {d.note}
                  </span>
                )}
              </div>
              <div className="mt-6 flex-1 space-y-3">
                {d.main && (
                  <div className="flex items-center gap-3 rounded-2xl bg-ig-gradient-soft px-4 py-3">
                    <d.main.icon className="h-4 w-4 shrink-0 text-ig-pink" />
                    <span className="text-sm font-bold leading-snug">
                      {d.main.label}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 rounded-2xl bg-paper-alt px-4 py-3">
                  <ImageIcon className="h-4 w-4 shrink-0 text-ink-muted" />
                  <span className="text-sm font-medium leading-snug text-ink-soft">
                    {d.stories}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10">
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-paper-line bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-base font-bold md:text-lg">
              台本・デザイン・動画編集は、すべて当社対応
            </p>
            <p className="mt-2 text-sm leading-7 text-ink-muted">
              あなたにお願いするのは「素材の提出」「内容の確認」「投稿」の3つだけ。
              制作の手間はかかりません。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["台本", "デザイン", "動画編集"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full bg-ig-gradient px-4 py-2 text-xs font-bold text-white"
              >
                <CircleDashed className="h-3.5 w-3.5" />
                {t}：当社対応
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </Slide>
  );
}
