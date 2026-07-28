/**
 * サイト全体の設定・文言のうち「後から差し替える可能性が高いもの」を集約しています。
 * URL や会社情報を変更する場合は、このファイルのみ編集すれば反映されます。
 */

export const siteConfig = {
  name: "合同会社DACHO",
  nameEn: "DACHO LLC.",
  title: "SNSスクールPR案件のご案内 | 合同会社DACHO",
  description:
    "合同会社DACHOがキャスティングする、Instagramインフルエンサー向けSNSスクールPR案件のご案内。固定報酬＋成果報酬、世界観を壊さないPR設計、台本・デザイン・動画編集まで全て当社対応。まずは30分、Zoomでお話ししませんか。",
  url: "https://dacho-influencer-guide.vercel.app",

  /**
   * Zoom日程調整用のURL（TimeRex / Calendly / Googleカレンダー予約ページなど）。
   * 未設定の間、CTAボタンは「DMで返信」への案内文とあわせて表示されます。
   */
  zoomSchedulingUrl:
    "https://app.spirinc.com/t/OFCD0HcoEckabrhNiV_k0/as/NvzeuFW6wPfkylE5fRfsh/confirm-guest",

  companyOverview: [
    { label: "会社名", value: "合同会社DACHO" },
    {
      label: "事業内容",
      value:
        "インフルエンサーマーケティング / キャスティング / SNSマーケティング / BPO支援 / SNSスクール運営",
    },
    {
      label: "お問い合わせ",
      value: "公式InstagramのDMより、お気軽にご連絡ください。",
    },
  ],
};
