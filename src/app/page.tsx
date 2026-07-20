import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { Voices } from "@/components/sections/voices";
import { About } from "@/components/sections/about";
import { Strengths } from "@/components/sections/strengths";
import { Reward } from "@/components/sections/reward";
import { Flow } from "@/components/sections/flow";
import { Posting } from "@/components/sections/posting";
import { Cases } from "@/components/sections/cases";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Why />
        <Voices />
        <About />
        <Strengths />
        <Reward />
        <Flow />
        <Posting />
        <Cases />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
