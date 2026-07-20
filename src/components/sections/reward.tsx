import { ArrowDown, Plus, Equal } from "lucide-react";
import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

export function Reward() {
  return (
    <Slide id="reward" page="05" chapter="Rewards" tone="dark">
      <SectionHeading
        dark
        title={
          <>
            報酬は、<span className="text-ig-gradient">固定＋成果</span>
            の二段構え
          </>
        }
        lead="「成果が出なかったらゼロ」ではありません。固定報酬で最低ラインを保証したうえで、成果に応じた報酬が上乗せされる設計です。"
      />

      {/* 最低保証 → 成果報酬 */}
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              01 ｜ 固定報酬(最低保証)
            </p>
            <p className="stat-number mt-6 text-4xl md:text-5xl">
              <span className="whitespace-nowrap">フォロワー数</span>
              <span className="whitespace-nowrap">
                <span className="text-ig-gradient"> × ¥1</span>
                <span className="text-xl font-semibold text-white/70 md:text-2xl">
                  {" "}
                  以上
                </span>
              </span>
            </p>
            <p className="mt-6 text-sm leading-7 text-white/60">
              成果に関わらず、必ずお支払いする金額です。フォロワー数に応じて個別にご提案します。
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              02 ｜ 成果報酬
            </p>
            <p className="stat-number mt-6 text-4xl md:text-5xl">
              平均{" "}
              <span className="whitespace-nowrap">
                <span className="text-ig-gradient">約¥80,000</span>
                <span className="text-xl font-semibold text-white/70 md:text-2xl">
                  {" "}
                  / 件
                </span>
              </span>
            </p>
            <p className="mt-6 text-sm leading-7 text-white/60">
              案件ごとに成果報酬を設定。成果が積み上がるほど、報酬も大きくなります。
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="my-10 flex justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <ArrowDown className="h-5 w-5 text-white/70" />
        </span>
      </FadeIn>

      {/* シミュレーション */}
      <FadeIn>
        <div className="overflow-hidden rounded-3xl bg-white text-ink shadow-2xl">
          <div className="border-b border-paper-line px-8 py-6 md:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Simulation
            </p>
            <p className="mt-2 text-lg font-bold md:text-xl">
              フォロワー30,000人の方が、成果2件を達成した場合
            </p>
          </div>
          <div className="grid items-center gap-8 px-8 py-10 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] md:px-12 md:py-12">
            <div>
              <p className="text-xs font-semibold text-ink-faint">
                固定報酬(30,000人 × ¥1)
              </p>
              <p className="stat-number mt-3 text-4xl md:text-5xl">¥30,000</p>
            </div>
            <Plus className="mx-auto h-6 w-6 text-ink-faint" />
            <div>
              <p className="text-xs font-semibold text-ink-faint">
                成果報酬(¥80,000 × 2件)
              </p>
              <p className="stat-number mt-3 text-4xl md:text-5xl">¥160,000</p>
            </div>
            <Equal className="mx-auto h-6 w-6 text-ink-faint" />
            <div className="rounded-2xl bg-ig-gradient-soft p-6 md:p-8">
              <p className="text-xs font-semibold text-ink-faint">
                受け取り合計(1案件あたり)
              </p>
              <p className="stat-number mt-3 text-5xl md:text-6xl">
                <span className="text-ig-gradient">¥190,000</span>
              </p>
            </div>
          </div>
          <p className="px-8 pb-8 text-xs leading-relaxed text-ink-faint md:px-12">
            ※ 金額は一例です。実際の条件は、フォロワー属性やストーリーズ閲覧数などをもとに個別にご提案します。
          </p>
        </div>
      </FadeIn>
    </Slide>
  );
}
