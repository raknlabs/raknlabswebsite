import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SmartImage } from "@/components/SmartImage";
import { siteConfig } from "@/lib/siteConfig";

type NewsProps = {
  availability: Record<string, boolean>;
};

export function News({ availability }: NewsProps) {
  return (
    <section id="news" className="relative bg-void py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle kicker="Updates" title="Latest from RAKN LABS" />
        </Reveal>
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {siteConfig.news.map((item, index) => {
            const inner = (
              <article className="card-hover flex h-full flex-col border border-white/10 bg-surface">
                <div className="media-frame aspect-[16/10]">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    available={availability[item.id] ?? false}
                    placeholderLabel={item.category}
                    placeholderCaption={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-rakn-magenta">
                      {item.category}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                      {item.date}
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.excerpt}
                  </p>
                  {item.placeholder ? (
                    <p className="mt-5 font-display text-[0.65rem] uppercase tracking-[0.28em] text-white/30">
                      Placeholder card
                    </p>
                  ) : null}
                </div>
              </article>
            );

            return (
              <Reveal key={item.id} delay={index * 80}>
                {item.href ? (
                  <a href={item.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
