import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper-line/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-slide items-center justify-between px-6 md:px-10">
        <a href="#hero" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight">DACHO</span>
          <span className="hidden text-[11px] font-medium text-ink-faint sm:inline">
            {siteConfig.name}
          </span>
        </a>
        <CtaButton size="default" label="Zoomで相談する" className="h-10 px-5 text-xs" />
      </div>
    </header>
  );
}
