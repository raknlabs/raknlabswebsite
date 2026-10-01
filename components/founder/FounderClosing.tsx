import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { founder } from "@/lib/founder";

const { closing } = founder;

export function FounderClosing() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-display text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-white/35">
            {closing.kicker}
          </p>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.0] tracking-[-0.01em] text-white sm:text-6xl md:text-7xl">
            {closing.title}
          </h2>
          <div className="light-line mt-8 max-w-[10rem]" />
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
            {closing.paragraph}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href={closing.primaryCta.href}>
                {closing.primaryCta.label}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={closing.secondaryCta.href}>
                {closing.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
