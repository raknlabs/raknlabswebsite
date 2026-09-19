import { SmartImage } from "@/components/SmartImage";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { getLivePlatforms, siteConfig } from "@/lib/siteConfig";

type FeaturedGameProps = {
  coverAvailable: boolean;
  logoAvailable: boolean;
  screenshotAvailability: boolean[];
};

export function FeaturedGame({
  coverAvailable,
  logoAvailable,
  screenshotAvailability,
}: FeaturedGameProps) {
  const game = siteConfig.featuredGame;
  const platforms = getLivePlatforms();

  return (
    <section id="featured" className="relative bg-void py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle
            kicker="Featured"
            title="The next game from RAKN LABS"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <Reveal className="media-frame aspect-[16/10] w-full border border-white/10 lg:aspect-[16/11]">
            <SmartImage
              src={game.coverImage}
              alt={`${game.title} artwork`}
              available={coverAvailable}
              placeholderLabel="GAME ARTWORK"
              placeholderCaption={game.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </Reveal>

          <Reveal delay={80} className="flex flex-col justify-end pb-2">
            <div className="mb-6">
              {logoAvailable ? (
                <div className="play-icon relative size-20 overflow-hidden sm:size-24">
                  <SmartImage
                    src={game.logoImage}
                    alt={`${game.title} icon`}
                    available={logoAvailable}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              ) : (
                <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
                  Game logo slot
                </p>
              )}
            </div>
            <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-rakn-magenta">
              {game.genre} · {game.releaseStatus}
            </p>
            <h3 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl">
              {game.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              {game.description}
            </p>
            {platforms.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <Button key={platform.id} asChild variant="platform" size="sm">
                    <a href={platform.href} target="_blank" rel="noreferrer">
                      {platform.label}
                    </a>
                  </Button>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {game.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <article className="border border-white/10 bg-surface/60 p-6 md:p-7">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-rakn-cyan">
                  {feature.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {feature.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <p className="mb-5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-white/45">
              Screenshots
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {game.screenshots.map((src, index) => (
              <Reveal key={src} delay={index * 60}>
                <div className="media-frame aspect-video border border-white/10">
                  <SmartImage
                    src={src}
                    alt={`${game.title} screenshot ${index + 1}`}
                    available={screenshotAvailability[index] ?? false}
                    placeholderLabel={`SHOT 0${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
