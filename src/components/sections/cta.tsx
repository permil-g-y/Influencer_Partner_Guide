import { Clock, MessageCircle, UserCheck } from "lucide-react";
import { Slide } from "@/components/slide";
import { FadeIn } from "@/components/fade-in";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site";

const reassurances = [
  { icon: Clock, label: "所要時間は30分ほど" },
  { icon: UserCheck, label: "その場での契約は不要" },
  { icon: MessageCircle, label: "質問だけでも大歓迎" },
];

export function Cta() {
  return (
    <Slide id="cta" page="10" chapter="Contact" tone="white" className="lg:min-h-[90vh]">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.25]">
          案件詳細について、
          <br />
          一度<span className="text-ig-gradient">Zoom</span>
          でお話ししませんか？
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-ink-muted md:text-base">
          案件条件は、ストーリーズ閲覧数・フォロワー属性・投稿内容などを
          確認したうえで、お一人おひとりに個別にご提案しています。
          ぜひ30分ほどZoomでお時間をいただき、案件の詳細をご説明させてください。
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 flex flex-col items-center gap-8">
        <CtaButton className="h-16 px-12 text-lg" />
        {!siteConfig.zoomSchedulingUrl && (
          <p className="text-xs text-ink-faint">
            本サイトをお送りしたDMに「Zoom希望」とご返信いただくだけでもOKです。
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3">
          {reassurances.map((r) => (
            <span
              key={r.label}
              className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-white px-4 py-2 text-xs font-semibold text-ink-soft shadow-sm"
            >
              <r.icon className="h-3.5 w-3.5 text-ig-pink" />
              {r.label}
            </span>
          ))}
        </div>
      </FadeIn>
    </Slide>
  );
}
