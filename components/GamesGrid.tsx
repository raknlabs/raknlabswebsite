import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SmartImage } from "@/components/SmartImage";
import { siteConfig, type GameSlot } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

type GamesGridProps = {
  availability: Record<string, boolean>;
};

function GameCard({
  game,
  available,
  featured = false,
}: {
  game: GameSlot;
  available: boolean;
  featured?: boolean;
}) {
  const inner = (
    <>
      <SmartImage
        src={game.image}
        alt={game.title}
        available={available}
        placeholderLabel={featured ? "THE MAIN GAME" : game.title}
        placeholderCaption={game.status}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 70vw" : "(max-width: 768px) 100vw, 33vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-rakn-cyan">
          {game.status}
        </p>
        <h3
          className={cn(
            "mt-2 font-display font-bold uppercase tracking-tight text-white",
            featured ? "text-4xl sm:text-6xl" : "text-2xl",
          )}
        >
          {game.title}
        </h3>
      </div>
    </>
  );

  const className = cn(
    "media-frame card-hover relative block overflow-hidden border border-white/10",
    featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/11]",
  );

  if (game.href) {
    return (
      <Link href={game.href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function GamesGrid({ availability }: GamesGridProps) {
  const [featured, ...rest] = siteConfig.games;

  return (
    <section id="games" className="relative bg-void py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle kicker="Catalog" title="Our games" />
        </Reveal>
        <div className="mt-12 space-y-4 md:mt-16">
          {featured ? (
            <Reveal>
              <GameCard
                game={featured}
                available={availability[featured.id] ?? false}
                featured
              />
            </Reveal>
          ) : null}
          <div className="grid gap-4 md:grid-cols-3">
            {rest.map((game, index) => (
              <Reveal key={game.id} delay={index * 80}>
                <GameCard
                  game={game}
                  available={availability[game.id] ?? false}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
