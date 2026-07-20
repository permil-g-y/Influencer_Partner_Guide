import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

/** フォロワーさんが抱く憧れ・関心 */
const aspirations = [
  "自分もSNSを仕事にしてみたい",
  "在宅で働きたい",
  "副業を始めてみたい",
  "フリーランスに興味がある",
  "場所や時間に縛られない働き方をしたい",
];

/** 最初の一歩を踏み出せない理由 */
const hesitations = [
  "何から始めればいいか分からない",
  "行動するきっかけがない",
  "自分にもできるか不安",
  "一人では続けられない",
];

/** 無料勉強会から受講までの流れ(希望者のみ) */
const flow = [
  { label: "STEP 1", title: "まずは無料勉強会へご参加", optional: false },
  { label: "STEP 2", title: "SNS運用や働き方を知っていただく", optional: false },
  { label: "STEP 3", title: "希望される方のみ個別相談をご案内", optional: true },
  {
    label: "STEP 4",
    title: "講座内容・料金・サポートを十分にご説明",
    optional: false,
  },
  { label: "STEP 5", title: "内容にご納得いただいた方のみ受講", optional: true },
];

/** 小さな英字ラベル(セクション内の区切り) */
function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
      {children}
    </p>
  );
}

export function Why() {
  return (
    <>
      {/* ───────── Slide 1: 大切にしていること / SNSスクールとは / フォロワーさんへの価値 ───────── */}
      <Slide id="why" page="02" chapter="What We Value" tone="alt">
        <SectionHeading
          title={
            <>
              私たちが<span className="text-ig-gradient">大切にしていること</span>
            </>
          }
          lead={
            <>
              DACHOは、第三者のスクール案件をただ紹介しているのではありません。
              自社およびコンサルティング先で、SNSスクールの運営・支援に携わる立場から、
              フォロワーさんに本当に価値のある情報をお届けしたいと考えています。
            </>
          }
        />

        {/* SNSスクールとは？ */}
        <FadeIn>
          <div className="max-w-3xl">
            <Eyebrow>What is it</Eyebrow>
            <h3 className="text-2xl font-bold leading-snug md:text-3xl">
              SNSスクールとは？
            </h3>
            <p className="mt-5 text-[15px] leading-8 text-ink-muted md:text-base md:leading-9">
              Instagram や TikTok などの SNS を通じて、副業・フリーランス・自由な働き方を
              目指す方のためのオンラインスクールです。SNS運用の基礎はもちろん、発信設計・
              アカウント運用・案件獲得・収益化まで、一人ひとりの目標に合わせて伴走します。
            </p>
          </div>
        </FadeIn>

        {/* 区切り: 細い罫線 */}
        <FadeIn>
          <hr className="my-14 border-t border-paper-line md:my-16" />
        </FadeIn>

        {/* フォロワーさんにとっても価値のある情報 */}
        <FadeIn>
          <div className="max-w-3xl">
            <Eyebrow>For Your Followers</Eyebrow>
            <h3 className="text-2xl font-bold leading-snug md:text-3xl">
              フォロワーさんにとっても、
              <br className="hidden sm:block" />
              価値のある情報を
            </h3>
            <p className="mt-5 text-[15px] leading-8 text-ink-muted md:text-base md:leading-9">
              あなたをフォローしている方は、投稿だけでなく、私生活・ライフスタイル・考え方・
              働き方にも憧れを抱いています。その中には、こんな思いを持つ方も少なくありません。
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl bg-white p-7 md:p-8">
              <p className="text-sm font-bold text-ink">
                こんな働き方に憧れている
              </p>
              <ul className="mt-5 space-y-3.5">
                {aspirations.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ig-gradient" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-white p-7 md:p-8">
              <p className="text-sm font-bold text-ink">
                でも、最初の一歩が踏み出せない
              </p>
              <ul className="mt-5 space-y-3.5">
                {hesitations.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint/50" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="mt-10 max-w-3xl text-[15px] leading-8 text-ink-muted md:text-base md:leading-9">
            私たちは、そうしたフォロワーさんが新しい働き方を知り、最初の一歩を踏み出す
            きっかけとして、
            <span className="font-semibold text-ink">無料勉強会</span>
            をご用意しています。
          </p>
        </FadeIn>
      </Slide>

      {/* ───────── Slide 2: 丁寧なご案内フロー / 最後のメッセージ ───────── */}
      <Slide id="why-care" page="02" chapter="Our Commitment" tone="white">
        <SectionHeading
          title={
            <>
              スクール案件だからこそ、
              <br className="hidden sm:block" />
              <span className="text-ig-gradient">丁寧にご案内します</span>
            </>
          }
          lead={
            <>
              中には強引な営業や誇大な表現をするスクールがあるのも事実で、「スクール案件」と
              聞いて身構えてしまう方がいることも理解しています。だからこそ私たちは、不安や誤解が
              残らないよう、丁寧な説明と期待値の調整を徹底しています。
            </>
          }
        />

        {/* ご案内の流れ(希望者のみが一目で伝わるステップ) */}
        <FadeIn>
          <Eyebrow>How We Guide</Eyebrow>
        </FadeIn>
        <ol className="max-w-3xl space-y-0">
          {flow.map((step, i) => (
            <FadeIn key={step.label} delay={i * 0.06}>
              <li className="flex gap-5 md:gap-6">
                {/* ステップ番号 + 縦線 */}
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper-line bg-white text-xs font-bold text-ink-soft">
                    {i + 1}
                  </span>
                  {i < flow.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-paper-line" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pb-8">
                  <p className="text-[15px] font-semibold leading-snug text-ink md:text-base">
                    {step.title}
                  </p>
                  {step.optional && (
                    <span className="inline-flex items-center rounded-full bg-ig-gradient-soft px-3 py-1 text-[11px] font-bold text-ig-pink">
                      希望者のみ
                    </span>
                  )}
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn>
          <p className="max-w-3xl text-sm leading-7 text-ink-muted">
            強引な販売は一切行いません。事前のご説明と期待値の調整を大切に、
            ご納得いただいた方だけにお進みいただく流れです。
          </p>
        </FadeIn>

        {/* 最後のメッセージ(黒背景・簡潔に) */}
        <FadeIn className="mt-16 md:mt-20">
          <div className="rounded-3xl bg-ink p-10 text-white md:p-14">
            <p className="text-xl font-bold leading-relaxed md:text-3xl md:leading-[1.5]">
              私たちが最も大切にしているのは、
              <br className="hidden md:block" />
              <span className="text-ig-gradient">
                フォロワーさんに価値ある情報を届けること。
              </span>
            </p>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/70 md:text-base">
              その積み重ねが、あなたの信頼を守り、長く応援されるアカウントづくりに
              つながると考えています。
            </p>
          </div>
        </FadeIn>
      </Slide>
    </>
  );
}
