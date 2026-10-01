import { Reveal } from "@/components/Reveal";
import { founder } from "@/lib/founder";

const { building } = founder;

export function FounderBuilding() {
  return (
    <section
      id="building"
      className="scroll-mt-28 border-y border-white/10 bg-ink"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[12rem_1fr] lg:gap-16">
          <Reveal>
            <p className="font-display text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-white/35">
              {building.kicker}
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.01em] text-white sm:text-4xl md:text-5xl">
                {building.title}
              </h2>
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-7 max-w-2xl space-y-5">
                {building.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[1.02rem] leading-[1.75] text-white/65"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="corner-ticks relative mt-12 flex w-fit items-center gap-6 border border-white/10 bg-void px-7 py-5">
                <span className="font-display text-5xl font-bold leading-none text-white md:text-6xl">
                  {String(building.publishedProducts).padStart(2, "0")}
                </span>
                <span className="font-display text-[0.72rem] font-semibold uppercase leading-relaxed tracking-[0.26em] text-white/50">
                  Published
                  <br />
                  products
                </span>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
              <Reveal>
                <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-rakn-cyan">
                  Directly involved in
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {building.disciplines.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[0.95rem] text-white/70"
                    >
                      <span
                        className="mt-[0.55em] h-px w-3 shrink-0 bg-rakn-cyan/60"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={60}>
                <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-rakn-cyan">
                  Areas worked on
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {building.domains.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[0.95rem] text-white/70"
                    >
                      <span
                        className="mt-[0.55em] h-px w-3 shrink-0 bg-white/30"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={90}>
              <div className="mt-16">
                <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/40">
                  Technical background
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {building.stack.map((item) => (
                    <li
                      key={item}
                      className="border border-white/10 px-3 py-1.5 font-mono text-[0.8rem] text-white/65 transition-colors duration-200 hover:border-rakn-cyan/40 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
