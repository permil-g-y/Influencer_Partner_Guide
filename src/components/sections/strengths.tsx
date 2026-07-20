import {
  BadgeCheck,
  Clapperboard,
  Headset,
  Palette,
  PencilRuler,
  Repeat,
  ScrollText,
  TrendingUp,
} from "lucide-react";
import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const strengths = [
  {
    icon: Palette,
    title: "世界観に合わせたクリエイティブ",
    body: "投稿・トーン・色味までアカウントを分析し、あなたの世界観を壊さないクリエイティブを制作します。",
  },
  {
    icon: ScrollText,
    title: "台本制作",
    body: "広告感を抑えた自然な語り口の台本を当社で用意。「PRっぽさ」が前に出ない構成にこだわります。",
  },
  {
    icon: Clapperboard,
    title: "デザイン・動画編集",
    body: "画像制作から動画編集まで当社が対応。撮影素材をお送りいただくだけで投稿物が完成します。",
  },
  {
    icon: BadgeCheck,
    title: "固定報酬保証",
    body: "最低でも「フォロワー数 × ¥1」以上の固定報酬を保証。成果に関わらずお支払いします。",
  },
  {
    icon: TrendingUp,
    title: "成果報酬",
    body: "案件ごとに成果報酬を設定。平均で1件あたり約¥80,000。頑張りがそのまま収入に反映されます。",
  },
  {
    icon: Repeat,
    title: "継続案件",
    body: "単発で終わりではなく、四半期〜半年に一度のペースで継続案件をご相談しています。",
  },
  {
    icon: PencilRuler,
    title: "修正対応",
    body: "投稿前の内容確認はもちろん、気になる箇所の修正にも柔軟に対応。納得してから投稿できます。",
  },
  {
    icon: Headset,
    title: "専任サポート",
    body: "ご契約から投稿完了まで専任の担当者が伴走。疑問や不安はいつでもご相談いただけます。",
  },
];

export function Strengths() {
  return (
    <Slide id="strengths" page="04" chapter="Our Strengths" tone="white">
      <SectionHeading
        title={
          <>
            DACHOの<span className="text-ig-gradient">8つの強み</span>
          </>
        }
        lead="「PRはやってみたいけれど、負担や不安が大きそう」——そんな声に応えるため、制作から報酬まで、安心して取り組める仕組みを整えています。"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((s, i) => (
          <FadeIn key={s.title} delay={(i % 4) * 0.08}>
            <div className="h-full rounded-3xl border border-paper-line bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ig-gradient-soft">
                <s.icon className="h-5 w-5 text-ig-pink" />
              </span>
              <h3 className="text-[15px] font-bold leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{s.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Slide>
  );
}
