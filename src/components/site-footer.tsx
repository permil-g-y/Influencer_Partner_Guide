import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-paper-alt py-10">
      <div className="mx-auto flex w-full max-w-slide flex-col items-center gap-3 px-6 text-center md:px-10">
        <p className="text-sm font-bold tracking-tight">DACHO</p>
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} {siteConfig.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
