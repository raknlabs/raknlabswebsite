import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";

export function Social() {
  return (
    <section id="follow" className="relative overflow-hidden bg-void py-28 md:py-36">
      <div className="energy-field opacity-50" />
      <div
        className="energy-shard left-[8%] top-[20%] h-48 w-64 opacity-30"
        aria-hidden="true"
      />
      <div
        className="energy-shard right-[6%] bottom-[18%] h-40 w-56 rotate-12 opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.48em] text-rakn-cyan">
            Community
          </p>
          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl">
            Follow the lab
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-white/60">
            Drop your real profile URLs into siteConfig.ts. Until then, these
            doors stay ready.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-12 flex justify-center">
          <SocialLinks size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
