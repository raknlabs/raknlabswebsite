import { Reveal } from "@/components/Reveal";
import { founder } from "@/lib/founder";

const { team } = founder;

export function FounderTeam() {
  return (
    <section id="team" className="scroll-mt-28 bg-void">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[12rem_1fr] lg:gap-16">
          <Reveal>
            <p className="font-display text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-white/35">
              {team.kicker}
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-3xl font-display text-3xl font-semibold uppercase tracking-[0.01em] text-white sm:text-4xl md:text-5xl">
                {team.title}
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-7 max-w-2xl space-y-5">
                {team.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[1.02rem] leading-[1.75] text-white/65"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
