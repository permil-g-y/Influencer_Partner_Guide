import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { ImageSlot } from "@/components/image-slot";

/**
 * 投稿実績(スクリーンショット差し替え前提のダミーレイアウト)。
 * /public/assets/cases/case01/ 〜 case04/ 配下に
 *   profile.png / feed-01.png〜feed-03.png / story-01.png〜story-03.png
 * を配置するだけで完成する。
 */
const cases = Array.from({ length: 4 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `case${n}`,
    title: `Case ${n}`,
    base: `/assets/cases/case${n}`,
  };
});

export function Cases() {
  return (
    <Slide id="cases" page="08" chapter="Case Studies" tone="white">
      <SectionHeading
        title={
          <>
            投稿<span className="text-ig-gradient">実績</span>
          </>
        }
        lead="実際のPR投稿の一部をご紹介します。(スクリーンショットは順次追加予定です)"
      />

      <div className="space-y-16 md:space-y-20">
        {cases.map((c, i) => (
          <FadeIn key={c.id} delay={0.05}>
            <article>
              <div className="mb-6 flex items-center gap-4">
                <p className="stat-number text-2xl md:text-3xl">
                  <span className="text-ig-gradient">{c.title}</span>
                </p>
                <span className="h-px flex-1 bg-paper-line" />
              </div>

              <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
                {/* プロフィール */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    Profile
                  </p>
                  <ImageSlot
                    src={`${c.base}/profile.png`}
                    alt={`${c.title} プロフィール`}
                    label={`${c.title} プロフィール`}
                    className="aspect-[4/3] rounded-2xl border border-paper-line shadow-sm lg:aspect-auto lg:h-[calc(100%-1.75rem)]"
                  />
                </div>

                <div className="space-y-5">
                  {/* フィード一覧 */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                      Feed
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((n) => (
                        <ImageSlot
                          key={n}
                          src={`${c.base}/feed-0${n}.png`}
                          alt={`${c.title} フィード ${n}`}
                          label={`フィード ${n}`}
                          className="aspect-square rounded-xl border border-paper-line"
                        />
                      ))}
                    </div>
                  </div>
                  {/* ストーリーズ */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                      Stories
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((n) => (
                        <ImageSlot
                          key={n}
                          src={`${c.base}/story-0${n}.png`}
                          alt={`${c.title} ストーリーズ ${n}`}
                          label={`ストーリーズ ${n}`}
                          className="aspect-[9/16] rounded-xl border border-paper-line"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Slide>
  );
}
