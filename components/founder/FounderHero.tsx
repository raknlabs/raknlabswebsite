import { FounderPortrait } from "@/components/founder/FounderPortrait";
import { founder } from "@/lib/founder";

export function FounderHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-void">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        <div className="grid items-start gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div className="hero-copy">
            <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-rakn-cyan">
              {founder.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.015em] text-white sm:text-6xl lg:text-[4.2rem]">
              {founder.hero.heading}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
              {founder.hero.intro}
            </p>
            <div className="mt-10 max-w-xl">
              <div className="light-line max-w-[10rem]" />
              <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                <div>
                  <dt className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/35">
                    Role
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/75">
                    {founder.role}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/35">
                    Discipline
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/75">
                    {founder.secondaryRole}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <FounderPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
