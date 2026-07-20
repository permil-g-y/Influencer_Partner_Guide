import {
  Briefcase,
  CalendarCheck,
  GraduationCap,
  Heart,
  Home,
  Laptop,
  MessageCircleQuestion,
  Sparkles,
  Users,
} from "lucide-react";
import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const interests = [
  { icon: Briefcase, label: "副業" },
  { icon: Home, label: "在宅ワーク" },
  { icon: Laptop, label: "フリーランス" },
  { icon: Sparkles, label: "SNS運用" },
];

const struggles = [
  "何から始めればいいか分からない",
  "興味はあるのに、行動に移せない",
  "始めてみたけれど、続けられない",
];

const approach = [
  {
    icon: GraduationCap,
    step: "STEP 1",
    title: "まずは無料勉強会から",
    body: "私たちが最初にご案内するのは、講座の販売ではなく無料勉強会です。「SNS運用という働き方」がどんなものか、まず知っていただくことを大切にしています。",
  },
  {
    icon: MessageCircleQuestion,
    step: "STEP 2",
    title: "有料講座は希望者にのみ",
    body: "勉強会が終わったあと、さらに深く学びたいと希望される方にのみ、有料講座をご案内します。全員への売り込みは行いません。",
  },
  {
    icon: CalendarCheck,
    step: "STEP 3",
    title: "十分な説明と期待値調整",
    body: "内容・料金・かかる時間を事前に丁寧にご説明し、「思っていたのと違う」が起きないよう期待値の調整まで行ったうえでご参加いただいています。",
  },
];

export function Why() {
  return (
    <Slide id="why" page="02" chapter="Why We Do This" tone="alt">
      <SectionHeading
        title={
          <>
            私たちが
            <span className="text-ig-gradient">スクール案件</span>
            を扱う理由
          </>
        }
        lead={
          <>
            「スクールのPR」と聞いて、少し身構えた方もいるかもしれません。
            その感覚は、フォロワーさんを大切にしている証拠だと思います。
            だからこそ、私たちがこの案件をどう設計しているかを、最初にきちんとお話しさせてください。
          </>
        }
      />

      {/* 前提: インフルエンサーの影響力 */}
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="h-full rounded-3xl border border-paper-line bg-white p-8 shadow-sm md:p-10">
            <Heart className="mb-5 h-6 w-6 text-ig-pink" />
            <h3 className="text-xl font-bold leading-snug">
              あなたの発信には、
              <br />
              人の人生を変える力があります
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-ink-muted">
              インフルエンサーの影響力は、モノを紹介するだけのものではありません。
              あなたの一つの投稿がきっかけで、新しい趣味に出会う人、暮らしを変える人、
              一歩踏み出す勇気をもらう人がいます。
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="h-full rounded-3xl border border-paper-line bg-white p-8 shadow-sm md:p-10">
            <Users className="mb-5 h-6 w-6 text-ig-purple" />
            <h3 className="text-xl font-bold leading-snug">
              フォロワーさんが憧れているのは、
              <br />
              ライフスタイルだけではありません
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-ink-muted">
              素敵な暮らしの向こう側にある「働き方」や「考え方」。
              自分の好きなことを軸に、自分のペースで生きる姿にこそ、
              多くのフォロワーさんが憧れを抱いています。
            </p>
          </div>
        </FadeIn>
      </div>

      {/* 関心はあるのに動けない、という現実 */}
      <FadeIn className="mt-6">
        <div className="rounded-3xl border border-paper-line bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                Interest
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug">
                こうした働き方への関心は、
                <br />
                とても大きくなっています
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper-alt px-4 py-2 text-sm font-medium"
                  >
                    <item.icon className="h-4 w-4 text-ig-orange" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden h-24 w-px bg-paper-line lg:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                But...
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug">
                けれど、ほとんどの人は
                <br />
                最初の一歩でつまずきます
              </h3>
              <ul className="mt-6 space-y-3">
                {struggles.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                  >
                    <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ig-gradient" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* だから、私たちのアプローチ */}
      <FadeIn className="mt-16 md:mt-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
          Our Approach
        </p>
        <h3 className="text-2xl font-bold leading-snug md:text-3xl">
          だから私たちは、「売る」より先に
          <br className="hidden md:block" />
          「知ってもらう」ことから始めます
        </h3>
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {approach.map((a, i) => (
          <FadeIn key={a.step} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-paper-line bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ig-gradient-soft">
                  <a.icon className="h-5 w-5 text-ig-pink" />
                </span>
                <span className="text-xs font-bold tracking-[0.18em] text-ink-faint">
                  {a.step}
                </span>
              </div>
              <h4 className="text-lg font-bold">{a.title}</h4>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{a.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12">
        <div className="rounded-3xl bg-ink p-8 text-white md:p-12">
          <p className="text-lg font-bold leading-relaxed md:text-2xl md:leading-relaxed">
            私たちが最優先しているのは、
            <span className="text-ig-gradient">
              フォロワーさんに価値ある情報を届けること。
            </span>
            <br />
            それが結果として、あなたのアカウントへの信頼にもつながると考えています。
          </p>
        </div>
      </FadeIn>
    </Slide>
  );
}
