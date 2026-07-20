import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "アカウントの世界観は壊れませんか？",
    a: "壊さないことを最優先に設計しています。事前にアカウントの投稿トーン・色味・言葉づかいを分析し、世界観に馴染む台本とクリエイティブを制作します。違和感のある内容を無理にお願いすることはありません。",
  },
  {
    q: "投稿前に内容の修正はできますか？",
    a: "はい、可能です。台本・画像・動画はすべて投稿前にご確認いただき、気になる箇所は柔軟に修正します。納得いただけた状態でのみ投稿していただきます。",
  },
  {
    q: "成果報酬はどのように発生しますか？",
    a: "案件ごとに成果地点(例:無料勉強会へのご参加など)を設定し、その達成数に応じてお支払いします。平均で1件あたり約¥80,000です。詳細な条件はZoomにてご説明します。",
  },
  {
    q: "継続的にお願いされることはありますか？",
    a: "はい。単発で終わりではなく、四半期〜半年に一度のペースで継続案件をご相談しています。長くお付き合いできる関係を大切にしています。",
  },
  {
    q: "他社の競合案件を受けていても大丈夫ですか？",
    a: "案件内容やタイミングによって調整が必要な場合があります。現在受けている案件・予定している案件があれば、Zoomの際にお聞かせください。無理のない形をご一緒に検討します。",
  },
  {
    q: "投稿スケジュールは調整できますか？",
    a: "はい。ご自身の投稿計画やライフスタイルに合わせて、開始時期・投稿日程は柔軟に調整可能です。",
  },
  {
    q: "紹介するスクールはどのような内容ですか？",
    a: "SNS運用を軸にした働き方を学ぶスクールです。いきなり講座を販売するのではなく、まず無料勉強会で内容を知っていただき、希望される方にのみ有料講座をご案内する流れです。詳しい内容はZoomでご説明します。",
  },
  {
    q: "フォロワー数が少なくても参加できますか？",
    a: "フォロワー数だけでなく、ストーリーズ閲覧数やフォロワー属性を総合的に拝見してご提案しています。まずはお気軽にご相談ください。",
  },
];

export function Faq() {
  return (
    <Slide id="faq" page="09" chapter="FAQ" tone="alt">
      <SectionHeading
        title={
          <>
            よくある<span className="text-ig-gradient">ご質問</span>
          </>
        }
        lead="Zoomの前に気になりそうなことをまとめました。ここにない疑問は、当日なんでもお聞きください。"
      />
      <FadeIn>
        <Accordion
          type="single"
          collapsible
          className="grid gap-4 lg:grid-cols-2 lg:items-start"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger>
                <span className="flex items-baseline gap-3">
                  <span className="text-sm font-bold text-ig-pink">Q.</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </Slide>
  );
}
