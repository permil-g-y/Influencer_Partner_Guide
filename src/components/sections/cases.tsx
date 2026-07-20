import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { CasesShowcase } from "@/components/cases/cases-showcase";

export function Cases() {
  return (
    <Slide id="cases" page="08" chapter="Case Studies" tone="white">
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
    </Slide>
  );
}
