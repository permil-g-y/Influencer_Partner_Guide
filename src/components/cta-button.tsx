import { ArrowRight, Video } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  size?: "default" | "lg";
  className?: string;
  label?: string;
};

/**
 * 最終CTA(Zoom日程調整)へのボタン。
 * siteConfig.zoomSchedulingUrl が設定されていれば外部リンク、
 * 未設定の間はページ末尾のCTAセクションへスクロールする。
 */
export function CtaButton({
  size = "lg",
  className,
  label = "Zoom日程を調整する",
}: CtaButtonProps) {
  const href = siteConfig.zoomSchedulingUrl || "#cta";
  const isExternal = Boolean(siteConfig.zoomSchedulingUrl);

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(buttonVariants({ variant: "gradient", size }), className)}
    >
      <Video className="h-5 w-5" />
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
