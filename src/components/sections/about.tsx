import { Handshake, Megaphone, MonitorSmartphone, Workflow } from "lucide-react";
import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site";

const services = [
  {
    icon: Megaphone,
    title: "インフルエンサーマーケティング",
    body: "ブランドとインフルエンサーの世界観が重なる企画を設計し、双方にとって価値あるPRを実現します。",
  },
  {
    icon: Handshake,
    title: "キャスティング",
    body: "案件との相性を丁寧に見極めたマッチングで、無理のないPRパートナーシップをつくります。",
  },
  {
    icon: MonitorSmartphone,
    title: "SNSマーケティング",
    body: "アカウント分析からクリエイティブ制作まで、SNSでの成果に一気通貫で伴走します。",
  },
  {
    icon: Workflow,
    title: "BPO支援",
    body: "SNS運用にまつわる実務を代行し、企業・個人が本来の活動に集中できる体制を支えます。",
  },
];

export function About() {
  return (
    <Slide id="about" page="03" chapter="About DACHO" tone="alt">
      <SectionHeading
        title={
          <>
            合同会社DACHOに<span className="text-ig-gradient">ついて</span>
          </>
        }
        lead={
          <>
            DACHOは、インフルエンサーマーケティングを軸に、キャスティング・SNSマーケティング・BPO支援を行う会社です。
            私たちが大切にしているのは、フォロワーさん・インフルエンサー・クライアントの三者すべてにとって
            誠実であること。数字だけを追うPRではなく、長く信頼される発信づくりをお手伝いしています。
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* 会社概要 */}
        <FadeIn>
          <div className="rounded-3xl border border-paper-line bg-white p-8 shadow-sm md:p-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Company Profile
            </p>
            <dl>
              {siteConfig.companyOverview.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-paper-line py-5 last:border-b-0"
                >
                  <dt className="text-sm font-semibold text-ink-faint">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-7 text-ink-soft">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>

        {/* 事業内容 */}
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-paper-line bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ig-gradient-soft">
                  <s.icon className="h-5 w-5 text-ig-purple" />
                </span>
                <h3 className="text-base font-bold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Slide>
  );
}
