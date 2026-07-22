import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <Slide id="about" page="10" chapter="About DACHO" tone="alt">
      <SectionHeading
        title={
          <>
            合同会社DACHOに<span className="text-ig-gradient">ついて</span>
          </>
        }
        lead={
          <>
            合同会社DACHOは、インフルエンサーマーケティングを支援する会社です。
            キャスティング・SNSマーケティング・BPO支援を通じて、企業とインフルエンサーの発信を総合的にサポートしています。
            さらに、自社でもSNSスクールを運営し、提携スクールのマーケティング・PR支援にも取り組んでいます。
            <br className="hidden md:block" />
            私たちが大切にしているのは、企業・インフルエンサー・フォロワーの三者すべてにとって価値のあるPRであること。
            目先の数字だけを追うのではなく、長く信頼されるマーケティングを重視しています。
          </>
        }
      />

      <FadeIn>
        <div className="max-w-2xl rounded-3xl border border-paper-line bg-white p-8 shadow-sm md:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Company Profile
          </p>
          <dl>
            {siteConfig.companyOverview.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[6rem_1fr] gap-4 border-b border-paper-line py-5 last:border-b-0 sm:grid-cols-[7rem_1fr]"
              >
                <dt className="text-sm font-semibold text-ink-faint">
                  {row.label}
                </dt>
                <dd className="text-sm leading-7 text-ink-soft">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </Slide>
  );
}
