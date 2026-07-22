import { Slide } from "@/components/slide";
import { SectionHeading } from "@/components/section-heading";
import { VoicesShowcase } from "@/components/voices/voices-showcase";

export function Voices() {
  return (
    <Slide id="voices" page="02" chapter="Voices" tone="white">
      <SectionHeading
        title={
          <>
            たくさんの<span className="text-ig-gradient">感謝の声</span>
            をいただいています
          </>
        }
        lead="無料勉強会や個別相談に参加された方から、嬉しいメッセージを多数いただいています。その一部をご紹介します。"
      />
      <VoicesShowcase />
    </Slide>
  );
}
