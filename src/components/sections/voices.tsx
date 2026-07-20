import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { ImageSlot } from "@/components/image-slot";

/**
 * 参加者の声(スクリーンショット差し替え前提のダミーレイアウト)。
 * /public/assets/voices/voice-01.png 〜 voice-06.png を配置するだけで完成する。
 */
const voices = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/voices/voice-${n}.png`,
    label: `参加者の声 ${n}`,
  };
});

export function Voices() {
  return (
    <Slide id="voices" page="02" chapter="Voices" tone="white">
      <SectionHeading
        title="勉強会に参加された方の声"
        lead="実際に無料勉強会へ参加された方からいただいた声の一部です。(スクリーンショットは順次追加予定です)"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {voices.map((v, i) => (
          <FadeIn key={v.src} delay={(i % 3) * 0.08}>
            <ImageSlot
              src={v.src}
              alt={v.label}
              label={v.label}
              className="aspect-[4/5] rounded-2xl border border-paper-line shadow-sm"
            />
          </FadeIn>
        ))}
      </div>
    </Slide>
  );
}
