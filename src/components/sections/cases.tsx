import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { CasesShowcase } from "@/components/cases/cases-showcase";

export function Cases() {
  return (
    <Slide id="cases" page="07" chapter="Case Studies" tone="white">
      <SectionHeading
        title={
          <>
            世界観を壊さない、
            <br className="hidden sm:block" />
            <span className="text-ig-gradient">リアルなPR実績</span>
          </>
        }
        lead={
          <>
            実際にインフルエンサーの皆さんが投稿したPRストーリーズです。
            「広告」ではなく、いつもの発信の延長線上に自然と溶け込んでいることを、
            そのままの画面でご覧ください。
          </>
        }
      />
      <CasesShowcase />

      <FadeIn>
        <p className="mt-12 max-w-3xl text-xs leading-6 text-ink-faint md:mt-14 md:text-[13px]">
          ※掲載している投稿事例は、合同会社DACHOがキャスティング・企画・クリエイティブ制作・運用支援を担当した、提携オンラインスクールのPR実績の一部です。
        </p>
      </FadeIn>
    </Slide>
  );
}
