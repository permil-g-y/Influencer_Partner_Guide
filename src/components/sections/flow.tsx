import {
  CheckCircle2,
  ClipboardList,
  FileSignature,
  Palette,
  Rocket,
  ScrollText,
} from "lucide-react";
import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    icon: FileSignature,
    title: "ご契約",
    duration: null,
    body: "条件にご納得いただけたら契約へ。疑問点はすべて解消してからで大丈夫です。",
  },
  {
    icon: ClipboardList,
    title: "アンケート・素材のご提出",
    duration: "約3日",
    body: "簡単なアンケートと、投稿に使う写真・動画素材をお送りいただきます。",
  },
  {
    icon: ScrollText,
    title: "台本制作",
    duration: "約3日",
    body: "アカウントの世界観に合わせて、当社が投稿用の台本を作成します。",
  },
  {
    icon: Palette,
    title: "デザイン制作・動画編集",
    duration: "約3日",
    body: "画像デザイン・動画編集も当社で対応。完成形までお任せください。",
  },
  {
    icon: CheckCircle2,
    title: "ご確認・修正",
    duration: null,
    body: "投稿前に内容をご確認いただき、気になる箇所は修正します。",
  },
  {
    icon: Rocket,
    title: "投稿開始",
    duration: null,
    body: "納得いただけた状態で投稿スタート。投稿完了まで専任担当が伴走します。",
  },
];

export function Flow() {
  return (
    <Slide id="flow" page="06" chapter="Project Flow" tone="white">
      <SectionHeading
        title={
          <>
            ご契約から投稿までの<span className="text-ig-gradient">流れ</span>
          </>
        }
        lead="ご契約から投稿開始まではおよそ10日前後。制作はすべて当社が行うため、あなたにお願いするのは「素材の提出」と「内容の確認」だけです。"
      />

      <ol className="relative space-y-0">
        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.06}>
            <li className="relative flex gap-6 pb-10 last:pb-0 md:gap-10">
              {/* タイムラインの縦線とアイコン */}
              <div className="flex flex-col items-center">
                <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper-line bg-white shadow-sm">
                  <step.icon className="h-5 w-5 text-ig-pink" />
                </span>
                {i < steps.length - 1 && (
                  <span className="w-px flex-1 bg-paper-line" />
                )}
              </div>
              <div className="flex-1 pb-2 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.18em] text-ink-faint">
                    STEP {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  {step.duration && (
                    <span className="rounded-full bg-ig-gradient-soft px-3 py-1 text-xs font-semibold text-ig-pink">
                      {step.duration}
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-xl text-sm leading-7 text-ink-muted">
                  {step.body}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Slide>
  );
}
