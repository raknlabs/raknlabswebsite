import { Reveal } from "@/components/Reveal";
import { founder, type Chapter } from "@/lib/founder";

function FactGrid({ facts }: { facts: NonNullable<Chapter["facts"]> }) {
  return (
    <dl className="mt-10 grid max-w-2xl gap-x-10 gap-y-7 sm:grid-cols-2">
      {facts.map((fact) => (
        <div key={fact.label} className="border-l border-white/15 pl-5">
          <dt className="font-display text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-rakn-cyan/70">
            {fact.label}
          </dt>
          <dd className="mt-2 text-[0.95rem] leading-snug text-white/80">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ChapterBlock({ chapter }: { chapter: Chapter }) {
  return (
    <article
      id={chapter.id}
      className="scroll-mt-28 border-t border-white/10 py-16 first:border-t-0 first:pt-0 md:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[12rem_1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="font-display text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-white/35">
              {chapter.kicker}
            </p>
            <p className="mt-2 font-mono text-sm text-rakn-cyan/80">
              {chapter.period}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.01em] text-white sm:text-4xl md:text-5xl">
              {chapter.title}
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-7 max-w-2xl space-y-5">
              {chapter.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-[1.02rem] leading-[1.75] text-white/65"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {chapter.pullquote ? (
            <Reveal delay={90}>
              <blockquote className="mt-10 max-w-2xl border-l-2 border-rakn-cyan/40 pl-6">
                <p className="font-display text-lg leading-snug text-white/85 md:text-xl">
                  {chapter.pullquote}
                </p>
              </blockquote>
            </Reveal>
          ) : null}

          {chapter.facts ? (
            <Reveal delay={120}>
              <FactGrid facts={chapter.facts} />
            </Reveal>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function FounderChapters() {
  return (
    <section className="bg-void">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        {founder.chapters.map((chapter) => (
          <ChapterBlock key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}
